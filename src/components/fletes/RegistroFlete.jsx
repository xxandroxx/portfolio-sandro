import React from 'react'

export const RegistroFlete = () => {
    return (
        <div className='registro-flete-container'>

            <h2>Registrar Flete</h2>

            <form className='form-registro-flete'>

                <div className='form-registro-flete-container'>

                    <div className='form-registro-content'>
                        <label htmlFor="nombre_flete">Nombre:</label>
                        <input type="text" id='nombre_flete' placeholder='Nombre Flete' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="apellido_flete">Apellido:</label>
                        <input type="text" id='apellido_flete' placeholder='Apellido Flete' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="rut_flete">RUT:</label>
                        <input type="text" id='rut_flete' placeholder='RUT Flete' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="correo_flete">Correo:</label>
                        <input type="email" name="correo_flete" id="correo_flete" placeholder='Correo flete' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="telefono_flete">Teléfono:</label>
                        <input type="text" id='telefono_flete' placeholder='+569999999999' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="direccion_flete">Dirección:</label>
                        <input type="text" id='direccion_flete' placeholder='Dirección' />
                    </div>


                </div>

                <div className='form-button-flete'>
                    <button>Agregar Cliente</button>
                </div>
            </form>
        </div>
    )
}
