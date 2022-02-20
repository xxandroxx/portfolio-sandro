import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderScreen } from '../header/HeaderScreen'

export const ContactScreen = () => {
    return (
        <div>
            <div>
                <HeaderScreen />
            </div>

            <div className='contenedor-titulo'>
                <h2>Contact</h2>
            </div>

            <div className='contenedor-enlaces'>
                <a target='_blank' href='https://www.instagram.com/sandrowtf/'>
                    <div className='contenido-enlace'>
                        <p>click below to go to my </p>
                        <span>Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="76" height="76" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </div>
                </a>

                <a target='_blank' href="http://www.linkedin.com/in/sandro-ovando">
                    <div className='contenido-enlace'>
                        <p>click below to go to my </p>
                        <span>LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="76" height="76" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </div>
                </a>

                <a href="mailto:sandro.ovando@gmail.com">
                    <div className='contenido-enlace'>
                        <p>click below send me an</p>
                        <span>Email</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="76" height="76" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    )
}
