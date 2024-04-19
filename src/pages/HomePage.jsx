import pic from '../assets/img/ceoedit.jpg'
import React from 'react'
import Footer from '../components/Footer'

function HomePage() {
 
  return (
    <>
    <div className="font-ubuntu h-screen flex md:flex-row flex-col bg-bgCol text-white">
      <div className="md:w-1/2 flex align-middle justify-center md:p-5 ">
          <img src={pic} alt="" className='object-contain w-96 border-0 rounded-full p-2'/>
      </div>
      <div className="flex flex-col justify-center align-middle md:w-1/2 text-center">
        <div>
          <h1 className='text-3xl text-green-500 font-black'>I AM ABUBAKAR SADIQ.</h1>
          <h2 className='text-2xl font-bold'>WEB DEVELOPER</h2>
          <p className='text-balance font-medium'> 
              Self-taught Nigerian Based Frontend Developer focused on translating creative
              and compelling designs into code. I am passionate about creating solutions to
              existing problems.
          </p>

          <button class="transition ease-in-out delay-100 hover:-translate-y-1 bg-green-500 hover:bg-green-800 shadow-md shadow-green-800 rounded py-2 px-3 m-2 font-semibold">
           ABOUT ME
          </button>
          </div>
      </div>
    </div>

  </>
  )
}

export default HomePage