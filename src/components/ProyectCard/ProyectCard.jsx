// import { useState } from 'react'
import { proyects } from '../../utils/Proyects';
import './ProyectCard.css'

export const ProyectCard = () => {
  // const [proyect, setProyect] = useState(proyects[0]);
  return (
    <div className='proyect-section'>
      <h2>Proyects</h2>
      <p>Here are some of the proyects where i had worked </p>
      <article className='proyect-widget'>
        <div className='proyect-list'>
          {proyects.map((proyect, index) => {
            return (
              <div key={index} className='proyect-window'>
                {proyect.title}
              </div>
            )
          })}
        </div>

        <div className='proyect-media'>

        </div>
      </article>    
    </div>
  )
}
