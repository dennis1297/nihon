import { faBed, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='h-container'>
    <div className="h-row">
        <div className="h-col">
            <Link to = "/"> Dennis Thomson </Link>
        </div>
        <div className="h-col">
            <button>Register</button>
            <button>Sign In</button>
        </div>
    </div>
    <div className='h-row'>
        <div className="h-col">
            <div className='icons'>
               <div className="icon">
               <FontAwesomeIcon icon={faBed} />
                 <span>Stays</span>
               </div>
               <div className="icon">   
               <FontAwesomeIcon icon={faCoffee} />
               <span>Flights</span>
               </div>
               <div className="icon">
               <span>Car Rental</span> 
               </div>
               <div className="icon">
               <span>Attraction</span>
               </div>
               <div className="icon">
               <span>Airport Taxis</span>
                </div> 
            </div>
        </div>
        <div className="h-col">

        </div>
        <div className="h-col">

        </div>
    </div>
    </div>
  )
}

export default Header