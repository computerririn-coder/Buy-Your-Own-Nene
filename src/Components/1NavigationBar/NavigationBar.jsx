

import styles from './NavigationBar.module.css'

function NavigationBar({ className,setShowContactsComponent  }) {
    return (
        <nav className={`${styles.container} ${className} `}>
<div className={styles.logo}>
  <a href="#">
    <img src="/Logo.png" alt="Logo" className={styles.logoImg} />
  </a>
</div>

       <div className={styles.nonLogoItems}>  

            <a href="#">Portfolio Site</a>
            <a href="https://github.com/computerririn-coder/Buy-Your-Own-Nene">Github_Project_Link</a>
            <div>
              <a href="#" className={styles.contacts} onClick={() => setShowContactsComponent(true)}>Contact</a>
            </div>
            
       </div>

        </nav>
    );
}

export default NavigationBar;

