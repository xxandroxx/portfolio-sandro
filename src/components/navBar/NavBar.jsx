import React from 'react'
import { Link, Outlet, Route, Router } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div className='contenedor-nav'>
      <div className='contenedor-nav-fixed'>
        <nav className='contenido-nav'>
          <div className='contenido-welcome'>
            <h5>Welcome</h5>
          </div>
          <Link to='/'>Home</Link>
          <Link to='/skillset'>Skillset</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/certificates'>Certificates</Link>
          <Link to='/about-me'>About Me</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
      <section className='contenido-outlet'>
        <Outlet />
      </section>
    </div>
  )
}
