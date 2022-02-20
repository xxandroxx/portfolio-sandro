import React from 'react'
import { Link } from 'react-router-dom'
import { objetoImgPortfolioReact } from '../../data/imagenesPortfolio'

export const PortfolioCalendario = () => {
  return (
    <div className='contenedor'>
    <div className='contenedor-titulo contenedor-titulo-aion'>
        <h2>Get Gifs</h2>
    </div>

    <div className='contenedor-imgs-portfolio'>

        {
            objetoImgPortfolioReact.filter(img => img.title === 'Calendario').map(filtered => (

                <div key={filtered.id} className='contenido-portfolio-js'>
                    <img className='animate__animated animate__fadeInLeft' src={filtered.img} alt={filtered.name} />
                </div>

            ))

        }
    </div>

    <Link to='/react-portfolio'>
        <div className='contenedor-btn-volver'>
            <p>Back</p>
        </div>
    </Link>
</div>
  )
}
