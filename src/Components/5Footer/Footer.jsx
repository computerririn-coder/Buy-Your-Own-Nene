





import styles from './Footer.module.css';

function Footer({ className }) {
  return (
    // Main footer container
    <footer className={`${styles.container} ${className}`}>

      {/* Top section of the footer containing branding, navigation, and social links */}
      <div className={styles.itemContainer}>

  
        {/* Navigation links (left section) */}
        <nav className={styles.leftSide}>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

              {/* Branding: Your name and profession */}
        <div className={styles.brand}>
          <h3>Gabriel P. Gutierrez</h3>
          <h4>Front-End Web Developer</h4>
        </div>
        

        {/* Social / external links (right section) */}
        <div className={styles.rightSide}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>

      </div>

   

    </footer>
  );
}

export default Footer;
