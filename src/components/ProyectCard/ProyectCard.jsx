// import { useState } from 'react'
import { proyects } from '../../utils/Proyects';
import './ProyectCard.css'

export const ProyectCard = () => {
  // const [proyect, setProyect] = useState(proyects[0]);

  const changeProyect = (index) => {

    console.log('Indice del proyecto elegido: ' + index)
  }

  return (
    <div className='proyect-section'>
      <h2>Proyects</h2>
      <p>Here are some of the proyects where i had worked </p>
      <article className='proyect-widget'>
        <div className='proyect-list'>
          {proyects.map((proyect, index) => {
            return (
              <button key={index} className='proyect-window' onClick={(e) => {
                  e.preventDefault();
                  changeProyect(index);
                }}>
                <img src={proyect.technologies.main_language} alt="Language Image" />
                <p><span>{proyect.title}</span></p>
                
              </button>
            )
          })}
        </div>

        <div className='proyect-media'>

        </div>
      </article>    
    </div>
  )
}
