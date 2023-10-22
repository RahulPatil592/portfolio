import React from 'react'
import './modal.css'
import clbtn from '../../assets/closebtn.svg'
import gitsvg from '../../assets/github_icon.svg'
import websvg from '../../assets/web_svg.svg'
import { useState } from 'react'
import Prev from '../../assets/rbtn.svg'
import Next from '../../assets/lbtn.svg'
import { MotionConfig, motion } from 'framer-motion'

const Modal = ({ data, setModal }) => {
  const [current, setCurrent] = useState(0);

  const onPrevclick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  const onNextclick = () => {
    if (current < data.project_imgs.length - 1) {
      setCurrent(current + 1);
    }
  }

  return (
    <div className='main_mod_back'>
      <div id='mod_sec'>
        <div id='mod_circ1'></div>
        <div id='mod_circ2'></div>
        <div id='mod_circ3'></div>
        <button className='close_btn' onClick={() => {
          setModal(false);
        }}>
          <img src={clbtn} alt="" id='close_img' />
        </button>
        <div id='mod_back'>
          <div id='proj_det'>
            <div className='pname'  >{data.project_name}</div>
            <div className='plinks'>
              <div className='plink_div'>
                <a href={data.git_link} target='_blank' rel="noreferrer">
                  <img src={gitsvg} alt="" className='icn_mod1' />
                </a>
              </div >
              {data.project_weblink &&
                <div className='plink_div'>
                  <a href={data.git_link} target='_blank' rel="noreferrer">
                    <img src={websvg} alt="" className='icn_mod2' />
                  </a>
                </div>
              }
            </div>
            <MotionConfig transition={{ duration: 0.5, ease: 'easeOut' }}>
              <div className='car_sec'>
                <div className='car_btns'>
                  {
                    current !== 0 &&
                    <button onClick={onPrevclick} className='prevbtn'><img src={Prev} alt='imgs' fill={{ fill: 'black' }} /></button>
                  }
                  {
                    current !== data.project_imgs.length - 1 &&
                    <button onClick={onNextclick} className='nextbtn'><img src={Next} alt='imgs' /></button>
                  }

                </div>
                <motion.div className='car_back'
                  animate={{ x: `calc(-${current * 100}%)` }}>
                  {
                    data.project_imgs.map((imgsrc, index) => {
                      return (
                        <img src={imgsrc} alt='img' key={index} className='carimg' />
                      )
                    })
                  }
                </motion.div>
                
              </div>
            </MotionConfig>
            {data.project_imgs.length!==1 &&
              <div id='ctr_sec'>
              <div id='btn_cntrl'>
                    {
                      data.project_imgs.map((_, index) => {
                        return (
                          <div className={index === current ? 'cl_dot' : 'dot'} key={index} onClick={() => {
                            setCurrent(index);
                          }}>
                          </div>
                        )
                      })
                    }
                  </div>
            </div>
            }
            <div className='ptags'

            >
              {data.project_tags.map((item, index) => {
                return (
                  <motion.div

                    className='tag_div'>
                    {item}
                  </motion.div>
                )
              })
              }
            </div>
            <div className='pdesc_sec'>
              <p className='abt_proj'>About project</p>
              <p className='pdesc'>
                {
                  data.project_desc
                }
                The display CSS property sets whether an element is treated as a block or inline box
                and the layout used for its children, such as flow layout, grid or flex.
                Formally, the display property sets an element's inner and outer display types. The outer type sets an element's participation in flow layout;
                the inner type sets the layout of children. Some values of display are fully defined in their own individual specifications; for example
                the detail of what happens when display: flex is declared is defined in the CSS Flexible Box Model specification.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal