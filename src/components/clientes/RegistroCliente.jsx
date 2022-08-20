import React from 'react';

const RegistroCliente = () => {
    return (
        <div className='registro-cliente-container'>

            <h2>Registrar Cliente</h2>

            <form className='form-registro-cliente'>

                <div className='form-registro-cliente-container'>

                    <div className='form-registro-content'>
                        <label htmlFor="nombre_cliente">Nombre:</label>
                        <input type="text" id='nombre_cliente' placeholder='Nombre Cliente' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="apellido_cliente">Apellido:</label>
                        <input type="text" id='apellido_cliente' placeholder='Apellido Cliente' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="correo_cliente">Correo:</label>
                        <input type="email" name="correo_cliente" id="correo_cliente" placeholder='Correo Cliente' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="telefono_cliente">Teléfono:</label>
                        <input type="text" id='telefono_cliente' placeholder='+569999999999' />
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="pais_cliente">País</label>
                        <select>
                            <option value="">Seleccione País</option>
                            <option value="">Taiwan</option>
                            <option value="">Corea del sur</option>
                            <option value="">Canadá</option>
                            <option value="">China</option>
                            <option value="">Agregar nuevo país</option>
                        </select>
                    </div>

                    <div className='form-registro-content'>
                        <label htmlFor="ciudad_cliente">Ciudad:</label>
                        <input type="text" id='ciudad_cliente' placeholder='Ciudad Cliente' />
                    </div>

                </div>

                <div className='form-button-cliente'>
                    <button>Agregar Cliente</button>
                </div>
            </form>
        </div>
    );
}

export default RegistroCliente;
