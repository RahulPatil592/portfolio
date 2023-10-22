import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import './home.css'
import hi from'../../assets/emoji_hi.svg'
import insta_icon from '../../assets/insta_icon.svg'
import linked_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'
import fb_icon from '../../assets/fb_icon.svg'
import MyImage from '../../assets/MyImage.svg'
import extag from '../../assets/extag.svg'
import devtag from '../../assets/devtag.svg'
import star_icon from '../../assets/star_icon.svg'
import {motion,AnimatePresence} from 'framer-motion'


const Home = () => {
    const [profession]=useTypewriter({
     words:['WEB DEVELOPER','UI/UX DEVELOPER','PROBLEM SOLVER'],
     loop:{},
     typeSpeed:120,
     deleteSpeed:80
    });


    const variants = {
        slide: {
          rotate: [0,5,10,15,20,15,10,5,0]
        }
      }
  return (
    <AnimatePresence>
    <div id='home_sec'>
        <div id='home_content_sec'>
            <div>
                <div id='l1'><motion.img
                  animate='slide' 
                  variants={variants}
                  transition={{ duration: 1.5, ease: 'linear', repeat:Infinity}}
                 src={hi} alt="hi" id='hi-emoji'/> I am</div>
                <p id='l2'>RAHUL PATIL</p>
                <p id='l3'><span id='my-profession'>{profession}</span><span><Cursor cursorStyle={'|'}/></span></p>
                <p id='l4'>Step into my world of creativity and innovation as you explore my portfolio 
                website, your gateway to discovering more about me and my journey.</p>
                <div id='social_media'>
                    <ul>
                        <li ><a href="https://www.linkedin.com/in/rahul-patil-121793288/" target='_blank'  rel="noreferrer"><img src={linked_icon} alt="" className='icn'/></a></li>
                        <li ><a href="https://github.com/RahulPatil592" target='_blank'  rel="noreferrer"><img src={github_icon} alt=""  className='icn' /></a></li>
                        <li ><a href="https://instagram.com/rahul_patil_8282?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'  rel="noreferrer"><img src={insta_icon} alt=""  className='icn'/></a></li>
                        <li ><a href="https://www.facebook.com/profile.php?id=100014906802326&mibextid=ZbWKwL" target='_blank'  rel="noreferrer"><img src={fb_icon} alt=""  className='icn'/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id='h_img'>
            <div id='home_img_sec'>
                    <img 
                    
                    src={MyImage} alt="" id='mine' />

                    <img src={extag} alt="" id='ext' />

                    <img src={devtag} alt="" id='devt'/>

                    <img 
                    
                    src={star_icon} alt="" id='star' />

            </div>
        </div>
    </div>
    </AnimatePresence>
  )
}

export default Home