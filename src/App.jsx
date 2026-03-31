import './App.css'
import { CertificationList } from './components/CertificationsList/CertificationList';
import { InfoCard } from './components/InfoCard/InfoCard'
import { ProyectCard } from './components/ProyectCard/ProyectCard';

function App() {

  const dropdown = (e) => {
    e.preventDefault();
    console.log('pene')
  };

  return (
    <>
      <nav className='main-navbar'>
        <button onClick={dropdown} className='phone'>
          <img className='main-navbar-img' src="../public/assets/icons/dev.png" alt="test" />
        </button>
        <img className='no-phone main-navbar-img' src="../public/assets/icons/dev.png" alt="test" />
        <a className='no-phone' href="https://github.com/sebatihm">SebatiHM</a>
        <a className='no-phone' href="https://www.linkedin.com/in/sebasti%C3%A1n-de-jes%C3%BAs-hern%C3%A1ndez-montero-933776361/">LinkedIn</a>
      </nav>
    
      <article className='main'>        

        <InfoCard/>

        <ProyectCard/>

        <CertificationList/>

      </article>
    </>
  )
}

export default App
