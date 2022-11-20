import React from 'react'
import { Link } from 'react-router-dom'

export const VerTrabajadores = () => {
    return (
        <div>


            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">RUT</th>
                        <th scope="col">Nacionalidad</th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Perfil</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>RUT</td>
                        <td>Nacionalidad</td>
                        <td>Domicilio</td>
                        <td>Teléfono</td>
                        <td className='ver-banco-popup'>
                            <Link to="/trabajador/perfil-trabajador">Ver
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="2" />
                                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                </svg>
                            </Link>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div >
    )
}
