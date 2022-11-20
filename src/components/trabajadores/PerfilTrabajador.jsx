import React from 'react'

export const PerfilTrabajador = () => {
    return (
        <div className='contenedor-perfil-trabajador'>

            <div className='contenedor-titulo-foto-trabajador'>
                <div className='titulo-perfil-trabajador'>
                    <h2>Nombre trabajador</h2>
                </div>

                <div className='foto-perfil-trabajador'>
                    <img src="https://static.ar13.cl/sites/default/files/styles/large_body/public/inline-images/2019-08/67331518_148258059602264_4403465109594903130_n.jpg.jpeg?itok=R068kMEE" alt="foto-perfil" />
                </div>
            </div>

            <div className='contenedor-informacion-personal-trabajador'>
                 <h4>Información personal</h4>

                <form className='contenedor-formulario-perfil-trabajador'>

                    <div>
                        <input type="text" value="Nombre" />
                    </div>

                    <div>
                        <input type="text" value="Apellido" />
                    </div>
                    <div>
                        <input type="text" value="RUT" />
                    </div>
                    <div>
                        <input type="text" value="Nacionalidad" />
                    </div>
                    <div>
                        <input type="text" value="Domicilio" />
                    </div>
                    <div>
                        <input type="text" value="Teléfono" />
                    </div>
                </form>
            </div>

            <div className='contenedor-licencias'>
                <h4>Licencias</h4>

                <table className="table table-licencia">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">RUT</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Licencia</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>RUT</td>
                            <td>Teléfono</td>
                            <td className='ver-banco-popup'>Ver
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="2" />
                                    <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                </svg>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className='contenedor-vacaciones'>
                <h4>Vacaciones</h4>

                <table className="table table-vacaciones">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">RUT</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Fecha de inicio</th>
                            <th scope="col">Fecha de Término</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>RUT</td>
                            <td>Teléfono</td>
                            <td>13/09/2022</td>
                            <td>13/10/2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='contenedor-horas-extra'>
                <h4>Horas Extra</h4>

                <table className="table table-horas-extra">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">RUT</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Cantidad de horas extra</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>RUT</td>
                            <td>Teléfono</td>
                            <td>Septiembre</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className='contenedor-bonos'>
                <h4>Bonos</h4>

                <table className="table table-bonos">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">RUT</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Tipo de bonos</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>RUT</td>
                            <td>Teléfono</td>
                            <td>Aguinaldo</td>
                           
                           
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className='contenedor-ausencias'>
                <h4>Ausencias</h4>

                <table className="table table-ausencias">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">RUT</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Fecha ausencia</th>
                            <th scope="col">Motivo</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>RUT</td>
                            <td>Teléfono</td>
                            <td>11/20/2022</td>
                            <td>Médico</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
