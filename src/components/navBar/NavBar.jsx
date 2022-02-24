import React, { useState } from 'react'
import { Link, Outlet, Route, Router, useLocation } from 'react-router-dom'

export const NavBar = () => {

  const [hamburguesatoogle, setHamburguesatoogle] = useState(true);
 
  const location = useLocation();

  const pathLocation = location.pathname;

  const handleHamburguesa = () => {
    if(!hamburguesatoogle){
      setHamburguesatoogle(true)
      
    }else{
      setHamburguesatoogle(false);
    }
  }



  return (
    <div className='contenedor-nav'>
      <div className='contenedor-nav-fixed'>
        <nav className={`${!hamburguesatoogle ? 'contenido-nav-toggle' : ''} contenido-nav`}>
          <div className='contenido-welcome'>
            <h5>Welcome</h5>
          </div>

          <div className='hamburguesa' onClick={handleHamburguesa}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
        
            <Link to='/' className={`${pathLocation === '/' ? 'titulo-fijo' : 'titulo-blanco'}`} >Home</Link>
            <Link to='/skillset'  className={`${pathLocation === '/skillset' ? 'titulo-fijo' : 'titulo-blanco'}`}>Skillset</Link>
            <Link to='/portfolio'  className={`${pathLocation === '/portfolio' ? 'titulo-fijo' : 'titulo-blanco'}`}>Portfolio</Link>
            <Link to='/certificates'  className={`${pathLocation === '/certificates' ? 'titulo-fijo' : 'titulo-blanco'}`}>Certificates</Link>
            <Link to='/about-me'  className={`${pathLocation === '/about-me' ? 'titulo-fijo' : 'titulo-blanco'}`}>About Me</Link>
            <Link to='/contact'  className={`${pathLocation === '/contact' ? 'titulo-fijo' : 'titulo-blanco'}`}>Contact</Link>
          
        </nav>
      </div>
      <section className='contenido-outlet'>
        <Outlet />
      </section>
    </div>
  )
}
