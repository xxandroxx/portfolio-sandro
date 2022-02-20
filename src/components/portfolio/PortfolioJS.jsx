import React, { useState } from 'react'
import { HeaderScreen } from '../header/HeaderScreen';
import { PortfolioAion } from './PortfolioAion';
import { PortfolioJsFull } from './PortfolioJsFull';

export const PortfolioJS = () => {


  return (
    <div className='contenedor-full'>
      <div>
        <HeaderScreen />
      </div>

      <div className='contenedor-titulo contenedor-titulo-portfolio-js'>
        <h2>Portfolio HTML, CSS <span>&</span> Javascript</h2>
      </div>

      <PortfolioJsFull />
   

    </div>
  )
}
