import styles from "./Home.module.css";

//cube
import MagicCube from "../../components/Cube/Cube";
import { useEffect, useState } from "react";

const Home = () => {

  // useEffect to give effect for text "about me"
  const [text, setText] = useState("");
  const textAboutMe = "I'm Front-End developer and IT student"; // textAboutMe != text
  const speed = 100; // velocity in ms

  useEffect(() => {
    let i = 0;
    let timer;

    function typeWriter() {
      if (i < textAboutMe.length) {
        setText((prev) => prev + textAboutMe.charAt(i));
        i++;
        timer = setTimeout(typeWriter, speed);
      }
    }

    typeWriter();

    return () => clearTimeout(timer); // to avoid loops
  }, []);

  // useState for change text button with onClick
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <div>
          <h1>
            João Victor <br />
            C. Fernandes
          </h1>
          {/* dinamic text about me */}
          <p style={{fontFamily: "monospace", fontSize: "20px"}}>
            {text} 
            <span className={styles.cursor}>|</span>
          </p>
          {/* button for download my CV */}
          <a href="/">
            <button
              className={styles.btn}
              onClick={() => setIsClicked(!isClicked)}
            >
              {isClicked ? "See you later!" : "Download CV"}
            </button>
          </a>
        </div>
        {/* Magic cube div */}
        <div className={styles["cube-container"]} id="language">
          {/* Cube */}
          <MagicCube />
        </div>
      </div>
    </div>
  );
};

export default Home;
