import React from 'react'
import { Link } from 'react-router-dom';

export const NavbarScreen = () => {
  return (
    <div className='navbar-container'>
      <div className='logo-nav'>
        <h1>OSPJ</h1>
        <span>Group</span>
      </div>

      <nav className='navbar-content'>
        <Link to='/'>Inicio</Link>
        <Link to="/registrar">Registrar</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/proveedores">Proveedores</Link>
        <Link to="/fletes">Fletes</Link>

        <Link to="/login">Cerrar sesión</Link>
      </nav>

    </div>
  )
}
