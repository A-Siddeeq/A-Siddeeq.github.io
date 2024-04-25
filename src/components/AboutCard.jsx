import React from 'react'

const AboutCard = (props) => {
  return (
    <section className='border-2 border-green-950 rounded-2xl m-1 text-center bg-green-500 transition ease-linear hover:translate-y-1 hover:shadow-xl cursor-pointer'>
        <p className="text-gray-900">{props.info}</p>
        <p className='text-white'>{props.details}</p>
    </section>
  )
}

export default AboutCard