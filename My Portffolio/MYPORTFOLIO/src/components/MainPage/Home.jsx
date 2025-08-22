import styles from "./Home.module.css";

//cube
import MagicCube from "../Cube/Cube";

const Home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <h1>
          João Victor <br />
          C. Fernandes
        </h1>
        <p>front-end developer and IT student</p>
        <a href="//">
          <button className={styles.btn}>Download CV</button>
        </a>
      </div>
      <div className={styles["cube-container"]} id="language" >    
        {/* Cube */}
        <MagicCube />
      </div>
    </div>
  );
};

export default Home;
