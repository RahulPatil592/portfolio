import React from 'react'
import './project.css'
import prj1 from '../../assets/prj1.png'
// import prj1 from '../../assets/Home Page1 1prj1.png'
import vm from '../../assets/visit_icon.svg'

const Project = () => {
  return (
    <div id='proj_sec'>

      <div className='titles'>
        <div className='sec_title' >
          <p className='sec_title_one'>Projects</p>
          <p className='sec_title_two'>Look at my recent work<span></span></p>
        </div>
      </div>

      <div id='proj_type_sec'>
        <ul>
          <li className="proj_type">All</li>
          <li className="proj_type">Web Development</li>
          <li className="proj_type">UI Design</li>
        </ul>
      </div>

      <div id='projects_div'>

        <div className='proj_div'>
              <div className='proj_img_div'>
                <img src={prj1} alt="" />
              </div>
              <div className='proj_desc_div'>
                 <p className='proj_desc'>AgroGuru - Empowering Farmers with Crop Prediction and Agricultural Information</p>
                 <p className='view_more'>
                 View More
                  <img src={vm} alt="" className='vm_icn'/>
                 </p>
              </div>
        </div>


        <div className='proj_div'>
              <div className='proj_img_div'>
                <img src={prj1} alt="" />
              </div>
              <div className='proj_desc_div'>
                 <p className='proj_desc'>AgroGuru</p>
                 <p className='view_more'>
                 View More
                  <img src={vm} alt="" className='vm_icn'/>
                 </p>
              </div>
        </div>



        <div className='proj_div'>
              <div className='proj_img_div'>
                <img src={prj1} alt="" />
              </div>
              <div className='proj_desc_div'>
                 <p className='proj_desc'>AgroGuru - Empowering Farmers with Crop Prediction and Agricultural Information</p>
                 <p className='view_more'>
                 View More
                  <img src={vm} alt="" className='vm_icn'/>
                 </p>
              </div>
        </div>




        <div className='proj_div'>
              <div className='proj_img_div'>
                <img src={prj1} alt="" />
              </div>
              <div className='proj_desc_div'>
                 <p className='proj_desc'>AgroGuru - Empowering Farmers with Crop Prediction and Agricultural Information</p>
                 <p className='view_more'>
                 View More
                  <img src={vm} alt="" className='vm_icn'/>
                 </p>
              </div>
        </div>


        <div className='proj_div'>
              <div className='proj_img_div'>
                <img src={prj1} alt="" />
              </div>
              <div className='proj_desc_div'>
                 <p className='proj_desc'>AgroGuru - Empowering Farmers with Crop Prediction and Agricultural Information</p>
                 <p className='view_more'>
                 View More
                  <img src={vm} alt="" className='vm_icn'/>
                 </p>
              </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Project