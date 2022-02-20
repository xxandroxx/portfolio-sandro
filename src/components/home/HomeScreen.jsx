import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderScreen } from '../header/HeaderScreen'
import ReactImage from '../../assets/img-materias/react.png';
import { HomePopUp } from './HomePopUp';

export const HomeScreen = () => {

    const [popUp, setPopUp] = useState(false);


    const handleOpenPopUp = () => {
        setPopUp(true);
    }

    return (
        <div className='contenedor-home'>
            <div>
                <HeaderScreen />
            </div>

            <div className='contenedor-titulo'>
                <h2>Home</h2>
            </div>

            <section className='contenedor-section-home'>
                <div className='contenido-section-home' onClick={handleOpenPopUp}>
                    <div className='contenido-download'>
                        <h5>Download My CV</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="60" height="60" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <polyline points="7 11 12 16 17 11" />
                            <line x1="12" y1="4" x2="12" y2="16" />
                        </svg>
                    </div>
                </div>

                {
                    popUp && <HomePopUp setPopUp={setPopUp} />
                }

                <Link to='portfolio' >
                    <div className='contenido-section-home'>
                        <div className='contenido-download'>
                            <h5>Portfolio</h5>
                            <img src={ReactImage} alt="react-logo" />
                        </div>
                    </div>
                </Link>

                <Link to='contact'>
                    <div className='contenido-section-home'>
                        <div className='contenido-download'>
                            <h5>Contact</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="80" height="80" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </div>
                    </div>
                </Link>

                <Link to='certificates'>
                    <div className='contenido-section-home'>
                        <div className='contenido-download'>
                            <h5>Certificates</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width="60" height="60" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <line x1="3" y1="6" x2="3" y2="19" />
                                <line x1="12" y1="6" x2="12" y2="19" />
                                <line x1="21" y1="6" x2="21" y2="19" />
                            </svg>
                        </div>
                    </div>
                </Link>

            </section>
        </div>
    )
}
