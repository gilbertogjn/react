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
                <a href="https://lunawd.com/" target={'_blank'} className="info--site">lunawd.com</a>
                <div className="info--buttons">
                    <button className="btn-email" onClick={()=> window.open("mailto:contato.lunawd@gmail.com", "_blank")}>
                        <img className="btn-icon" src={Envelope} />
                        Email
                    </button>
                    <button className="btn-linkedin" onClick={()=> window.open("https://br.linkedin.com/in/gilberto-garcia-696685120?trk=public_profile_browsemap", "_blank")}>
                        <img className="btn-icon" src={LinkedinLogo} />
                        Linkedln
                    </button>
                </div>
            </div>
        </div>
    )
}