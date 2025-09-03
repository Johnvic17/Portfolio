import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <h1>Send a message =)</h1>
        <div className={styles.contactBackground}>
          <span className={styles.span}>Name</span>
          <input type="text" name="" className={styles.name} />
          <span className={styles.span}>Phone</span>
          <input type="text" name="" className={styles.topic} />
          <span className={styles.span}>Email</span>
          <input type="text" name="" className={styles.topic} />
          <span className={styles.span}>Message</span>
          <input type="text" name="" className={styles.message} />
          <button className="btn">Send</button>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.messageContact}>
          <h1 className={styles.title}>Contact</h1>
          <span className={styles.span}>
            Follow me for more projects on my <br />
            github and topics about me on my social networks.
          </span>
        </div>
        <div className={styles.contact}>
          <div>
            <img
              src="https://icons.iconarchive.com/icons/icons8/ios7/256/Logos-Instagram-icon.png"
              className={styles.svg}
            />
            <a
              href="https://www.instagram.com/dev.joaovic/"
              className={styles.instagram}
            >
              Instagram
            </a>
          </div>
          <div>
            <img
              src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Mail-icon.png"
              alt=""
              className={styles.svg}
            />
            <a
              href="mailto:fernandesjoaovictor836@gmail.com"
              className={styles.email}
            >
              Email
            </a>
          </div>
          <div>
            <img
              src="https://icons.iconarchive.com/icons/iconoir-team/iconoir/256/github-icon.png"
              className={styles.svg}
            />
            <a href="https://github.com/Johnvic17" className={styles.github}>
              Github
            </a>
          </div>
          <div>
            <img
              src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Linkedin-icon.png"
              className={styles.svg}
            />
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-victor-cardozo-fernandes-508a612a7/"
              className={styles.linkedin}
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
