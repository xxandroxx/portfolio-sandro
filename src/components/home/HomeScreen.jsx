import React from 'react'
import { RouterApp } from '../../routers/RouterApp'
import { NavbarScreen } from '../navbar/NavbarScreen'
import { VerClientes } from '../tarjetas/VerClientes'
import { VerFletes } from '../tarjetas/VerFletes'
import { VerProveedores } from '../tarjetas/VerProveedores'
import { VerRegistro } from '../tarjetas/VerRegistro'

export const HomeScreen = () => {
  return (
    <div>
      <NavbarScreen />

      <div className='contenedor-ver-home'>
        <div>
          <VerClientes />
        </div>
        <div>
          <VerProveedores />
        </div>
        <div>
          <VerFletes />
        </div>
        <div>
          <VerRegistro />
        </div>
      </div>
    </div>
  )
}
