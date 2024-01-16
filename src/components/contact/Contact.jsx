import React from 'react'

import './contact.css'
import send from '../../assets/send_icon.svg'
import { Fade } from "react-awesome-reveal";


const Contact = ({ form, submitHandler, socialMediaData }) => {
  return (
    <div id='cnt_sec'>
      <div id='cnt_cont'>
        <div className='titles'>
          <Fade direction='up'>
            <div className='sec_title' >
              <p className='sec_title_one'>Contact</p>
              <p className='sec_title_two'>Get in touch<span></span></p>
            </div>
          </Fade>

        </div>
        <Fade direction='up'>
          <p id='cnt_para'>
            For more information, to connect,
            explore collaboration opportunities, or message me using
            the provided form or social media links, please feel
            welcome to reach out. Also Your insights and feedback
            about the website are warmly appreciated.
          </p>
        </Fade>
        <Fade direction='up'>
          <div id='social_media'>
            <ul>
              <Fade direction='up' cascade damping={0.1} triggerOnce>
                {
                  socialMediaData.length > 0 &&
                  socialMediaData.map((sm, index) => {
                    return (
                      <li key={index} ><a href={sm.link} target='_blank' rel="noreferrer"><img src={sm.img} alt="" className='icn' /></a></li>

                    )
                  })

                }
              </Fade>
            </ul>
          </div>
        </Fade>
      </div>


      <div id='form_sec'>
        <Fade direction='up' triggerOnce>
          <p id='form_title'>Send me message</p>
          <form onSubmit={submitHandler} ref={form}>
            <div id='row1'>
              <div className='lbl_inpt ln1'>
                <input type="text"
                  name='name'
                  id='name' autoComplete='off' required className='input-text ip1'
                />
                <label htmlFor="name" className='label lp1' >Name</label>
              </div>
              <div className='lbl_inpt ln2'>
                <input type="email" id='email'
                  name='email'
                  autoComplete='off' required className='input-text'
                />
                <label htmlFor="email" className='label' >Email</label>
              </div>
            </div>
            <div id='row2'>
              <div className='lbl_inpt ln3'>
                <textarea type="text"
                  name='message'
                  id='message' autoComplete='off' required className='input-text ip3'
                />
                <label htmlFor="message" className='label' >Message</label>
              </div>
            </div>
            <div id='row3'>
              <button>
                Send
                <img src={send} alt="" />
              </button>
            </div>

          </form>
        </Fade>
      </div>


    </div>
  )
}

export default Contact