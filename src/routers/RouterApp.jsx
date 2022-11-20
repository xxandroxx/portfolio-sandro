import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import { Base } from '../components/Base'
import { ClientesHome } from '../components/clientes/ClientesHome'
import RegistroCliente from '../components/clientes/RegistroCliente'
import { VerClientes, VerClientesLista } from '../components/clientes/VerClientesLista'
import DeudoresScreen from '../components/deudores/DeudoresScreen'
import { DivisasScreen } from '../components/divisas/DivisasScreen'
import { FletesHome } from '../components/fletes/FletesHome'
import { RegistroFlete } from '../components/fletes/RegistroFlete'
import { VerFletesLista } from '../components/fletes/VerFletesLista'
import HeaderScreen from '../components/header/HeaderScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { LoginScreen } from '../components/loginScreen/LoginScreen'
import { NavbarScreen } from '../components/navbar/NavbarScreen'
import { ProveedoresHome } from '../components/proveedores/ProveedoresHome'
import RegistroProveedor from '../components/proveedores/RegistroProveedor'
import { VerProveedoresLista } from '../components/proveedores/VerProveedoresLista'
import { RegistrarCliente } from '../components/registroUsuario/RegistrarCliente'
import { RegistrarFlete } from '../components/registroUsuario/RegistrarFlete'
import { RegistrarProveedor } from '../components/registroUsuario/RegistrarProveedor'
import { RegistroUsurario } from '../components/registroUsuario/RegistroUsurario'
import { VerProveedores } from '../components/tarjetas/VerProveedores'
import { PerfilTrabajador } from '../components/trabajadores/PerfilTrabajador'
import { RegistrarTrabajador } from '../components/trabajadores/RegistrarTrabajador'
import TrabajadoresScreen from '../components/trabajadores/TrabajadoresScreen'
import { VerTrabajadores } from '../components/trabajadores/VerTrabajadores'
// import { Provider } from 'react-redux';
// import store from '../store'


export const RouterApp = () => {
  return (

    <div className='router-container'>
        <HeaderScreen />
        <NavbarScreen />

      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/home' element={<HomeScreen />} />

        {/* <Route path='*' element={<Navigate to='/' />} /> */}
        <Route path='/registrar' element={<RegistroUsurario />} />
        <Route path='/registrar/proveedor' element={<RegistroProveedor />} />
        <Route path='/registrar/cliente' element={<RegistroCliente />} />
        <Route path='/registrar/flete' element={<RegistroFlete />} />
        <Route path='/clientes' element={<ClientesHome />} />
        <Route path='/ver-clientes' element={<VerClientesLista />} />
        <Route path='/proveedores' element={<ProveedoresHome />} />
        <Route path='/fletes' element={<FletesHome />} />
        <Route path='/clientes/ver-clientes' element={<VerClientesLista />} />
        <Route path='/proveedores/ver-proveedores' element={<VerProveedoresLista />} />
        <Route path='/fletes/ver-fletes' element={<VerFletesLista />} />
        <Route path='/deudores' element={<DeudoresScreen />} />
        <Route path='/trabajadores' element={<TrabajadoresScreen />} />
        <Route path='/divisas' element={<DivisasScreen />} />
        <Route path='/trabajador/registro-trabajador' element={<RegistrarTrabajador />} />
        <Route path='/trabajador/ver-trabajadores' element={<VerTrabajadores />} />
        <Route path='/trabajador/perfil-trabajador' element={<PerfilTrabajador />} /> 



      </Routes>
    </div>
  )
}
