import styles from "./Home.module.css";

//cube
import MagicCube from "../../components/Cube/Cube";
import { useState } from "react";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles.hero}>
        <div className={styles.info}>
          <div>
            <h1>
              João Victor <br />
              C. Fernandes
            </h1>
            <p>front-end developer and IT student</p>
            <a href="/">
              <button
                className={styles.btn}
                onClick={() => setIsClicked(!isClicked)}
              >
                {isClicked ? "See you later!" : "Download CV"}
              </button>
            </a>
          </div>
          <div className={styles["cube-container"]} id="language">
            {/* Cube */}
            <MagicCube />
          </div>
        </div>
      </div>
  );
};

export default Home;
