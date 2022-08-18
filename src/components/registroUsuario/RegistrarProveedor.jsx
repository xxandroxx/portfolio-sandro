import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import db from '../../firebase';
import { NavbarScreen } from '../navbar/NavbarScreen'

export const RegistrarProveedor = () => {

    const addOrEdit = async (linkObject) => {

        await addDoc(collection(db, "proveedores"), linkObject);
    
        alert('Se ha agregado el proveedor con éxito');
    }


    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        ciudad: '',
        direccion: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrEdit(values);
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
  return (
    <div className='contenedor-formulario'>
        <NavbarScreen />
        <h2>Registrar Proveedor</h2>


        <form className='contenedor-formulario-item' onSubmit={handleSubmit}>
            <div className='contenido-form'>
                <label>Nombre Proveedor: </label>
                <input type="text" onChange={handleInputChange} name='nombre' />
            </div>

            <div className='contenido-form'>
                <label>Apellido Proveedor: </label>
                <input type="text" onChange={handleInputChange} name='apellido' />
            </div>

            <div className='contenido-form'>
                <label>Teléfono: </label>
                <input type="text" onChange={handleInputChange} name='telefono' />
            </div>

            <div className='contenido-form'>
                <label>Ciudad: </label>
                <input type="text" onChange={handleInputChange} name='ciudad' />
            </div>

            <div className='contenido-form'>
                <label>Dirección: </label>
                <input type="text" onChange={handleInputChange} name='direccion' />
            </div>

            <div className='contenido-form'>
                <button>Agregar Proveedor</button>
            </div>

        </form>
    </div>
  )
}
