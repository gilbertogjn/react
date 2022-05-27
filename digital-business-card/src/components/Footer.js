import React from "react"
import TwitterLogo from "../images/twitter-square-brands.svg"
import FacebookLogo from "../images/facebook-square-brands.svg"
import InstagramLogo from "../images/instagram-square-brands.svg"
import GithubLogo from "../images/github-square-brands.svg"

export default function Footer() {
    return (
        <footer>
            <img src={TwitterLogo} alt="" />
            <img src={FacebookLogo} alt="" />
            <img src={InstagramLogo} alt="" />
            <img src={GithubLogo} alt="" />
        </footer>
    )
}