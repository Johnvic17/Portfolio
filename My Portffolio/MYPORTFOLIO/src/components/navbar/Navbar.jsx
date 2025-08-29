import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          {/* li's from navbar */}
          <a href="/">
            <li>Start</li>
          </a>
          <a href="/about">
            <li>About me</li>
          </a>
          <a href="/">
            <li>Tech Stack</li>
          </a>
          <a href="/">
            <li>Portfolio</li>
          </a>
          <a href="/">
            <li>Experience</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
