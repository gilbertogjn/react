import React from "react"
import LinkedinLogo from '../images/linkedin-brands.svg'
import Envelope from '../images/envelope-solid.svg'

export default function Info() {
    return (
        <div className="info">
            <img className="info--img" src={require('../images/photo.jpg')} alt="Info Image" />
            <div className="container-info">
                <h1 className="info--name">Gilberto Garcia</h1>
                <h2 className="info--role">Frontend Developer</h2>
                <h3 className="info--site">lunawd.com</h3>
                <div className="info--buttons">
                    <button className="btn-email">
                        <img className="btn-icon" src={Envelope} />
                        Email
                    </button>
                    <button className="btn-linkedin">
                        <img className="btn-icon" src={LinkedinLogo} />
                        Linkedln
                    </button>
                </div>
            </div>
        </div>
    )
}