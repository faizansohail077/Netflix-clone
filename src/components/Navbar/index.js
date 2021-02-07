import React, { useEffect, useState } from 'react'
import './style.css'
const Navbar = () => {
    const [show, handleShow] = useState(false)
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img className="nav__logo" src='http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png'
                    alt=''
                />
                <img className="nav__avatar" src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                    alt=''
                />
            </div>
        </div>
    )
}

export default Navbar
