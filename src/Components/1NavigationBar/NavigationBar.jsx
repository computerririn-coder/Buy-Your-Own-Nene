

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
            <a href="#">Portfolio Site</a>
            <a href="https://github.com/computerririn-coder/Buy-Your-Own-Nene">Github_Project_Link</a>
            <a href="#" className="flex items-center justify-center gap-1 hover:text-green-200  bg-blue-400 rounded-3xl w-25 h-10 border-2 border-white/75 hover:border-purple-800">Contact</a>
       </div>

        </nav>
    );
}

export default NavigationBar;

