// import dotenv from "dotenv"
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
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Modal from './components/modal/Modal'
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
// dotenv.config({ path: './.env' })


const App = () => {
  const [modal, setModal] = useState(false);
  const [modData, setModData] = useState(null);
  const [socialMediaData, setSocialMediaData] = useState([])

  const form = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    //vova syzm irqi krtv

    const toastId = toast.loading("Please wait...")
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        toast.success("Message sent", { id: toastId, isLoading: false })
        event.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  }


  useEffect(() => {
    const fetchSocialMedias = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_IP}/api/v1/medias/get-socialmedias`);

        if (response.data.length === 0) {
          console.log("No data")
        }
        setSocialMediaData(response.data.data);
      } catch (error) {
        console.error('Error fetching social media data:', error);
      }
    };
    fetchSocialMedias();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
        <Home socialMediaData={socialMediaData} />
        <About />
        <Skill />
        <Project modal={modal} setModal={setModal} modData={modData} setModData={setModData} />
        <Testimonial />
        <Contact form={form} submitHandler={submitHandler} socialMediaData={socialMediaData} />
        <Footer socialMediaData={socialMediaData} />
      </div>
    </>
  )
}

export default App