import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DeudoresScreen = () => {
  const [valorDolar, setValorDolar] = useState('');
    const [valorUf, setValorUf] = useState('');
    const [valorEuro, setValorEuro] = useState('');
    const [valorUtm, setValorUtm] = useState('');
    const [editar, setEditar] = useState(false);

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


    const editarDeudor = e =>{
      setEditar(true);

      console.log(editar);
    }

    return (
        <div className='contenedor-deudores'>
            <h2>Deudores</h2>

            <table className="table" style={{width: '90%'}}>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">RUT</th>
                        <th scope="col">Deuda</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>Dolar</td>
                            <td>$</td>
                            <td>{valorDolar}</td>
                            <td>USD</td>
                            <td onClick={editarDeudor}>editar</td>
                        </tr>
                        <tr>
                            <td>Euro</td>
                            <td>€</td>
                            <td>{valorEuro}</td>
                            <td>EUR</td>
                            <td>editar</td>
                        </tr>
                        <tr>
                            <td>Unidad de Fomento</td>
                            <td>UF</td>
                            <td>{valorUf}</td>
                            <td>CLF</td>
                            <td>editar</td>
                        </tr>
                        <tr>
                            <td>Unidad Tributaria Mensual</td>
                            <td>UTM</td>
                            <td>{valorUtm}</td>
                            <td>UTM</td>
                            <td>editar</td>
                        </tr> 
                </tbody>
            </table>
        </div>
    )
}

export default DeudoresScreen;
