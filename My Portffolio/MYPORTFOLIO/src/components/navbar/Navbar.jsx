import styles from './Navbar.module.css'

const Navbar = () => {
    
  return (
    <div className={styles.container}>
        <nav>
            <ul>
                <a href="/">
                    <li>Start</li>
                </a>
                <a href="/">
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
                <a href="/">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar