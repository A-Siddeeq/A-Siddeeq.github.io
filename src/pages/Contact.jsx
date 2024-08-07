import { faMailReply, faPhone, faHouse, faUserTie, faBriefcase, faEnvelopeOpen  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import contactOne from  '../assets/img/contactOne.svg'
import contactThree from  '../assets/img/contactThree.svg'
import contactFour from  '../assets/img/contactFour.svg'

const Contact = () => {
  return (
    <div className='bg-bgCol h-dvh'>
      <h1 className='text-left text-3xl py-3 md:text-center text-white'>CONTACT</h1>
      
      <div className='flex flex-col justify-center text-xl p-1 text-white'>
      <h1 className='text-xl py-3 text-center text-white'>HIRE ME</h1>
        <p className='text-center'>I am open to discussing & contributing to new projects,
          creative ideas and opportunities. Simply connect using one of
          the available channels below👇
        </p>
      </div>
      
      <div  className='flex flex-row justify-around py-12 mb-0'>
      <div>
        <section className='flex gap-5 py-2'>
        <FontAwesomeIcon icon={faMailReply} size="2xl" style={{color: "#22c55e",}}/>
        <div>
        <p className='text-gray-500'>MAIL ME</p>
        <p className='text-green-500'>abubakaradamu1163@gmail.com</p>
        </div>
        </section>
        <section  className='flex gap-5 py-2'>
        <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "#22c55e",}}/>
        <div>
        <p className='text-gray-500'>CALL ME</p>
        <p className='text-green-500'>+234 808 003 1809</p>
        </div>
        </section>
      </div>
      </div>

 <div className="flex flex-row justify-evenly align-middle py-2 mb-0">
          {/*LINKEDIN*/}
          <a href='/Home' className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'>
            <img src={contactOne} className='w-16'/>
          </a>
          {/*OTHER
          <a href='/Home' className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'>
            <img src={contactOne} className='w-16'/>
          </a> */}
          {/*GITHUB*/}
          <a href='/Home' className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'>
            <img src={contactThree} className='w-16'/>
          </a>
          {/*WHATSAPP*/}
          <a href='/Home' className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'>
            <img src={contactFour} className='w-16'/>
          </a>
        </div> 

    </div>
  )
}

export default Contact
