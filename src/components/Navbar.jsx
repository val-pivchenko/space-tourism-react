// import logo from '../assets/shared/logo.svg'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [hambShow, setHambShow] = useState(true)

    const [closeShow, setCloseShow] = useState(false)

    const [navShow, setNavShow] = useState(false)

    const navigate = useNavigate()

    const location = useLocation()

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

    return (
        <nav>
            <div className="logo">
                <img src='assets/shared/logo.svg' alt="" />
            </div>
            <div className="hamburger">
                <button onClick={() => {
                    setHambShow(!hambShow)
                    setCloseShow(!closeShow)
                    setNavShow(!navShow)
                }} className={hambShow ? 'btn-hamb show' : 'btn-hamb'}>
                    <img src='assets/shared/icon-hamburger.svg' alt="" />
                </button>
            </div>
            <div className="close">
                <button onClick={() => {
                    setHambShow(!hambShow)
                    setCloseShow(!closeShow)
                    setNavShow(!navShow)
                }} className={closeShow ? 'btn-close show' : 'btn-close'}>
                    <img src='assets/shared/icon-close.svg' alt="" />
                </button>
            </div>
            <hr />
            <ul className={navShow ? 'nav-ul show' : 'nav-ul'}>
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
