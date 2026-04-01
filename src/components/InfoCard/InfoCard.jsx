import "./InfoCard.css"
import { FeaturedLanguage } from "../FeaturedLanguage/FeaturedLanguage"
export const InfoCard = () => {
  const languages = ['Rust', 'Laravel', 'Java', 'C++', 'Javascript', 'React', 'Blade', 'MySQL', 'MongoDB' ,'Docker'];
  return (
    <article id='about-me' className="general-info-section">
      <figure>
        <img src="assets/media/profile-picture.webp" alt="Profile Picture" />
      </figure>
      <div>
        <h1>Hi, i'm Sebati HM! </h1>
        <p>
          Im a software engineer student in my eighth semester at the UV (Universidad Veracruzana) , i'm specialized in web development both backend and frontend
          but i am open to work in other areas, i like to make software that could contribute to solving a mayor problem.
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

