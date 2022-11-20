import React, { useEffect, useState } from 'react'

export const DivisasScreen = () => {
    const [valorDolar, setValorDolar] = useState('');
    const [valorUf, setValorUf] = useState('');
    const [valorEuro, setValorEuro] = useState('');
    const [valorUtm, setValorUtm] = useState('');

    const obtenerValorDolar = async () => {

        const url = 'https://mindicador.cl/api';
        const resp = await fetch(url)
        const data = await resp.json()

        console.log(data);


        setValorDolar(data.dolar.valor)
        setValorUf(data.uf.valor);
        setValorEuro(data.euro.valor);
        setValorUtm(data.utm.valor);
    }

    useEffect(() => {
        obtenerValorDolar();
    }, [])

    return (
        <div className='divisas-container'>
            <h2>Divisas</h2>

            <table className="table" style={{width: '90%'}}>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Símbolo</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Código</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Dolar</td>
                            <td>$</td>
                            <td>{valorDolar}</td>
                            <td>USD</td>
                        </tr>
                        <tr>
                            <td>Euro</td>
                            <td>€</td>
                            <td>{valorEuro}</td>
                            <td>EUR</td>
                        </tr>
                        <tr>
                            <td>Unidad de Fomento</td>
                            <td>UF</td>
                            <td>{valorUf}</td>
                            <td>CLF</td>
                        </tr>
                        <tr>
                            <td>Unidad Tributaria Mensual</td>
                            <td>UTM</td>
                            <td>{valorUtm}</td>
                            <td>UTM</td>
                        </tr> 
                </tbody>
            </table>
        </div>
    )
}
