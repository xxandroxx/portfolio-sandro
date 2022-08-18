import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ValidationLogin } from './ValidationLogin'

export const LoginScreen = () => {


    const [validationEmail, setValidationEmail] = useState(false);
    const [validationPassword, setValidationPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (email != 'sandro' || password != '12345678') {
            setValidationEmail(true);


        } else {
            setValidationEmail(false);

        }
    }

    return (
        <div className='login-container'>

            <header className='header-login'>
                <h1>Inicio de Sesión</h1>
            </header>


            <form onSubmit={handleForm} className='login-form'>
                <div className='login-email'>
                    <label>Correo:</label>
                    <input type="text" onChange={handleEmail} />
                </div>

                <div className='login-password'>
                    <label>Contraseña:</label>
                    <input type="password" onChange={handlePassword} />
                </div>

                <div className='btn-login'>
                   <Link to='/'>Iniciar Sesión</Link>
                </div>
            </form>


            {validationEmail && <ValidationLogin />}
        </div>
    )
}
