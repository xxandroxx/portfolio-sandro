import React from 'react'
import { Link } from 'react-router-dom';
import { objetoImgPortfolioJs } from '../../data/imagenesPortfolio';
import 'animate.css';

export const PortfolioJsFull = () => {


  return (
    <div className='contenedor contenedor-imgs-portfolio'>
  
      {
        objetoImgPortfolioJs.filter(img => img.number === 1).map(filtered => (
          <Link key={filtered.id} to={`/${filtered.title}`}>
            <div  className='contenido-portfolio-js'>
              <h4>{filtered.title}</h4>
              <img className='animate__animated animate__fadeInLeft' src={filtered.img} alt={filtered.name} />
            </div>
          </Link>
        ))
      }

    </div>
  )
}
