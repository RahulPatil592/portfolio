import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { easeOut, motion } from 'framer-motion'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [showList, setShowList] = useState(false);

  return (
    <div id='nav'>
      <div id='app_logo'>Rahul</div>
      <ul className={showList ? 'nav_list_mob' : 'nav_list'}>
        <motion.li
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.07 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className="nav_li" ><a href="#home_sec">Home</a></motion.li>
        <motion.li
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.07 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className='nav_li'><a href="#about_sec">About</a></motion.li>
        <motion.li
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.07 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className='nav_li'><a href="#skill_sec">Skills</a></motion.li>
        <motion.li
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.07 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className='nav_li'><a href="#proj_sec">Projects</a></motion.li>
        <motion.li
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.07 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className='nav_li'><a href="#cnt_sec">Contact</a></motion.li>
      </ul>
      <div id='ham_menu'>
        <a href="sd" onClick={(e) => {
          e.preventDefault();
          setShowList(!showList)
        }}>{
            !showList &&

            <GiHamburgerMenu id='ham_icon' size={'7vmin'} />
          }{
            showList &&
            <IoMdClose id='ham_icon' size={'7vmin'} />
          }

        </a>
      </div>
    </div>
  )
}

export default Navbar