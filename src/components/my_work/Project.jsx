import React from 'react'
import './project.css'
import vm from '../../assets/visit_icon.svg'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Fade } from "react-awesome-reveal";
import axios from 'axios'
const Project = ({ modal, setModal, modData, setModData }) => {
  const [filtered, setFiltered] = useState([]);
  const [activecat, setActivecat] = useState('All');
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/v1/projects/get-projects');
        const data = response.data[0];
        if (data.length === 0) {
          console.log("No data")
        }
        categories.push("All")
        for (let i = 0; i < response.data[1].length; i++) {
          categories.push(response.data[1][i]._id)
        }
        setCategories(categories)
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  useEffect(() => {
    if (activecat === 'All' && projects) {
      setFiltered(projects);
      return;
    }
    const currcat = projects.filter((project) =>
      project.category === activecat
    )
    setFiltered(currcat);
  }, [activecat, projects])

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

            {
              categories.map((cat, index) => {
                return (
                  <li
                    className={activecat === cat ? "active" : "proj_type"}
                    onClick={() => { setActivecat(cat) }}
                    key={index}
                  >{cat.toUpperCase()}</li>
                )
              })
            }

          </Fade>
        </ul>
      </div>

      {
        projects.length === 0 &&
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "baseline", height: "20vmax" }}>
          <div style={{ width: "fit-content" }}>
            Loading...
          </div>
        </div>

      }
      {

        projects.length > 0 &&

        <motion.div layout id='projects_div' >
          <AnimatePresence>

            {
              filtered.map((project, index) => {
                return (
                  <motion.div layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} className='proj_div' key={index}>
                    <div className='proj_img_div'>
                      <img src={project.coverImage} alt="" />
                    </div>
                    <div className='proj_desc_div'>
                      <p className='proj_desc'>{project.name}</p>
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
      }

    </div >



  )
}

export default Project