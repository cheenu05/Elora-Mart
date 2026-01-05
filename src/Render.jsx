import React from 'react'
import Home from './Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'

import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

const Render = () => {
    return (
        <div>

              <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>


        </div>
    )
}

export default Render
