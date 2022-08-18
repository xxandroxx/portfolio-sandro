import React from 'react'
import { Link } from 'react-router-dom';
import cliente from '../../assets/cliente.png';

export const VerClientes = () => {
  return (
    <div className='contenido-ver-home'>
    <h4>Ver todos los clientes</h4>

    <div className='contenido-card-home'>
        <img src={cliente} alt="ver" />
        <p>Aquí se pueden ver todos los clientes registrados</p>
    </div>

    <div className='btn-card-home'>
        <Link to='clientes/ver-clientes'>Ver Clientes</Link>
    </div>
</div>
  )
}
