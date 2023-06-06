import { Box, Button, CardActions, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { deletePost, fetchPosts, postMessage } from './server'
import EditPost from './EditPost'

const Card = ({post,setAllPosts}) => {
    const [showModal,setShowModal] = useState(false)
    const [showMessage,setShowMessage] = useState(false)


    const handleEdit=async()=>{
        setShowModal(true)
    }
    const handleDelete=async (id)=>{
        const response = await deletePost(sessionStorage.getItem("token"),id)
        const data = await fetchPosts()
        setAllPosts(data.data.posts)
    }
    const handleSubmit=async (event,id)=>{
        console.log(id)
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        console.log({
            message: data.get('message'),
            
          });
        const response = await postMessage(sessionStorage.getItem("token"),id,data.get('message'))
        console.log(response)
    }
    const handleMessage=()=>{
        setShowMessage(true)
    }

  return (
    <>
    <CardContent>
      
      <Typography variant="h5" component="div">
        {post?.title && post?.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {post?.description && post?.description}
      </Typography>
      <Typography variant="body2">
        Price: {post?.price && post?.price}
      </Typography>
      <Typography variant="body2">
        Seller: {post?.author?.username && post?.author?.username}
      </Typography>
      <Typography variant="body2">
        Location: {post?.location && post?.location}
      </Typography>
    </CardContent>
        {showModal && <EditPost id={post?._id}/>}
    <CardActions>
    {showMessage && <Box component="form" onSubmit={(e)=>{handleSubmit(e,post._id)}} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Message"
                        id="message"
                        multiline
                        rows={4}
                    />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Post
                    </Button>
                </Box>
        }
    <Box>
      <Button size="small" onClick={handleMessage}>Send Message</Button>
      <Button variant="outlined" size="small" onClick={()=>{handleEdit(post?._id)}}>Edit</Button>
      <Button variant="outlined" size="small" onClick={()=>{handleDelete(post?._id)}}>Delete</Button>
    </Box>
    </CardActions>
  </>  )
}

export default Card