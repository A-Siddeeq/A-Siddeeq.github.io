import React from 'react'
import counter from '../assets/img/counter.png'
import Todo from '../assets/img/Todo.png'
import Trib from '../assets/img/trib.png'
import CChanger from '../assets/videos/CChanger.mp4'

const Work = () => {
  return (
    <div className='h-screen bg-bgCol'>
      <h1 className='text-left text-3xl py-3 md:text-center text-white'>MY PROJECTS </h1>
      <div className='flex md:grid flex-col md:grid-cols-3 gap-12 w-60 md:w-auto mx-auto text-center'>
        <div className='flex justify-center md:h-52 md:w-72'>
          <h1 className='absolute text-center z-10 text-white'>Simple Counter</h1>
          <img src={counter} alt='JavaScript Icon' className='text-center border-2 rounded-xl transition ease-in delay-300 transform hover:scale-75 hover:opacity-45 cursor-pointer'></img>
        </div>
        <div className='flex justify-center md:h-52 md:w-72'>
          <h1 className='absolute text-center z-10 text-white'>Todo App</h1>
          <img src={Todo} alt='JavaScript Icon' className='text-center border-2 rounded-xl transition ease-in delay-300 transform hover:scale-75 hover:opacity-45 cursor-pointer'></img>
        </div>
        <div className='flex justify-center md:h-52 md:w-72'>
          <h1 className='absolute text-center z-10 text-white'>Tribute Page</h1>
          <img src={Trib} alt='JavaScript Icon' className='text-center border-2 rounded-xl transition ease-in delay-300 transform hover:scale-75 hover:opacity-45 cursor-pointer'></img>
        </div>
        <div className='flex justify-center md:h-52 md:w-72 md:ml-2'>
          <video src={CChanger} alt='JavaScript Icon' className='text-center border-2 rounded-xl transition ease-in delay-300 transform hover:scale-75 hover:opacity-45 cursor-pointer' autoplay></video>
        </div>
      </div>
    </div>
  )
}

export default Work