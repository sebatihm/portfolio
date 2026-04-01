import { useState } from 'react';
import './App.css'
import { CertificationList } from './components/CertificationsList/CertificationList';
import { InfoCard } from './components/InfoCard/InfoCard'
import { ProyectCard } from './components/ProyectCard/ProyectCard';

function App() {
  const [open, setOpen] = useState(false);

  const dropdown = (e) => {
    e.preventDefault();
    console.log('pene')
  };

  return (
    <>
      <nav className='main-navbar'>
        <button onClick={() => setOpen(true)} className='phone'>
          <img className='main-navbar-img' src="/assets/icons/dev.png" alt="menu" />
        </button>

        <img className='no-phone main-navbar-img' src="/assets/icons/dev.png" alt="logo" />

        <a className='no-phone' href="#about-me">About Me</a>
        <a className='no-phone' href="#projects">Projects</a>
        <a className="no-phone" href="#certifications">Certificates</a>
        <a className="no-phone" href="#contact">Contact Me</a>
      </nav>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Sliding Menu */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

        <a href="#about-me" onClick={() => setOpen(false)}>About Me</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#certifications" onClick={() => setOpen(false)}>Certificates</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact Me</a>
      </div>
    
      <article className='main'>        

        <InfoCard/>

        <ProyectCard/>

        <CertificationList/>

      </article>

      <footer id='contact' className='footer'>

        <p className='socials-text'><strong>You can contact me here!</strong></p>

        <div className='icons-container'>
          <a href="https://github.com/sebatihm">
            <img src="/assets/icons/technologies/github.svg" alt="github" />
          </a>

          <a href="https://www.linkedin.com/in/sebasti%C3%A1n-de-jes%C3%BAs-hern%C3%A1ndez-montero-933776361/">
            <img src="/assets/icons/technologies/linkedin.svg" alt="linkedin" />
          </a>

          <a href="mailto:sebashermon003@gmail.com">
            <img src="/assets/icons/technologies/email.png" alt="mail" />
          </a>
        </div>

        <p><strong>SebatiHM 2026</strong></p>

      </footer>
    </>
  )
}

export default App
