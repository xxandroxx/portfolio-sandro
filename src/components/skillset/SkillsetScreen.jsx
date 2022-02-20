import React from 'react'

import { HeaderScreen } from '../header/HeaderScreen';



import { objetoImg } from '../../data/imagenes';

export const SkillsetScreen = () => {

  return (
    <div>
      <div>
        <HeaderScreen />
      </div>

      <div className='contenido-skillset'>

        <div className='contenedor-titulo'>
          <h2>Skillset</h2>
        </div>


        <section className='contenedor contenedor-skillset-img'>
          {
            objetoImg.map(img => (
              <div className='contenido-img-skillset' key={img.id}>
                <h4>{img.title}</h4>
                <img id={img.id} src={img.img} alt={img.name} />
              </div>
            ))
          }
        </section>

      </div>

    </div>
  )
}
