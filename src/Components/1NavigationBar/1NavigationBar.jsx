

import styles from './NavigationBar.module.css'

function NavigationBar({ className }) {
    return (
        <nav className={`${styles.container} ${className} `}>
<div className={styles.logo}>
  <a href="#">
    <img src="/Logo.png" alt="Logo" className={styles.logoImg} />
  </a>
</div>

       <div className={styles.nonLogoItems}>
            <a href="#">ReadMe</a>
            <a href="#">Github</a>
            <a href="#">Contact</a>
       </div>

        </nav>
    );
}

export default NavigationBar;

