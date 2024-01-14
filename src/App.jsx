import React from 'react'
import Home from './components/main/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Project from './components/my_work/Project'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Background from './components/background/Background'
import './App.css'
import Footer from './components/footer/Footer'
import { useState, useRef } from 'react'
import Modal from './components/modal/Modal'
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';



const App = () => {
  const [modal, setModal] = useState(false);
  const [modData, setModData] = useState(null);


  const form = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    //vova syzm irqi krtv
   

    emailjs.sendForm('service_yegchll', 'template_kvqosfp', event.target, '62snBK0RsvIeoiV6V')
      .then((result) => {

        toast.success('Message sent successfully !')
        event.target.reset();
      }, (error) => {
        console.log(error.text);
      });

  }




  return (
    <>
      <Background />
      {
        !modal && <Navbar />
      }

      {
        modal &&

        <Modal data={modData} setModal={setModal} />
      }
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        /></div>
      <div id='back'>
        <Home />
        <About />
        <Skill />
        <Project modal={modal} setModal={setModal} modData={modData} setModData={setModData} />
        <Testimonial />
        <Contact form={form} submitHandler={submitHandler} />
        <Footer />
      </div>
    </>
  )
}

export default App