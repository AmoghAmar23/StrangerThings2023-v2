import Box from '@mui/material/Box';
import { fetchPosts } from './server';
import { useEffect, useState } from 'react';
import Card from './Card';
import { Button, TextField } from '@mui/material';
import CreatePost from './CreatePost';


export default function Posts() {
const [allPosts, setAllPosts] = useState()
const [showModal,setShowModal] = useState(false)
const [searchTerm,setSearchTerm] = useState("")



const getPosts = async ()=> {
    const posts = await fetchPosts()
    console.log(posts)
    setAllPosts(posts.data.posts)
} 
const handleModal = ()=> {
    setShowModal(true)

}
const handleSearch = (e)=> {
    const result=allPosts.filter((post)=>{
        return post.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setAllPosts(result)
}

useEffect(()=>{
    getPosts()
}, [])

  return (
    <Box sx={{ minWidth: 275 }}>
        <Button variant="contained" onClick={handleModal}>Create Post</Button>
        <TextField fullWidth label="search post" id="fullWidth" value ={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <Button variant="contained" onClick={handleSearch}>Search</Button>
        {showModal && <CreatePost/>}
        {allPosts && allPosts.map((post, id)=>{
            return(
                <Card variant="outlined" post={post} setAllPosts = {setAllPosts} key={id} />
            )
        })}

    </Box>
  );
}

