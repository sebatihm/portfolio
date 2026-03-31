import './CertificationList.css'
import { Certifications } from '../../utils/Certifications'
export const CertificationList = () => {
  
  return (
    <article id='certifications' className='section'>
      <h2>Certificates</h2>
      <p>In this section you can know more about the certifications and awards that i have obtained along the years</p>
      
      <div className='certificate-container'>
        {
          Certifications.map((certification, index) => {
            return (
                    <a
                      key={index} 
                      href={certification.path}
                      download={certification.path.startsWith('/assets')}
                      target='_blank'
                      className='certificate-a'
                    >
                      <article className="card">
                        <img src="/assets/icons/certifications_previews/certificate_symbol.svg" className='card-image' alt="" />
                        <div className='card-body'>
                            <h3>{certification.title}</h3>
                            <p>{certification.description}</p>
                        </div>
                      </article>
                    </a>
              
            )
          })
        }
      </div>
    </article>
  )
}