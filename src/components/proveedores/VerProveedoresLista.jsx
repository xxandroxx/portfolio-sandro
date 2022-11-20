import React, { useEffect, useState } from 'react'

import { collection, doc, getDocs } from "firebase/firestore";
import db from '../../firebase';
import { NavbarScreen } from '../navbar/NavbarScreen';
import { PopUpBancoProveedor } from './PopUpBancoProveedor';
import { VerClientes } from '../tarjetas/VerClientes';



export const VerProveedoresLista = () => {

    const [popUp, setPopUp] = useState(false);

    // const [listaClientes, setListaClientes] = useState([]);

    // useEffect(() => {

    //     const obtenerDatos = async () => {
    //         const datosClientes = await getDocs(collection(db, 'proveedores'));
    //         const listado = [];
    //         datosClientes.forEach((doc) => {
    //             listado.push({ ...doc.data() });
    //         })

    //         setListaClientes(listado);
    //     }

    //     obtenerDatos();

    const ActivarModal = () => {
        setPopUp(true);
    }

    return (
        <div>
            <NavbarScreen />

            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">RUT</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Deuda</th>
                        <th scope="col">Cuenta Bancaria</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>RUT</td>
                        <td>Correo</td>
                        <td>Telefono</td>
                        <td>Ciudad</td>
                        <td>Direccion</td>
                        <td>Deuda</td>
                        <td className='ver-banco-popup' onClick={ActivarModal}>Ver
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                            </svg>
                        </td>
                    </tr>

                </tbody>
            </table>


            {
                popUp == true && <PopUpBancoProveedor popUp={popUp} setPopUp={setPopUp} />
            }
        </div>
    )
}
