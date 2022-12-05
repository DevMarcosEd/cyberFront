import React from "react";
import './header.css'
import  {FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Header() {
        return (
            <header className="container">
                <div className='social-media'>
                    <a  href='/' className='github-link'>
                        <FaLinkedin/>
                    </a>
                    <a href='/' className='linkedin-link'>
                        <FaGithub/>
                    </a>
                    <a href='/' className='instagram-link'>
                        <FaInstagram/>
                    </a>
                 </div>
                 <div className="content-btn">
                    <div className="btn"></div>
                 </div>
            </header>
        )
}
