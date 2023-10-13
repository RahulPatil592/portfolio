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
                        <img src={linked_icon} alt="" className="sc_img" />
                    </li>
                    <li className="sc">
                        <img src={github_icon} alt="" className="sc_img" />
                    </li>
                    <li className="sc">
                        <img src={insta_icon} alt="" className="sc_img" />
                    </li>
                    <li className="sc">
                        <img src={fb_icon} alt="" className="sc_img" />
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