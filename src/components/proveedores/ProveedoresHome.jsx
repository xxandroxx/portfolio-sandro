import React from 'react'
import { Link } from 'react-router-dom';
import ojo from '../../assets/ojo.png';
import { NavbarScreen } from '../navbar/NavbarScreen';


export const ProveedoresHome = () => {
  return (
    <div className='contenedor-tarjetas'>
            <NavbarScreen />

            <h2>Proveedores</h2>


            <div className='contenedor-card'>
                <h4>Ver todos los Proveedores</h4>

                <div className='contenido-card'>
                    <img src={ojo} alt="ver" />
                    <p>Aquí se pueden ver todos los proveedores registrados</p>
                </div>

                <div className='btn-card'>
                    <Link to='ver-proveedores'>Ver Proveedores</Link>
                </div>
            </div>
        </div>
  )
}
