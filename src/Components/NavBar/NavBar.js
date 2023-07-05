import React from 'react'
import "./NavBar.css"
// import img from './images/deer.jpg';

function NavBar() {
  return (
    <div className='navbar'>
        <img className='logo' src="./images/logo.png" alt="Netflixlogo" />
        {/* <button className='signinbtn'>Sign In</button> */}
    </div>
  )
}

export default NavBar