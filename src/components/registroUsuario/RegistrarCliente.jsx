import React, { useState } from 'react'
import { NavbarScreen } from '../navbar/NavbarScreen'
import db from '../../firebase';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const RegistrarCliente = () => {

    const addOrEdit = async (linkObject) => {
        //    await db.collection('clientes').doc().set(linkObject);
        await addDoc(collection(db, "clientes"), linkObject);
        // console.log(linkObject);
        alert('Se ha agregado el cliente con éxito');
    }


    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        pais: '',
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

            <h2>Registrar Cliente</h2>


            <form className='contenedor-formulario-item' onSubmit={handleSubmit}>
                <div className='contenido-form'>
                    <label>Nombre Cliente: </label>
                    <input type="text" name='nombre' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>Apellido Cliente: </label>
                    <input type="text" name='apellido' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>Teléfono: </label>
                    <input type="text" name='telefono' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>Correo: </label>
                    <input type="text" name='correo' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>País: </label>
                    <input type="text" name='pais' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>Ciudad: </label>
                    <input type="text" name='ciudad' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>Dirección: </label>
                    <input type="text" name='direccion' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <button>Agregar Cliente</button>
                </div>

            </form>
        </div>
    )
}
