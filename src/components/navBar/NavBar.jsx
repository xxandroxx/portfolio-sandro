import React from 'react'
import { Link, Outlet, Route, Router, useLocation } from 'react-router-dom'

export const NavBar = () => {

  const location = useLocation();

  const pathLocation = location.pathname;

  

  return (
    <div className='contenedor-nav'>
      <div className='contenedor-nav-fixed'>
        <nav className='contenido-nav'>
          <div className='contenido-welcome'>
            <h5>Welcome</h5>
          </div>
          <Link to='/' className={`${pathLocation === '/' ? 'titulo-fijo' : 'titulo-blanco'}`} >Home</Link>
          <Link to='/skillset' className={`${pathLocation === '/skillset' ? 'titulo-fijo' : 'titulo-blanco'}`}>Skillset</Link>
          <Link to='/portfolio' className={`${pathLocation === '/portfolio' ? 'titulo-fijo' : 'titulo-blanco'}`}>Portfolio</Link>
          <Link to='/certificates' className={`${pathLocation === '/certificates' ? 'titulo-fijo' : 'titulo-blanco'}`}>Certificates</Link>
          <Link to='/about-me' className={`${pathLocation === '/about-me' ? 'titulo-fijo' : 'titulo-blanco'}`}>About Me</Link>
          <Link to='/contact' className={`${pathLocation === '/contact' ? 'titulo-fijo' : 'titulo-blanco'}`}>Contact</Link>
        </nav>
      </div>
      <section className='contenido-outlet'>
        <Outlet />
      </section>
    </div>
  )
}
