import React from 'react'
import { HeaderScreen } from '../header/HeaderScreen'

export const AboutmeScreen = () => {
  return (
    <div>
      <div>
        <HeaderScreen />
      </div>
      <div className='contenedor-titulo'>
        <h2>About Me</h2>
      </div>


      <div className='contenedor-about-text'>
        <p>
          Hi, I'm Sandro Ovando, a very passionate and professional self-taught front-end developer.
          My interests have always been software development (web development and game development).
          These last years I have dedicated myself to the study of front-end technologies along with my university degree
          (computer engineering). I have worked with React Js for the creation and maintenance of company websites.
        </p>
      </div>
    </div>
  )
}
