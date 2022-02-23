import React from 'react'
import { Link } from 'react-router-dom'
import { objetoImgPortfolioJs } from '../../data/imagenesPortfolio'

export const PortfolioCafe = () => {
    return (
        <div className='contenedor'>
            <div className='contenedor-titulo contenedor-titulo-aion'>
                <h2>COFFEE RECIPES</h2>
            </div>

            <div className='contenedor-imgs-portfolio'>

                {
                    objetoImgPortfolioJs.filter(img => img.title === 'coffee').map(filtered => (

                        <div key={filtered.id} className='contenido-portfolio-js'>
                            <img className='animate__animated animate__fadeInLeft' src={filtered.img} alt={filtered.name} />
                        </div>

                    ))

                }
            </div>

            <Link to='/js-portfolio'>
                <div className='contenedor-btn-volver'>
                    <p>Back</p>
                </div>
            </Link>
        </div>
    )
}
