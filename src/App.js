import "./App.css"
import React, { createContext, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Posts from "./Posts";
import Profile from "./Profile";
export const UserContext = createContext()

const App = () => {
  const [token,setToken] = useState(null)
  const [user,setUser] = useState("")
  return (
    <UserContext.Provider value={{token,setToken,user,setUser}}>
    <BrowserRouter>
      <Header/>
      <main>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/posts" element = {<Posts/>}/>
        <Route path = "/profile" element = {<Profile/>}/>

      </Routes>
      </main>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App