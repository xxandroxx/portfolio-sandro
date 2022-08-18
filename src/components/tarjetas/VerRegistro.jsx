import React from 'react';
import { Link } from 'react-router-dom';
import registro from '../../assets/registro.png';

export const VerRegistro = () => {
  return (
    <div className='contenido-ver-home'>
            <h4>Registrar</h4>

            <div className='contenido-card-home'>
                <img src={registro} alt="ver" />
                <p>Aquí se pueden registrar clientes, proveedores o fletes.</p>
            </div>

            <div className='btn-card-home'>
                <Link to='registrar'>Registrar</Link>
            </div>
        </div>
  )
}
