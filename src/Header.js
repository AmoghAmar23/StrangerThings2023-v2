import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { UserContext } from './App';


const Header = (props) => {    
  const {user,token} = React.useContext(UserContext)
    const drawerWidth = 240;
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
    
      const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
    
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Stranger Things
          </Typography>
          <Divider />
          <List>
          <Link href="/" underline="none" sx={{color:'#fff'}}>
            Home
          </Link>
          <Link href="/posts" underline="none" sx={{color:'#fff'}}>
            Posts
          </Link>
          <Link href="/profile" underline="none" sx={{color:'#fff'}}>
            Profile
          </Link>
          {sessionStorage.getItem("token") ? 
              <Button onClick={()=>{sessionStorage.clear()}} sx={{color:'#fff', fontWeight:'400'}}>
                Logout
                </Button>
                : JSON.parse( sessionStorage.getItem("user"))} 
          </List>
        </Box>
      );
    
      const container = window !== undefined ? () => window().document.body : undefined;
    
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Stranger Things
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link href="/" underline="none" sx={{color:'#fff',marginRight:'10px', fontWeight:'400'}}>
                  Home
                </Link>
                <Link href="/posts" underline="none" sx={{color:'#fff',marginRight:'10px', fontWeight:'400'}}>
                  Posts
                </Link>
                <Link href="/profile" underline="none" sx={{color:'#fff',marginRight:'10px', fontWeight:'400'}}>
                  Profile
                </Link>
                {sessionStorage.getItem("token") ? 
                <Button onClick={()=>{sessionStorage.clear()}} sx={{color:'#fff', fontWeight:'400'}}>
                  Logout
                </Button>
                : JSON.parse( sessionStorage.getItem("user"))} 
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      );
    }

export default Header