import React from 'react'
import { HeaderScreen } from '../header/HeaderScreen'

import { objetoImgCertificates } from '../../data/imagenes'

export const CertificatesScreen = () => {
  return (
    <div>
      <div>
        <HeaderScreen />
      </div>

      <div className='contenedor-titulo titulo-certificates'>
        <h2>Certificates</h2>
      </div>


      <section className='contenedor-skillset-img contenedor-section-certificates'>
        {
          objetoImgCertificates.map(certificate => (
            <div className='contenido-img-skillset contenido-certificates-img' key={certificate.id}>
              <h4>{certificate.title}</h4>
              <img id={certificate.id} src={certificate.img} alt={certificate.name} />
            </div>
          ))
        }
      </section>
    </div>
  )
}
