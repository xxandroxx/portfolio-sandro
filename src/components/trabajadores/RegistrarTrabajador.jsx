import React from 'react'

export const RegistrarTrabajador = () => {
  return (
    <div className='registro-cliente-container'>

    <h2>Registrar Trabajador</h2>

    <form className='form-registro-cliente'>

        <div className='form-registro-cliente-container'>

            <div className='form-registro-content'>
                <label htmlFor="nombre_trabajador">Nombre:</label>
                <input type="text" id='nombre_trabajador' placeholder='Nombre Trabajador' />
            </div>

            <div className='form-registro-content'>
                <label htmlFor="apellido_trabajador">Apellido:</label>
                <input type="text" id='apellido_trabajador' placeholder='Apellido trabajador' />
            </div>


            <div className='form-registro-content'>
                <label htmlFor="rut_trabajador">RUT:</label>
                <input type="text" id='rut_trabajador' placeholder='Rut trabajador' />
            </div>


            <div className='form-registro-content'>
                <label htmlFor="correo_trabajador">Nacionalidad:</label>
                <input type="email" name="correo_trabajador" id="correo_trabajador" placeholder='Correo trabajador' />
            </div>

            <div className='form-registro-content'>
                <label htmlFor="ciudad_trabajador">Domicilio:</label>
                <input type="text" id='ciudad_trabajador' placeholder='Ciudad trabajador' />
            </div>

            <div className='form-registro-content'>
                <label htmlFor="telefono_trabajador">Teléfono:</label>
                <input type="text" id='telefono_trabajador' placeholder='+569999999999' />
            </div>

            <div className='form-registro-content registro-trabajador-foto'>
                <label htmlFor="">Fotos de perfil</label>
                <input type="file" name='foto_trabajador' />
            </div>

           


        </div>

        <div className='form-button-cliente'>
            <button>Agregar Trabajador</button>
        </div>
    </form>
</div>
  )
}
