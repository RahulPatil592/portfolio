import React from 'react'
import './footer.css'


const Footer = ({ socialMediaData }) => {
  return (
    <div id='foot_sec'>
      <p id='nm'>Rahul Patil</p>
      <div id='second_part'>
        <div id='social_icns'>
          <ul>
            {socialMediaData.length > 0 &&
              socialMediaData.map((sm, index) => {
                return (
                  <li className="sc" key={index} >
                    <a href={sm.link} target='_blank' rel="noreferrer"><img src={sm.img} alt="" className="sc_img" /></a>
                  </li>

                )
              })

            }


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