import React from 'react'
import { Link } from 'react-router-dom';
import { NavbarScreen } from '../navbar/NavbarScreen';

export const RegistroUsurario = () => {
  return (
    <div className='contenedor-registro'>
      <NavbarScreen />

      <h2>Registrar Usuario</h2>

      <div className='contenido-registro'>
        <div className='contenido-registro-item'>
          <Link to="/registrar/cliente">Cliente</Link>
        </div>


        <div className='contenido-registro-item'>
          <Link to="/registrar/proveedor">Proveedor</Link>
        </div>


        <div className='contenido-registro-item'>
          <Link to="/registrar/flete">Flete</Link>
        </div>
      </div>
    </div>
  )
}
