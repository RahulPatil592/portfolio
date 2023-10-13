import React from 'react'
import { useState } from 'react'
import './navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  const [showList,setShowList]=useState(false);

  return (
    <div id='nav'>  
      <div id='app_logo'>Rahul</div>
      <ul className={showList?"nav_list_mob":"nav_list"}>
        <li className='nav_li'>Home</li>
        <li className='nav_li'>About</li>
        <li className='nav_li'>Skills</li>
        <li className='nav_li'>Project</li>
        <li className='nav_li'>Contact</li>
      </ul>
      <div id='ham_menu'>
        <a href="sd" onClick={(e)=>{
          e.preventDefault();
          setShowList(!showList)}}>
        <GiHamburgerMenu id='ham_icon' size={'7vmin'}/>
        </a>
      </div>
    </div>
  )
}

export default Navbar