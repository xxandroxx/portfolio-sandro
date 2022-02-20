import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HeaderScreen } from '../header/HeaderScreen'


export const Portfolioscreen = () => {
  return (
    <div>
      <div>
        <HeaderScreen />
      </div>

      <div className='contenedor-titulo'>
        <h2>Portfolio</h2>
      </div>


      <section className='contenedor-projects'>

        <Link to='/js-portfolio'>
          <div className='contenido-section-projects'>
            <p>HTML, CSS , JS</p>
            <h3>Projects</h3>
          </div>
       
        </Link>

        <Link to='/react-portfolio'>
          <div className='contenido-section-projects'>
            <p>React JS</p>
            <h3>Projects</h3>
          </div>
        </Link>

      </section>
    </div>
  )
}
