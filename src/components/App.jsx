import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserProvider from '../contexts/UserContext'
import Chats from '../pages/Chats'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ButtonAppBar from './ButtonAppbar'
import getEnv from '../utility/getEnv'

const Home = () => <div>Home Page</div>
const Contact = () => <div>Contact</div>
const About = () => <div>About</div>

const App = () => {
    console.log(getEnv('VITE_SERVER_URL'))
    return (
        <div>
        <Router>
        <UserProvider>
            <ButtonAppBar />
            <Routes>  
            <Route path='/' element={<Home />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path='/chats' element={<Chats />}/>
            </Routes>
        </UserProvider>
        </Router>
        </div>
    )
}

export default App