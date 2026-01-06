import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <nav className=' Navbg h-18 w-screen flex items-center justify-between'>
        <div className=' w-100 pl-18'> <h1 className=' textcolor text-4xl font-serif '> Elora Mart </h1></div>
        <div className='  textcolor flex gap-10  w-160 '>

          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/login"> Login </Link>

          <h1>Search-Bar</h1>
          <h1>Cart</h1>


        </div>
      </nav>
    </>
  )
}

export default Navbar
