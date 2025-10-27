import styles from './Title.module.css'






function Title({ className }) {
    return (
        <section className={`${styles.container} ${className}`}>
            <div className={styles.textContainer}>
                     <span>New!</span>
         <h1>Nene Kusanagi</h1>
         <span>From ₱999,999</span>
</div>
        </section>
    );
}

export default Title;
