import React from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

import './NavbarStyles.css'

function Navbar(){
    return(
        <div className = 'navbar'>
            <div className = "logo">
                <h2>CAPTAINSHARK</h2>
        </div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Login/Register</li>
            <li>CaptainShark</li>
            </ul>
            <div className='hamburger'>
                <HiOutlineMenuAlt4 className='icon' />
                </div>
                <div className='mobile-menu'>
                    <ul className='mobile-nav'>
                        <li>Home</li>
                        <li>Login/Register</li>
                        <li>CaptainShark</li>
                    </ul>
                    <div className='mobile-menu-bottom'>
                        <div className='menu-icons'>
                            <button>Search</button>     {/*can change later*/}
                            <button>Account</button>     {/*can change later*/}
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default Navbar