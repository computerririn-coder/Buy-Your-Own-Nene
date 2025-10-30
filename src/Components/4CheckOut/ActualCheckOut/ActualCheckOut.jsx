import { useState } from 'react';
import styles from './ActualCheckOut.module.css';

function ActualCheckOut({ choiceQuality, choiceCuteness }) {
  // fix: use different state names to avoid shadowing props
  const [selectedQuality, setSelectedQuality] = useState(choiceQuality || '');
  const [selectedCuteness, setSelectedCuteness] = useState(choiceCuteness || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Quality:', selectedQuality);
    console.log('Selected Cuteness Level:', selectedCuteness);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Which is best for you?</h1>

      <div className={styles.title2}>
        <h3>Quality</h3>
        <h3>Cuteness</h3>
      </div>

      <div className={styles.formContainer}>
        {/* Option Group 1 */}
        <form className={styles.options1}>
          <label className={`${styles.radioRect} ${selectedQuality === 'SubStandard' ? styles.checked : ''}`}>
            {selectedQuality === 'SubStandard' && <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />}
            <span className={styles.leftText}>
              <h3>Substandard</h3>
              <h6>Cheap But Quality</h6>
            </span>
            <span className={styles.rightText}><h6>From ₱79,990</h6></span>
            <input
              type="radio"
              name="choiceQuality"
              value="SubStandard"
              checked={selectedQuality === 'SubStandard'}
              onChange={(e) => setSelectedQuality(e.target.value)}
            />
          </label>

          <label className={`${styles.radioRect} ${selectedQuality === 'Standard' ? styles.checked : ''}`}>
            {selectedQuality === 'Standard' && <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />}
            <span className={styles.leftText}>
              <h3>Standard</h3>
              <h6>Balanced Option</h6>
            </span>
            <span className={styles.rightText}><h6>From ₱99,990</h6></span>
            <input
              type="radio"
              name="choiceQuality"
              value="Standard"
              checked={selectedQuality === 'Standard'}
              onChange={(e) => setSelectedQuality(e.target.value)}
            />
          </label>

          <label className={`${styles.radioRect} ${selectedQuality === 'Premium' ? styles.checked : ''}`}>
            {selectedQuality === 'Premium' && <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />}
            <span className={styles.leftText}>
              <h3>Premium</h3>
              <h6>Top Quality</h6>
            </span>
            <span className={styles.rightText}><h6>From ₱149,990</h6></span>
            <input
              type="radio"
              name="choiceQuality"
              value="Premium"
              checked={selectedQuality === 'Premium'}
              onChange={(e) => setSelectedQuality(e.target.value)}
            />
          </label>
        </form>

        {/* Option Group 2 */}
        <form className={styles.options2}>
          <label className={`${styles.radioRect} ${selectedCuteness === '50' ? styles.checked : ''}`}>
            {selectedCuteness === '50' && <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />}
            <span className={styles.leftText}>
              <h3>50% Cute</h3>
              <h6>Placeholder</h6>
            </span>
            <span className={styles.rightText}><h6>Additional ₱1,000</h6></span>
            <input
              type="radio"
              name="optionCuteness"
              value="50"
              checked={selectedCuteness === '50'}
              onChange={(e) => setSelectedCuteness(e.target.value)}
            />
          </label>

          <label className={`${styles.radioRect} ${selectedCuteness === '75' ? styles.checked : ''}`}>
            {selectedCuteness === '75' && <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />}
            <span className={styles.leftText}>
              <h3>75% Cute</h3>
              <h6>Placeholder</h6>
            </span>
            <span className={styles.rightText}><h6>Additional ₱2,000</h6></span>
            <input
              type="radio"
              name="optionCuteness"
              value="75"
              checked={selectedCuteness === '75'}
              onChange={(e) => setSelectedCuteness(e.target.value)}
            />
          </label>

          <label className={`${styles.radioRect} ${selectedCuteness === '100' ? styles.checked : ''}`}>
            {selectedCuteness === '100' && <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />}
            <span className={styles.leftText}>
              <h3>100% Cute</h3>
              <h6>Placeholder</h6>
            </span>
            <span className={styles.rightText}><h6>Additional ₱3,000</h6></span>
            <input
              type="radio"
              name="optionCuteness"
              value="100"
              checked={selectedCuteness === '100'}
              onChange={(e) => setSelectedCuteness(e.target.value)}
            />
          </label>
        </form>
      </div>

      <div className={styles.mySubmit}>
        <button type="submit" onClick={handleSubmit} className={styles.mySubmit}>
          Purchase
        </button>
      </div>
    </section>
  );
}

export default ActualCheckOut;
