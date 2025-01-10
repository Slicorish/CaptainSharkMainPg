import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import './NavbarStyles.css'

function Navbar(){
    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <div className={nav ? 'navbar-bg ': 'navbar'}>
            <div className="logo">
                <h2>CAPTAINSHARK</h2>
            </div>
            <ul className='nav-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Login/Register</Link></li>
                <li><Link to="/">CaptainShark</Link></li>
            </ul>
            <div className='hamburger' onClick={handleNav}>
                <HiOutlineMenuAlt4 className='icon' />
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className='mobile-nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Login/Register</Link></li>
                <li><Link to="/">CaptainShark</Link></li>
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