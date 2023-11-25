import React from 'react'
import {Link} from 'react-router-dom'
import {FilmIcon} from '@heroicons/react/24/outline'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <nav className='navbar__nav'>
                <h3 className='nav__brand'>
                    <Link style={{textDecoration:'none',display:'flex',alignItems:'center',gap:'8px'}} to='/'>
                    <FilmIcon style={{width:'30',height:'30'}}/>  Tv Serie
                    </Link>
                </h3>  

                <ul className='nav__links'>
                    <li className='links__link'><Link to='/'>Home</Link></li>
                    <li className='links__link'><Link to='/about'>About</Link></li>    
                </ul>      
            </nav>
        </div>
    </div>
  )
}

export default Navbar