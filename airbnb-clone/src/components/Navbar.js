import React from 'react'
import Logo from '../images/airbnb-logo.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt='AirBnB Logo' />
        </nav>
    )
}