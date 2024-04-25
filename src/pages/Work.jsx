import React from 'react'
import counter from '../assets/img/counter.png'
import Todo from '../assets/img/Todo.png'
import Trib from '../assets/img/trib.png'
import CChanger from '../assets/videos/CChanger.mp4'
import ProjectCard from '../components/ProjectCard'

const Work = () => {
  return (
    <div className='h-screen bg-bgCol'>
      <h1 className='text-left text-3xl py-3 md:text-center text-white'>MY PROJECTS </h1>
      <div className='flex md:grid flex-col md:grid-cols-3 gap-12 w-60 md:w-auto mx-auto text-center'>
        <ProjectCard
        appname='Todo app'
        imgLink={counter}
        altText='A simple todo app'
         />
        <ProjectCard
        appname='Tribute Page'
        imgLink={Todo}
        altText='A Tribute page to an exemplary Nigerian Leader'
         />
        <ProjectCard
        appname='Simple counter app'
        imgLink={Trib}
        altText='A JavaScript counter app'
         />
        <div className='flex justify-center md:h-52 md:w-72 md:ml-2'>
          <video src={CChanger} alt='JavaScript Icon' className='text-center border-2 rounded-xl transition ease-in delay-300 transform hover:scale-75 hover:opacity-45 cursor-pointer' autoplay></video>
        </div>
      </div>
    </div>
  )
}

export default Work