import React, { useEffect, useState } from 'react'
import './testimonial.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import per from '../../assets/profile_icon.svg'
import data from './testimonial_data'
import { Fade } from "react-awesome-reveal";

const Testimonial = () => {
 const [width,setWidth]=useState(0);
 const carousel=useRef(0);

 useEffect(()=>{
  setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
 },[]);

  return (
    <div id='testi_sec'>
      <div className='titles' >
        <Fade direction='up' >
          <div className='sec_title'>
            <p className='sec_title_one'>Testimonials</p>
            <p className='sec_title_two'>What people say<span></span></p>
          </div>
        </Fade>
      </div>
       
      <div id='testmns_sec' ref={carousel}>
        <motion.div  drag="x" dragConstraints={{right:0,left:-width}} id='testimonials' whileTap={{cursor:"grabbing"}} initial={{opacity:0}}animate={{opacity:1}}>
        <Fade direction='up' >
        {
            data.map((testimony) => {
              return (
                <motion.div 
                
                className='testimonial' key={testimony.id}>
                  <div className='person_div'>
                    <div className='person_img_div'>
                      <img src={per} alt="" className='person_img' />
                    </div>

                    <div className='person_detail'>
                      <p className='name'>{testimony.name}</p>
                      <p className='prof'>{testimony.profession}</p>
                    </div>
                  </div>
                  <p className='test_cont'>{testimony.feedback}</p>
                </motion.div>
              );
            })
          }
             </Fade>

        </motion.div>

      </div>
   
    </div>
  )
}

export default Testimonial
