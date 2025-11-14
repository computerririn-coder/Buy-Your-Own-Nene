import styles from './Title.module.css';

function Title({ className }) {
  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.textContainer}>
        <div>
                  <span>New!</span>
        <h1>Nene Kusanagi</h1>
        <span>From ₱999,999</span>
        </div>
              <div className={styles.cartContainer}>
        <p>placeholderCart</p>
      </div>
      </div>

    </section>
  );
}

export default Title;
