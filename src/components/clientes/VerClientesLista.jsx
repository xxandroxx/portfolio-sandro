import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs } from "firebase/firestore";
import db from '../../firebase';
import { NavbarScreen } from '../navbar/NavbarScreen';

export const VerClientesLista = () => {

    const [listaClientes, setListaClientes] = useState([]);

    const cargarDatos = () => {
        fetch("https://dummyjson.com/products/")
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => { setListaClientes(datosRespuesta.products) })
            .catch(console.log())

    }


    useEffect(() => {
        cargarDatos();
    }, [])



    return (
        <div>


            <table className="table mt-5 ver-clientes-contenedor">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">País</th>
                        <th scope="col">Ciudad</th>
                    </tr>
                </thead>
                
                <tbody>
                    {listaClientes.map(cli => (
                        <tr>
                            <td>{cli.id}</td>
                            <td>{cli.title}</td>
                            <td>{cli.telefono}</td>
                            <td>{cli.correo}</td>
                            <td>{cli.pais}</td>
                            <td>{cli.ciudad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
