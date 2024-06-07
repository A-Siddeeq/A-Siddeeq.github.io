import React from 'react'
import pic from '../assets/img/ceoedit.jpg'
import Footer from '../components/Footer'
import firebase from '../assets/img/firebase.png'
import tailwind from '../assets/img/tailwind.png'
import git from '../assets/img/git.png'
import JS from '../assets/img/JS.png'
import react from '../assets/img/react.png'
import AboutCard from '../components/AboutCard'

const About = () => {
  return (
    <div className='bg-bgCol h-max'>
      <h1 className='text-left text-3xl py-3 md:text-center text-white'>ABOUT ME</h1>
    <div className='md:flex md:flex-row h-full'>
      

        <div className='md:w-1/2'>
            <div className='ml-2 border-2 md:border-0 rounded m-1 p-2 border-green-600 md:text-center'>
                <h3 className='text-xl py-3 text-center text-white'>Personal Info.</h3>
                <img src={pic} alt="" className='w-36 border-0 rounded-2xl mx-auto py-2'/>

              <div className='grid grid-cols-2 h-60 md:text-center'>
                <AboutCard info='Name:' details='Abubakar Sadiq'/>
                <AboutCard info='Stack:' details='JavaScript, Tailwind & React'/>
                <AboutCard info='Experience:' details='0 -1 Years'/>
                <AboutCard info='Freelance/Contract:' details='Available'/>
              </div>
            </div>
        </div>

   

          
        
        <div className='md:w-1/2 items-center'>
          <p className='text-xl py-3 text-center text-white'>MY SKILLS</p>

      <div className='grid grid-cols-2 place-items-center mt-0 md:mt-28'>
        <img src={tailwind} alt='Tailwind CSS Icon' className='w-28 m-1 text-center transition ease-linear delay-300 hover:translate-x-2 hover:translate-y-1 cursor-pointer'></img>
        <img src={git} alt='Git Icon' className='w-28 m-1 text-center transition ease-linear delay-300 hover:translate-x-2 hover:translate-y-1 cursor-pointer'></img>
        <img src={JS} alt='JavaScript Icon' className='w-28 m-1 text-center transition ease-linear delay-300 hover:translate-x-2 hover:translate-y-1 cursor-pointer'></img>
        <img src={react} alt='React Icon' className='w-28 m-1 text-center transition ease-linear delay-300 hover:translate-x-2 hover:translate-y-1 cursor-pointer'></img>
        <img src={firebase} alt='firebase Icon' className='w-28 m-1 text-center transition ease-linear delay-300 hover:translate-x-2 hover:translate-y-1 cursor-pointer'></img>
      </div>
    </div>
    </div>

</div>
  )
}

export default About