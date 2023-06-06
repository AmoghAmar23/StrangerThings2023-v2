import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './App'
import { Box, List, ListItem, ListItemText } from '@mui/material'
import { myData } from './server'

const Profile = () => {
    // const { user, setUser, token, setToken } = useContext(UserContext)
    const [profileData, setProfileData] = useState({});
    useEffect(() => {
        const fetchMessages = async () => {
            const response = await myData(sessionStorage.getItem("token"))
            console.log(response)
            setProfileData(response.data)
        }
        fetchMessages();
    }, [])
    return (
        <Box sx={{ textAlign: 'center' }}>
            <h2>Welcome {profileData?.username && profileData?.username}</h2>
            <h2>Messages</h2>
            <List>
                {profileData && profileData?.messages.map((message,id)=>{
                    return (
                        <>
                            <li>{message.content}</li>
                            <li>Author: {message.fromUser.username}</li>
                        </>
                    )
                })}
                
            </List>
        </Box>
    )
}

export default Profile