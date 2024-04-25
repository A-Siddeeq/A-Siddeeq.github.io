import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
            <h1 className='absolute text-center z-10 text-white'>{props.appname}</h1>
            <img src={props.imgLink} alt={props.altText} className='text-center border-2 rounded-xl transition ease-in delay-300 transform hover:scale-75 hover:opacity-45 cursor-pointer'></img>
    </div>
  )
}

export default ProjectCard