import React from 'react'
import './footer.css'
import insta_icon from '../../assets/insta_icon.svg'
import linked_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import fb_icon from '../../assets/fb_icon.svg'


const Footer = () => {
  return (
    <div id='foot_sec'>
        <p id='nm'>Rahul Patil</p>
        <div id='second_part'>
            <div id='social_icns'>
                <ul>
                    <li className="sc">
                        <a href="https://www.linkedin.com/in/rahul-patil-121793288/" target='_blank' rel="noreferrer"><img src={linked_icon} alt="" className="sc_img" /></a>
                    </li>
                    <li className="sc">
                        <a href="https://github.com/RahulPatil592" target='_blank' rel="noreferrer"><img src={github_icon} alt="" className="sc_img" /></a>
                    </li>
                    <li className="sc">
                        <a href="https://instagram.com/rahul_patil_8282?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel="noreferrer"><img src={insta_icon} alt="" className="sc_img" /></a>
                    </li>
                    <li className="sc">
                        <a href="https://www.facebook.com/profile.php?id=100014906802326&mibextid=ZbWKwL" target='_blank' rel="noreferrer"><img src={fb_icon} alt="" className="sc_img" /></a>
                    </li>
                </ul>
            </div>
            <p id='cp'>
            © 2023 Rahul Patil All rights reserved 
            </p>
        </div>
    </div>
  )
}

export default Footer