import styles from './About.module.css'
import MagicCube from "../../components/Cube/Cube";

const About = () => {
  const handleRedirect = () => {
    window.open("https://www.linkedin.com/in/jo%C3%A3o-victor-cardozo-fernandes/");
  }

  return (
    <div className={styles.about}>
        <img src="/src/assets/me.jpg" alt="image from me" className={styles.img} onClick={handleRedirect}/>
        <div style={{marginTop: "2em"}}>
          <h1 className={styles.title}>Want to know more about me?</h1>
          <span className={styles.span}>João Victor - Rio de Janeiro</span>
          <h2 className={styles.text}>
             I am a Front-End Developer and an Information Systems<br/> undergraduate student, passionate about technology<br/> since the age of 10. Technology has consistently played<br/> a significant role in my life, and I strive every day to<br/> enhance my knowledge and skills—whether through <br/>online courses, academic studies, hands-on practice,<br/> or emerging tools such as AI. This portfolio is still<br/> in its early stages and will continue to evolve over<br/> time. Thank you for visiting, and let’s build something<br/> great together.
          </h2>
          <img src="/src/assets/grid.png" className={styles.gridImg}/>
          <img src="/src/assets/grid.png" className={styles.gridImg2}/>
          <img src="/src/assets/grid.png" className={styles.gridImg3}/>
        </div>

    </div>
  )
}

export default About