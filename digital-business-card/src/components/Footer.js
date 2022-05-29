import React from "react"
import TwitterLogo from "../images/twitter-square-brands.svg"
import FacebookLogo from "../images/facebook-square-brands.svg"
import InstagramLogo from "../images/instagram-square-brands.svg"
import GithubLogo from "../images/github-square-brands.svg"

export default function Footer() {
    return (
        <footer>
            <div className="footer--container">
                <a href="https://twitter.com/" target={'_blank'}><img src={TwitterLogo} alt="" /></a>
                <a href="https://facebook.com/" target={'_blank'}><img src={FacebookLogo} alt="" /></a>
                <a href="https://www.instagram.com/" target={'_blank'}><img src={InstagramLogo} alt="" /></a>
                <a href="https://github.com/gilbertogjn" target={'_blank'}><img src={GithubLogo} alt="" /></a>
            </div>
        </footer>
    )
}