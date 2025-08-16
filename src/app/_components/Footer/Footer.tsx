import React from 'react'
import './Footer.css'
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    const socialLinks = [
        {
            icon: <FaWhatsapp size={20} />,
            url: 'https://wa.me/9835587951', // Replace with your number
        },
        {
            icon: <FaGithub size={20} />,
            url: 'https://github.com/Khush0601',
        },
        {
            icon: <FaLinkedinIn size={20} />,
            url: 'https://www.linkedin.com/in/khushboo-kumari-58942524b/',
        },
        {
            icon: <FaInstagram size={20} />,
            url: 'https://www.instagram.com/khushboosingh0601/',
        },
    ];
    return (
        <footer className='app-footer'>
            <div className="flex justify-center gap-4 p-4">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <p>© 2024 All Rights Reserved & Designed by~ Khushboo</p>
        </footer>
    )
}

export default Footer
