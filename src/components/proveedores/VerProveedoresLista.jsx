import React, { useEffect, useState } from 'react'

import { collection, doc, getDocs } from "firebase/firestore";
import db from '../../firebase';
import { NavbarScreen } from '../navbar/NavbarScreen';



export const VerProveedoresLista = () => {
 
    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {

        const obtenerDatos = async () => {
            const datosClientes = await getDocs(collection(db, 'proveedores'));
            const listado = [];
            datosClientes.forEach((doc) => {
                listado.push({ ...doc.data() });
            })

            setListaClientes(listado);
        }

        obtenerDatos();

    }, []);
    return (
        <div>
            <NavbarScreen />

            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    {listaClientes.map(cli => (
                        <tr>
                            <td>{cli.nombre}</td>
                            <td>{cli.apellido}</td>
                            <td>{cli.telefono}</td>
                            <td>{cli.ciudad}</td>
                            <td>{cli.direccion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
