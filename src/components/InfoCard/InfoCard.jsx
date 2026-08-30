import "./InfoCard.css"
import { FeaturedLanguage } from "../FeaturedLanguage/FeaturedLanguage"
export const InfoCard = () => {
  const languages = ['Rust', 'Laravel', 'Java', 'C++', 'Javascript', 'React', 'Blade', 'MySQL', 'Microsoft SQL Server' ,'Mongo DB' ,'Docker', 'Nest JS', 'Springboot'];
  return (
    <article id='about-me' className="general-info-section">
      <figure>
        <img src="assets/media/pfp.jpeg" alt="Profile Picture" />
      </figure>
      <div>
        <h1>Hi, i'm Sebati HM! </h1>
        <p>
          Software Engineer focused on backend and web development, experienced in building REST APIs, business applications, and scalable solutions. 
          Passionate about software engineering, problem-solving, and building reliable software that addresses real-world challenges.
        </p>
        <p>
          I have experience working with some technologies:
        </p>
        <div className="languages-container">
          {
            languages.map((language, index) => {
              return (
                <FeaturedLanguage key={index} name={language}/>
              )
            })
          }
        </div>
      </div>
    </article>
  )
}

