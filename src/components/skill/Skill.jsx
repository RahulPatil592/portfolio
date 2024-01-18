import React, { useState } from 'react'
import './skill.css'
import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { useEffect } from 'react';
const Skill = () => {
  const [skills, setSkills] = useState([])


  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/v1/skills/get-skills');

        if (response.data.data.length === 0) {
          console.log("No data")
        }
        console.log(response.data.data)
        const d  =response.data.data
        setSkills(d);
      
       
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchSkills();


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
      {
        
        skills.length === 0 &&
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", height: "10vmax" }}>
          <div style={{ width: "fit-content" }}>
            Loading...
          </div>
        </div>
      }
      {
        skills.length > 0 &&
        <div id='sk_divs'>
          <Fade direction='up' cascade damping={0.1} duration={1000} >
            {
              skills.map((item, index) => {
                return (
                  <div className='skills_div' key={index}>
                    <div className='skill_title'>{item._id}</div>

                    <div className='skill_div'>
                      {
                        item.subSkills.map((it, ind) => {
                          return (
                            <div className='skill' key={ind}>
                              <div className='skill_back_circ'>
                                <div className='skill_white_back'>
                                  <img src={it.displayImage} alt="" className='skill_logo' /></div>
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

      }

    </div >
  )
}

export default Skill