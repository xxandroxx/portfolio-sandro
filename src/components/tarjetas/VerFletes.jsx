import React from 'react'
import { Link } from 'react-router-dom';
import flete from '../../assets/flete.png';


export const VerFletes = () => {
    return (
        <div className='contenido-ver-home'>
            <h4>Ver todos los fletes</h4>

            <div className='contenido-card-home'>
                <img src={flete} alt="ver" />
                <p>Aquí se pueden ver todos los fletes registrados</p>
            </div>

            <div className='btn-card-home'>
                <Link to='fletes/ver-fletes'>Ver Fletes</Link>
            </div>
        </div>
    )
}
