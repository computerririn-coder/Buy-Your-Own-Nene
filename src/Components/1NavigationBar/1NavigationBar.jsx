

import styles from './NavigationBar.module.css'

function NavigationBar({ className }) {
    return (
        <nav className={`${styles.container} `}>
            <a href="#">Logo</a>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    );
}

export default NavigationBar;
