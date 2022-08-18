import React from 'react'
import { NavbarScreen } from '../navbar/NavbarScreen';
import { Link } from 'react-router-dom';
import ojo from '../../assets/ojo.png';


export const FletesHome = () => {
  return (
    <div className='contenedor-tarjetas'>
    <NavbarScreen />
    
    <h2>Fletes</h2>


    <div className='contenedor-card'>
        <h4>Ver todos los fletes</h4>

        <div className='contenido-card'>
            <img src={ojo} alt="ver" />
            <p>Aquí se pueden ver todos los fletes registrados</p>
        </div>

        <div className='btn-card'>
            <Link to='ver-fletes'>Ver Fletes</Link>
        </div>
    </div>
</div>
  )
}
