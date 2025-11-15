

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
            <a href="#" className='text-red-500'>Portfolio Site</a>
            <a href="https://github.com/computerririn-coder/Buy-Your-Own-Nene">Github_Project_Link</a>
            <a href="#" className="bg-black">Contact</a>
       </div>

        </nav>
    );
}

export default NavigationBar;

