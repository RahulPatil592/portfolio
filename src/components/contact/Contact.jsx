import React from 'react'
import './contact.css'
import insta_icon from '../../assets/insta_icon.svg'
import linked_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import fb_icon from '../../assets/fb_icon.svg'
import send from '../../assets/send_icon.svg'
const Contact = () => {
  return (
    <div id='cnt_sec'>
      <div id='cnt_cont'>
        <div className='titles'>
          <div className='sec_title' >
            <p className='sec_title_one'>Contact</p>
            <p className='sec_title_two'>Get in touch<span></span></p>
          </div>
          
        </div>
        <p id='cnt_para'>
            For more information, to connect,
            explore collaboration opportunities, or message me using
            the provided form or social media links, please feel
            welcome to reach out. Also Your insights and feedback
            about the website are warmly appreciated.
          </p>
          <div id='social_media'>
            <ul>
            <li><img src={linked_icon} alt="" className='icn'/></li>
            <li><img src={github_icon} alt=""  className='icn'/></li>
            <li><img src={insta_icon} alt=""  className='icn'/></li>
            <li><img src={fb_icon} alt=""  className='icn'/></li>
            </ul>
          </div>
      </div>
      <div id='form_sec'>
      <p id='form_title'>Send me message</p>
        <form action="">
           
           <div id='row1'>
             <div className='lbl_inpt ln1'>
              
              <input type="text" id='name' autoComplete='off'  required className='input-text ip1'/>
              <label htmlFor="name" className='label lp1' >Name</label>
             </div>

             <div className='lbl_inpt ln2'>
              <input type="email" id='email' autoComplete='off'  required className='input-text'/>
              <label htmlFor="email" className='label' >Email</label>
             </div>
           </div>

           <div id='row2'>
            <div className='lbl_inpt ln3'>
            <textarea type="text" id='msg' autoComplete='off'  required className='input-text ip3'/>
              <label htmlFor="msg" className='label' >Message</label>
             </div>
           </div>

           <div id='row3'>
             <button>
              Send
              <img src={send} alt="" />
             </button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Contact