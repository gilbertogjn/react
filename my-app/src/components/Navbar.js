import React from "react"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img className="nav--logo-img" src={require('../images/react-icon.png')} alt="React Logo" />
                <h2>ReactFacts</h2>
            </div>
            <h3 className="nav--title">React Course - Project 1</h3>
        </nav>
    )
}