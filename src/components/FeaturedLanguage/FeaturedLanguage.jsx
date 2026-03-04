import './FeaturedLanguage.css'

export const FeaturedLanguage = ({name}) => {
  return (
    <p className="language">
      <span >
        {name}
      </span>
    </p>
  )
}