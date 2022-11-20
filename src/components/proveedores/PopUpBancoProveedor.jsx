import React from 'react'

export const PopUpBancoProveedor = ({popUp, setPopUp}) => {

    const cerrarModal = () =>{
        setPopUp(false);
    }

    return (
        <div className='contenedor-popup-banco'>

            <div className='contenido-popup-banco'>

                <div className='titulo-popup-banco'>
                    <h2>Datos Bancarios</h2>
                    <h3>Nombre del proveedor</h3>
                </div>

                <div>

                    <div className='info-banco'>
                        <h4>Banco:</h4>
                        <p>Santander</p>
                    </div>

                    <div className='info-banco'>
                        <h4>Tipo de cuenta:</h4>
                        <p>Cuenta Corriente</p>
                    </div>

                    <div className='info-banco'>
                        <h4>N° de cuenta:</h4>
                        <p>12345678</p>
                    </div>
                </div>

                <div className='btn-cerrar-popup-banco'>
                    <button onClick={cerrarModal}>
                        Cerrar
                    </button>
                </div>

            </div>


        </div>
    )
}
