import { useState } from 'react';
import styles from './ActualCheckOut.module.css';

function ActualCheckOut() {
  const [choice, setChoice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected choice:', choice);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Which is best for you?</h2>
      <form className={styles.options} onSubmit={handleSubmit}>
        <label className={`${styles.radioRect} ${choice === 'SubStandard' ? styles.checked : ''}`}>
          <span className={styles.leftText}>
            <h3>Substandard</h3>
            <h6>Cheap But Quality</h6>
          </span>
          <span className={styles.rightText}>
            <h6>From ₱79,990</h6>
          </span>
          <input
            type="radio"
            name="choice"
            value="SubStandard"
            checked={choice === 'SubStandard'}
            onChange={(e) => setChoice(e.target.value)}
          />
        </label>

        <label className={`${styles.radioRect} ${choice === 'Standard' ? styles.checked : ''}`}>
          <span className={styles.leftText}>
            <h3>Standard</h3>
            <h6>Balanced Option</h6>
          </span>
          <span className={styles.rightText}>
            <h6>From ₱99,990</h6>
          </span>
          <input
            type="radio"
            name="choice"
            value="Standard"
            checked={choice === 'Standard'}
            onChange={(e) => setChoice(e.target.value)}
          />
        </label>

        <label className={`${styles.radioRect} ${choice === 'Premium' ? styles.checked : ''}`}>
          <span className={styles.leftText}>
            <h3>Premium</h3>
            <h6>Top Quality</h6>
          </span>
          <span className={styles.rightText}>
            <h6>From ₱149,990</h6>
          </span>
          <input
            type="radio"
            name="choice"
            value="Premium"
            checked={choice === 'Premium'}
            onChange={(e) => setChoice(e.target.value)}
          />
        </label>
      </form>
      <div className={styles.mySubmit}>
        <button type="submit">Submit</button>
      </div>
    </section>
  );
}

export default ActualCheckOut;
