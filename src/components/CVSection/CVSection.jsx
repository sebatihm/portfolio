import "./CVSection.css";

export const CVSection = () => {
  return (
    <article className="section">
      <h2>Resume</h2>
      <p>Download my CV in your preferred language</p>

      <div className="cv-container">
        <a href="assets/files/CV/CV_ENG.pdf" download>English Version</a>
        <a href="assets/files/CV/CV_ESP.pdf" download>Spanish Version</a>
      </div>
    </article>
  );
}