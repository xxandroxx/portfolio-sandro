import React from 'react'
import cvSpanish from '../../assets/pdf-cv/CV-Español.pdf';
import cvEnglish from '../../assets/pdf-cv/CV-English.pdf';

export const HomePopUp = ({ setPopUp }) => {

    const handleClosePopUp = () => {
        setTimeout(() => {
            setPopUp(false);
        }, 500);
    }

    return (
        <div className='contenedor-popup'>
            <div className='contenido-popup'>

                <div className='contenedor-btn'>

                    <button className='btn btn-danger' onClick={handleClosePopUp}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-x" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="7" y1="4" x2="17" y2="20" />
                            <line x1="17" y1="4" x2="7" y2="20" />
                        </svg>
                    </button>

                </div>

                <h3>Download CV</h3>

                <div className='contenedor-descargar-cv'>
                    <a className='btn btn-success' onClick={handleClosePopUp} href={cvSpanish} download='Sandro-Ovando-español'>Español</a>
                    <a className='btn btn-success' onClick={handleClosePopUp} href={cvEnglish} download='Sandro-Ovando-english'>English</a>
                </div>
            </div>
        </div>
    )
}
