import { useState } from 'react';
import styles from './ActualCheckOut.module.css';

function ActualCheckOut() {
  return (
    <section className={styles.container}>

        <h2 className={styles.title}>Choose Options</h2>
 <div className={styles.options}>
          <label className={styles.radioRect}>Option 1
            <input type="radio" name="choice" />
          </label>
          <label className={styles.radioRect}>Option 2
            <input type="radio" name="choice" />
          </label>
          <label className={styles.radioRect}>Option 3
            <input type="radio" name="choice" />
          </label>
        </div>

      
    </section>
  );
}

export default ActualCheckOut;
