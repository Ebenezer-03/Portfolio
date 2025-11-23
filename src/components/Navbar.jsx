import React from 'react'
import { navLinks, navIcons } from '@/constants'
import useWindowStore from '@/store/window'

const Navbar = () => {

    const {openWindow} = useWindowStore()
    // Get current time
    const getCurrentTime = () => {
        const now = new Date()
        const options = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }
        return now.toLocaleString('en-US', options)
    }

    return (
        <nav className="relative z-50">
            <div className="nav-container">
                <div className="nav-left">
                    <img src="/images/logo.svg" alt="Logo" className="nav-logo" />
                    <p className='font-bold nav-title'>Ebenezer's Portfolio</p>

                    <ul className="nav-links">
                        {navLinks.map((item) => (
                            <li key={item.id} 
                            onClick={() => openWindow(item.type)}>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav-right">
                    <ul className="nav-icons">
                        {navIcons.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={`icon-${item.id}`} />
                            </li>
                        ))}
                    </ul>
                    <p className="nav-time">{getCurrentTime()}</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
