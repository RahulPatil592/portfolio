import React, { useEffect, useState } from 'react'
import './testimonial.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import per from '../../assets/profile_icon.svg'
import { Fade } from "react-awesome-reveal";
import axios from 'axios'
import Marquee from 'react-fast-marquee'

const Testimonial = () => {
  const carousel = useRef(0);
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {


    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/v1/testimonials/get-testimonials');

        if (response.data.length === 0) {
          console.log("No data")
        }

        setTestimonials(response.data.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchTestimonials();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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



        <Fade direction='up' >
          <Marquee pauseOnHover='true' gradientColor="#2B292B" speed={90} loop={0} gradient={true} gradientWidth={100}>
            {
              testimonials.length === 0 &&
              <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "baseline", height: "20vmax" }}>
                <div style={{ width: "fit-content" }}>
                  Loading...
                </div>
              </div>
            }

            {
              testimonials.length > 0 &&
              testimonials.map((testimony, index) => {
                return (
                  <motion.div

                    className='testimonial' key={index}>
                    <div className='person_div'>
                      <div className='person_img_div'>
                        {
                          testimony.profileImage &&
                          <img src={testimony.profileImage} alt="" className='person_img' style={{ width: "3.5vmax" }} />
                        }
                        {
                          testimony.profileImage === "" &&
                          <img src={per} alt="" className='person_img' />

                        }
                      </div>

                      <div className='person_detail'>
                        <p className='name'>{testimony.name}</p>
                        <p className='prof'>{testimony.profession}</p>
                      </div>
                    </div>
                    <p className='test_cont'>{
                      testimony.content.length>200 &&
                    `${testimony.content.slice(0, 200)}...`
                    }
                    {
                      testimony.content.length<=200 &&
                      testimony.content
                    }
                   </p>
                  </motion.div>
                );
              })
            }
          </Marquee>
        </Fade>



      </div>

    </div>
  )
}

export default Testimonial
