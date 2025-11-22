import { navLinks } from '#constants'
import React from 'react'


const Navbar = () => {
  return (<nav className="relative z-50">
    <div>
        <img src = "/images/logo.svg" alt = "Logo"/>
        <p className='font-bold'>Ebenezer's Portfolio</p>

        <ul>
            {navLinks.map((item)=>(
                <li key={item.id}>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    </div>
  </nav>
  )
}

export default Navbar
