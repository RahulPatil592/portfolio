import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import './home.css'
import hi from'../../assets/emoji_hi.svg'
import MyImage from '../../assets/MyImage.svg'
import extag from '../../assets/extag.svg'
import devtag from '../../assets/devtag.svg'
import star_icon from '../../assets/star_icon.svg'
import {motion,AnimatePresence} from 'framer-motion'
import { Fade } from "react-awesome-reveal";


const Home = ({socialMediaData}) => {
    
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
            <Fade direction='up' cascade damping={0.1}>
                <div id='l1'>
               
                    <motion.img
                  animate='slide' 
                  variants={variants}
                  transition={{ duration: 1.5, ease: 'linear', repeat:Infinity}}
                 src={hi} alt="hi" id='hi-emoji'/> I am</div>
               
                    <p id='l2'>RAHUL PATIL</p>
                    <p id='l3'><span id='my-profession'>{profession}</span><span><Cursor cursorStyle={'|'}/></span></p>
                    <p id='l4'>Step into my world of creativity and innovation as you explore my portfolio
                    website, your gateway to discovering more about me and my journey.</p>
                    </Fade>
                    <Fade direction='up' delay={500}>
                <div id='social_media'>
                    <ul>
                        <Fade direction='up' cascade damping={0.3}>
                            {socialMediaData.length>0 &&
                                 socialMediaData.map((sm,index)=>{
                                    return(
                                        <li key={index} ><a href={sm.link} target='_blank'  rel="noreferrer"><img src={sm.img} alt="" className='icn'/></a></li>

                                    )
                                 })
                          
                            }
                        </Fade>
                    </ul>
                </div>
                </Fade>
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