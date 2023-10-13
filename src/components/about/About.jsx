import React from 'react'
import './about.css'

import int1 from '../../assets/bulb_icon.svg'
import int2 from '../../assets/pen_icon.svg'
import int3 from '../../assets/headphone_icon.svg'
import int4 from '../../assets/camera_icon.svg'
const About = () => {
  return (
    <div id='about_sec'>
      <div className='titles'>
        <div className='sec_title'>
          <p className='sec_title_one'>about</p>
          <p className='sec_title_two'>About me<span></span></p>
        </div>
      </div>
      <p className='abt_me_cnt'>
        I'm Rahul Patil, currently pursuing my studies in  Computer Engineering  at Pune Institute of Computer Technology, Pune. As an aspiring web developer,
        I'm passionate about crafting digital experiences and creating innovative solutions for the web.
      </p>
      <div id='res_sec'>
        <button>
          View Resume
        </button>
      </div>
      <div id='edu_n_int'>
        <div id='edu_sec'>
          <p className='title'>My Education</p>
          <div id='schools'>
            <div className='sch'>
              <div className='grph'>
                <div className='circ'>
                  <div className='circ_mini'></div>
                </div>
                <div className='line'></div>
              </div>
              <div className='sch_detail'>
                <p className='school'>Pune Institute of Computer Technology, Pune</p>
                <p className='time'>2021-2025</p>
                <p className='deg'>Computer Engineering</p>
              </div>
            </div>

            <div className='sch'>
              <div className='grph'>
                <div className='circ'>
                  {/* <div className='circ_mini'></div> */}
                </div>
                <div className='line'></div>
              </div>
              <div className='sch_detail'>
                <p className='school'>Shri Balaji Madhyamik Vidyalaya and Jr. College,
                  Ichalkaranji</p>
                <p className='time'>2021</p>
                <p className='deg'>HSC</p>
              </div>
            </div>

            <div className='sch'>
              <div className='grph'>
                <div className='circ'>
                  {/* <div className='circ_mini'></div> */}
                </div>
                {/* <div className='line'></div> */}
              </div>
              <div className='sch_detail'>
                <p className='school'>Kisanrao More High School and Jr. College, Sarawade</p>
                <p className='time'>2019</p>
                <p className='deg'>SSC</p>
              </div>
            </div>
          </div>
        </div>
        <div id='int_sec'>
          <p className='title'>My Interests</p>
          <div id='intrs'>
            <div className='int_div'>
              <img src={int1} alt="" className='int_img' />
              <p>Problem Solving</p>
            </div>
            <div className='int_div'>
              <img src={int2} alt="" className='int_img' />
              <p>Drawing</p>
            </div>
            <div className='int_div d3'>
              <img src={int3} alt="" className='int_img img3' />
              <p>Music</p>
            </div>
            <div className='int_div d4'>
              <img src={int4} alt="" className='int_img img3' />
              <p>Movies</p>
            </div>
          </div>
        </div>
      </div>
      <div id='mission'>
        <p className='title'>My Mission</p>
        <p className='my_msn'>
        My mission is to use my computer engineering skills to contribute positively to our surroundings. I'll continuously learn and stay current with the latest developments in computer technology. My objective is to address real-world problems through my knowledge. I strive to inspire creativity and innovation, connecting people and ideas to enhance daily life. 
        </p>
      </div>
    </div>
  )
}

export default About