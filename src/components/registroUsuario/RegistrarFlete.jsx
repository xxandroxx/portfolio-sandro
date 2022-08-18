import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import db from '../../firebase';
import { NavbarScreen } from '../navbar/NavbarScreen'

export const RegistrarFlete = () => {

    const addOrEdit = async (linkObject) => {

        await addDoc(collection(db, "fletes"), linkObject);
    
        alert('Se ha agregado el flete con éxito');
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
    <div  className='contenedor-formulario'>
        <NavbarScreen />

            <h2>Registrar Flete</h2>


            <form className='contenedor-formulario-item' onSubmit={handleSubmit}>
                <div className='contenido-form'>
                    <label>Nombre Flete: </label>
                    <input type="text" name='nombre' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>Apellido Flete: </label>
                    <input type="text" name='apellido' onChange={handleInputChange} />
                </div>

                <div className='contenido-form'>
                    <label>Teléfono: </label>
                    <input type="text" name='telefono' onChange={handleInputChange} />
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
                    <button>Agregar Flete</button>
                </div>

            </form>
        </div>
  )
}
