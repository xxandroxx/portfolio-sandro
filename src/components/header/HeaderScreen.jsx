import React, { useState } from 'react';
import { useEffect } from 'react';

const HeaderScreen = () => {

    const [valorDolar, setValorDolar] = useState('');
    const [valorUf, setValorUf] = useState('');
    const [valorEuro, setValorEuro] = useState('');

    const obtenerValorDolar = async () => {

        const url = 'https://mindicador.cl/api';
        const resp = await fetch(url)
        const data = await resp.json()


        setValorDolar(data.dolar.valor)
        setValorUf(data.uf.valor);
        setValorEuro(data.euro.valor);
    }

    useEffect(() => {
        obtenerValorDolar();
    }, [])


    return (
        <header className='header-container'>
            <div className='logo'>
                <h1>OSPJ-<span>Group</span> </h1>
            </div>


            <div className='tarjetas-container'>

                <div className='tarjeta-content'>
                    <h4>Valor Dolar</h4>
                    <div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-businessplan" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <ellipse cx="16" cy="6" rx="5" ry="3" />
                            <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                            <path d="M5 15v1m0 -8v1" />
                        </svg> <span>${valorDolar}</span></p>
                    </div>
                </div>
                <div className='tarjeta-content'>
                    <h4>Valor UF</h4>
                    <div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-businessplan" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <ellipse cx="16" cy="6" rx="5" ry="3" />
                            <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                            <path d="M5 15v1m0 -8v1" />
                        </svg> <span>${valorUf}</span></p>
                    </div>
                </div>
                <div className='tarjeta-content'>
                    <h4>Valor Euro</h4>
                    <div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-businessplan" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <ellipse cx="16" cy="6" rx="5" ry="3" />
                            <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                            <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                            <path d="M5 15v1m0 -8v1" />
                        </svg> <span>${valorEuro}</span></p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderScreen;
