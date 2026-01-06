import React from 'react'
import Home from './Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import Mobile_Tablet from './Components/MenuBar/MenuItems/Mobile_Tablet'
import Beauty from './Components/MenuBar/MenuItems/Beauty'
import Electronic from './Components/MenuBar/MenuItems/Electronic'
import Fashion from './Components/MenuBar/MenuItems/Fashion'
import Furniture from './Components/MenuBar/MenuItems/Furniture'
import Sports from './Components/MenuBar/MenuItems/Sports'
import TV_Appliances from './Components/MenuBar/MenuItems/TV_Appliances'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import HomeLanding from './HomeLanding'

const Render = () => {
    return (
        <div>

            <Navbar />
            <Routes>

                <Route path="/" element={<Home />} >
                    <Route index element={<HomeLanding />} />
                    <Route path="mobile" element={<Mobile_Tablet />} />
                    <Route path="fashion" element={<Fashion />} />
                    <Route path="electronic" element={<Electronic />} />
                    <Route path="tv" element={<TV_Appliances />} />
                    <Route path="furniture" element={<Furniture />} />
                    <Route path="beauty" element={<Beauty />} />
                    <Route path="sports" element={<Sports />} />
                </Route>

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                
            </Routes>



        </div>
    )
}

export default Render
