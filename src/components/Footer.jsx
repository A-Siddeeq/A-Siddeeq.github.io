
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUserTie, faBriefcase, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'


function Footer () {
  return (
    <>

     <div  className='fixed bottom-0 w-full'>
        <div className="flex flex-row justify-evenly align-middle py-2 mb-0 bg-green-800">
          {/*HOME PAGE*/}
          <a href='/Home' className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'><FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#22c55e",}}/></a>
          {/*ABOUT PAGE*/}
          <a href='/About'  className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'><FontAwesomeIcon icon={faUserTie} size="2xl" style={{color: "#22c55e",}}/></a>
          {/*PORTFOLIO ICON*/}
          <a href='Portfolio' className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'><FontAwesomeIcon icon={faBriefcase} size="2xl" style={{color: "#22c55e",}}/></a>
          {/*CONTACT ICON*/}
          <a href='Contact' className='transition ease-in-out delay-150 hover:-translate-y-1 rounded-full hover:bg-green-300 p-2'><FontAwesomeIcon icon={faEnvelopeOpen} size="2xl" style={{color: "#22c55e",}}/></a>
        </div>
      </div>
     
    </>
  )
}

export default Footer