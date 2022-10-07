import React, { useState } from 'react';

const RegistroProveedor = () => {

    const [cuentaBancaria, setCuentaBancaria] = useState(false);
    const [tieneDeuda, setTieneDeuda] = useState(false);

    const handleRadioFalse = () => {
        setCuentaBancaria(false);
    }
    const handleRadioTrue = () => {
        setCuentaBancaria(true);
    }

    const handleDeudaFalse = () => {
        setTieneDeuda(false);
    }

    const handleDeudaTrue = () => {
        setTieneDeuda(true);
    }

    return (
        <div className='registro-proveedor-container'>

            <h2>Registrar Proveedor</h2>

            <form className='form-registro-proveedor'>

                <div className='legend-personal-proveedor'>
                    <h3>Datos Personales</h3>

                    <div className='form-registro-proveedor-container'>

                        <div className='form-registro-content'>
                            <label htmlFor="nombre_proveedor">Nombre:</label>
                            <input type="text" id='nombre_proveedor' placeholder='Nombre Proveedor' />
                        </div>

                        <div className='form-registro-content'>
                            <label htmlFor="apellido_proveedor">Apellido:</label>
                            <input type="text" id='apellido_proveedor' placeholder='Apellido Proveedor' />
                        </div>

                        <div className='form-registro-content'>
                            <label htmlFor="rut_proveedor">RUT:</label>
                            <input type="text" id='rut_proveedor' placeholder='RUT Proveedor' />
                        </div>

                        <div className='form-registro-content'>
                            <label htmlFor="correo_proveedor">Correo:</label>
                            <input type="email" name="correo_proveedor" id="correo_proveedor" placeholder='Correo Proveedor' />
                        </div>

                        <div className='form-registro-content'>
                            <label htmlFor="telefono_proveedor">Teléfono:</label>
                            <input type="text" id='telefono_proveedor' placeholder='+569999999999' />
                        </div>

                        <div className='form-registro-content'>
                            <label htmlFor="ciudad_proveedor">Ciudad:</label>
                            <input type="text" id='ciudad_proveedor' placeholder='Ciudad Proveedor' />
                        </div>

                        <div className='form-registro-content direccion_proveedor'>
                            <label htmlFor="direccion_proveedor">Dirección:</label>
                            <input type="text" id='direccion_proveedor' placeholder='Dirección' />
                        </div>

                        <div className='form-registro-content radio_opcion_proveedor'>
                            <label>Tiene cuenta bancaria?</label>
                            <div className='radio_opcion_container'>
                                <div className='radio_opcion_content'>
                                    <label>Si</label>
                                    <input type="radio" name="opcion_bancaria" id="opcion_bancaria_si" value={cuentaBancaria} onChange={handleRadioTrue} />
                                </div>
                                <div className='radio_opcion_content'>
                                    <label>No</label>
                                    <input type="radio" name="opcion_bancaria" id="opcion_bancaria_no" value={cuentaBancaria} onChange={handleRadioFalse} />
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

                {cuentaBancaria && (<div className='legend-bancarios-proveedor'>
                    <h3>Datos Bancarios</h3>

                    <div className='form-registro-proveedor-container'>

                        <div className='form-registro-content'>
                            <label htmlFor="banco_proveedor">Banco:</label>
                            <select>
                                <option value="">Seleccione Banco...</option>
                                <option value="">Banco Chile/Edwards</option>
                                <option value="">Banco Internacional</option>
                                <option value="">Banco Estado</option>
                                <option value="">Banco ScotiaBank</option>
                                <option value="">Banco BCI</option>
                                <option value="">Corpbanca</option>
                                <option value="">Banco BICE</option>
                                <option value="">Banco HSBC Bank</option>
                                <option value="">Banco Santander</option>
                                <option value="">Banco Itau</option>
                                <option value="">Banco Security</option>
                                <option value="">Banco Falabella</option>
                                <option value="">Banco Ripley</option>
                                <option value="">RaboBank</option>
                                <option value="">Banco Consorcio</option>
                                <option value="">Banco Paris</option>
                                <option value="">BBVA</option>
                                <option value="">Banco del Desarrollo</option>
                                <option value="">Coopeuch</option>
                                <option value="">Caja los Heroes</option>
                                <option value="">Tenpo Prepago</option>
                                <option value="">TAPP Caja los Andes</option>
                                <option value="">Mercado Pago</option>
                            </select>
                        </div>

                        <div className='form-registro-content'>
                            <label htmlFor="tipo_cuenta_proveedor">Tipo de cuenta:</label>
                            <select>
                                <option value="">Tipo de cuenta...</option>
                                <option value="">Cuenta Corriente</option>
                                <option value="">Cuenta Vista/RUT</option>
                                <option value="">Cuenta de Ahorro</option>
                            </select>
                        </div>

                        <div className='form-registro-content'>
                            <label htmlFor="numero_cuenta_proveedor">N° de Cuenta:</label>
                            <input type="text" id='numero_cuenta_proveedor' placeholder='N° de cuenta' />
                        </div>

                    </div>

                </div>)}


                <div className='form-registro-content radio_opcion_proveedor'>
                    <label>Tiene deudas?</label>
                    <div className='radio_opcion_container'>
                        <div className='radio_opcion_content'>
                            <label>Si</label>
                            <input type="radio" name="opcion_deuda" id="opcion_deuda_si" value={tieneDeuda} onChange={handleDeudaTrue} />
                        </div>
                        <div className='radio_opcion_content'>
                            <label>No</label>
                            <input type="radio" name="opcion_deuda" id="opcion_deuda_no" value={tieneDeuda} onChange={handleDeudaFalse} />
                        </div>

                    </div>
                </div>


                {tieneDeuda && (<div className='legend-bancarios-proveedor'>
                    <h3>Datos Deuda</h3>
                    <div className='form-registro-proveedor-container'>

                        <div className='form-registro-content'>
                            <label htmlFor="deuda_proveedor">Deuda:</label>
                            <input type="text" id='deuda_proveedor' placeholder='Cantidad' />
                        </div>

                    </div>
                </div>
                )}





                <div className='form-button-proveedor'>
                    <button>Agregar Proveedor</button>
                </div>
            </form>
        </div>
    );
}

export default RegistroProveedor;
