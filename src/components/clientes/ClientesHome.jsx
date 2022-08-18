import React from 'react';
import { Link } from 'react-router-dom';
import ojo from '../../assets/ojo.png';
import { NavbarScreen } from '../navbar/NavbarScreen';

export const ClientesHome = () => {
    return (
        <div className='contenedor-tarjetas'>
            <NavbarScreen />

            <h2>Clientes</h2>


            <div className='contenedor-card'>
                <h4>Ver todos los clientes</h4>

                <div className='contenido-card'>
                    <img src={ojo} alt="ver" />
                    <p>Aquí se pueden ver todos los clientes registrados</p>
                </div>

                <div className='btn-card'>
                    <Link to='ver-clientes'>Ver Clientes</Link>
                </div>
            </div>
        </div>
    )
}
