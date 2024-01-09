import React from 'react'
import './project.css'
import vm from '../../assets/visit_icon.svg'
import data from './project_data'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fade } from "react-awesome-reveal";


const Project = ({ projects,modal, setModal, modData, setModData }) => {
  const [filtered, setFiltered] = useState(data);
  const [activecat, setActivecat] = useState('all');
 

  useEffect(() => {
    if (activecat === 'all') {
      setFiltered(data);
      return;
    }
    const currcat = data.filter((project) =>
      project.category === activecat
    )
    setFiltered(currcat);
  }, [activecat])

  return (
    <div id='proj_sec'>
      <div className='titles'>
        <Fade direction='up' >
          <div className='sec_title' >
            <p className='sec_title_one'>Projects</p>
            <p className='sec_title_two'>Look at my recent work<span></span></p>
          </div>
        </Fade>
      </div>
      
      <div id='proj_type_sec'>
        <ul>
          <Fade direction='up' cascade damping={0.1} delay={200}>
            <li className={activecat === 'all' ? "active" : "proj_type"} onClick={() => {
              setActivecat('all');
            }}>All</li>
            <li className={activecat === 'web_development' ? "active" : "proj_type"} onClick={() => {
              setActivecat('web_development');
            }}>Web Development</li>
            <li className={activecat === 'ui_design' ? "active" : "proj_type"} onClick={() => {
              setActivecat('ui_design');
            }}>UI Design</li>
          </Fade>
        </ul>
      </div>

      <motion.div layout id='projects_div' >
        <AnimatePresence>
       
          {
            filtered.map(project => {
              return (
                <motion.div layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }} className='proj_div' key={project.id}>
                  <div className='proj_img_div'>
                    <img src={project.project_imgs[0]} alt="" />
                  </div>
                  <div className='proj_desc_div'>
                    <p className='proj_desc'>{project.project_name}</p>
                    <p className='view_more'
                      onClick={() => {
                        setModal(true)
                        setModData(project)
                      }}
                    >
                      View More
                      <img src={vm} alt="" className='vm_icn' />
                    </p>
                  </div>
                </motion.div>
              )
            })
          }
        </AnimatePresence>
      </motion.div>
     
    
    </div >
     


  )
}

export default Project