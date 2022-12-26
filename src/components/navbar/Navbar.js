import React from 'react'
import "./navbar.css"
import NavBarBottom from './NavBarBottom'
import TopBar from './TopBar'

const Navbar = () => {
  return (
    <div className='navbar_main'>
        <TopBar />

        <NavBarBottom />
        <div className='test'></div>
    </div>
  )
}

export default Navbar