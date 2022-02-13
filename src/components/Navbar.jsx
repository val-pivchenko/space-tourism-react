import logo from '../assets/shared/logo.svg'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    const navigate = useNavigate()

    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    const onClick = () => {
        setIsActive(!isActive)
        navigate()
    }

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <hr />
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <button id='home' className={pathMatchRoute('/') ? 'btn-nav active' : 'btn-nav'} onClick={() => {
                        navigate('/')
                    }}><strong>00</strong> Home</button>
                </li>
                <li className='nav-li'>
                    <button id='destination' className={pathMatchRoute('/destination') ? 'btn-nav active' : 'btn-nav'} onClick={() => {
                        navigate('/destination')
                    }}><strong>01</strong> Destination</button>
                </li>
                <li className='nav-li'>
                    <button id='crew' className={pathMatchRoute('/crew') ? 'btn-nav active' : 'btn-nav'} onClick={() => {
                        navigate('/crew')
                    }}><strong>02</strong> Crew</button>
                </li>
                <li className='nav-li'>
                    <button id='technology' className={pathMatchRoute('/technology') ? 'btn-nav active' : 'btn-nav'} onClick={() => {
                        navigate('/technology')
                    }}><strong>03</strong> Technology</button>
                </li>
            </ul>
        </nav>)
};

export default Navbar;
