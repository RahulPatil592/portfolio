import React from 'react'
import './skill.css'
import data from './skilldata'
import { Fade } from "react-awesome-reveal";
const Skill = () => {
  return (
    <div id='skill_sec'>
      <Fade direction='up'>
        <div className='titles'>
          <div className='sec_title' >
            <p className='sec_title_one'>Skills</p>
            <p className='sec_title_two'>My expert areas<span></span></p>
          </div>

        </div>
      </Fade>
      <div id='sk_divs'>
        <Fade direction='up' cascade damping={0.1} duration={1000} >
          {
            data.map((item, index) => {
              return (
                <div className='skills_div' key={index}>
                  <div className='skill_title'>{item.type}</div>

                  <div className='skill_div'>
                    {
                      item.subtype.map((it, ind) => {
                        return (
                          <div className='skill' key={ind}>
                            <div className='skill_back_circ'>
                              <div className='skill_white_back'>
                                <img src={it.imgsrc} alt="" className='skill_logo' /></div>
                            </div>
                            <div className='skill_detail'>
                              <p className='skill_name'>{it.name}</p>
                              <p className='skill_level'>{it.level}</p>
                            </div>
                          </div>
                        )
                      }
                )
                  }


                </div>


              </div>
      )
          })
        }
            </Fade>
    </div>
    </div >
  )
}

export default Skill