import React from 'react'
import { HeaderScreen } from '../header/HeaderScreen'
import { PortfolioFullReact } from './PortfolioFullReact'
import ReactImg from '../../assets/img-materias/react.png';

export const PortfolioReact = () => {
  return (
    <div>

      <div>
        <HeaderScreen />
      </div>

      <div className='contenedor-titulo contenedor-titulo-react'>
        <h2>Portfolio React</h2>
        <div className='contenido-titulo-img'>
          <img src={ReactImg} alt="react-logo" />
        </div>

      </div>


        <PortfolioFullReact />
    </div>
  )
}
