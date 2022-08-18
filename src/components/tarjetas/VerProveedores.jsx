import React from 'react'
import { Link } from 'react-router-dom';
import proveedor from '../../assets/proveedores.png';

export const VerProveedores = () => {
    return (

        <div className='contenido-ver-home'>
            <h4>Ver todos los Proveedores</h4>

            <div className='contenido-card-home'>
                <img src={proveedor} alt="ver" />
                <p>Aquí se pueden ver todos los proveedores registrados</p>
            </div>

            <div className='btn-card-home'>
                <Link to='proveedores/ver-proveedores'>Ver Proveedores</Link>
            </div>
        </div>
    )
}
