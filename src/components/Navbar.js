import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
    <div className='Header'>
         <nav>
             <ul type="none">
                 <Link to="/home" className="homecss" >Home</Link>
                 <Link to="/student" className="homecss" >Students</Link>
                 <Link to="/contact" className="homecss" >Contact</Link>
                 
                 
                 
             </ul>
         </nav>


    </div>
    </>
  )
}

export default Navbar