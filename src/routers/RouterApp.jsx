import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ClientesHome } from '../components/clientes/ClientesHome'
import { VerClientes, VerClientesLista } from '../components/clientes/VerClientesLista'
import { FletesHome } from '../components/fletes/FletesHome'
import { VerFletesLista } from '../components/fletes/VerFletesLista'
import { HomeScreen } from '../components/home/HomeScreen'
import { LoginScreen } from '../components/loginScreen/LoginScreen'
import { ProveedoresHome } from '../components/proveedores/ProveedoresHome'
import { VerProveedoresLista } from '../components/proveedores/VerProveedoresLista'
import { RegistrarCliente } from '../components/registroUsuario/RegistrarCliente'
import { RegistrarFlete } from '../components/registroUsuario/RegistrarFlete'
import { RegistrarProveedor } from '../components/registroUsuario/RegistrarProveedor'
import { RegistroUsurario } from '../components/registroUsuario/RegistroUsurario'
import { VerProveedores } from '../components/tarjetas/VerProveedores'
// import { Provider } from 'react-redux';
// import store from '../store'


export const RouterApp = () => {
  return (
    <Routes>
  

        <Route path='/login' element={<LoginScreen />} />
        <Route path='/' element={<HomeScreen />} />

        {/* <Route path='*' element={<Navigate to='/' />} /> */}
        <Route path='/registrar' element={<RegistroUsurario />} />
        <Route path='/registrar/proveedor' element={<RegistrarProveedor />} />
        <Route path='/registrar/cliente' element={<RegistrarCliente />} />
        <Route path='/registrar/flete' element={<RegistrarFlete />} />
        <Route path='/clientes' element={<ClientesHome />} />
        <Route path='/proveedores' element={<ProveedoresHome />} />
        <Route path='/fletes' element={<FletesHome />} />
        <Route path='/clientes/ver-clientes' element={<VerClientesLista />} />
        <Route path='/proveedores/ver-proveedores' element={<VerProveedoresLista />} />
        <Route path='/fletes/ver-fletes' element={<VerFletesLista />} />


    </Routes>
  )
}
