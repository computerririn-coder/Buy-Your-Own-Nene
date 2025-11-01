import { use, useState } from 'react';
import styles from './ActualCheckOut.module.css';
function ActualCheckOut({ liftedSetChoice, liftedSetChoiceCuteness, showPurchaseItemComponent, setShowPurchaseItemComponent}) {
  const [choice, setChoice] = useState('');
  const [choiceCuteness, setChoiceCuteness] = useState('');

function handleSubmit(e) {
  e.preventDefault();
  liftedSetChoice(choice);
  liftedSetChoiceCuteness(choiceCuteness);
  setShowPurchaseItemComponent(true);
}

  
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
          <label
            className={`${styles.radioRect} ${
              choice === 'SubStandard' ? styles.checked : ''
            }`}
          >
            {choice === 'SubStandard' && (
              <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />
            )}

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

          <label
            className={`${styles.radioRect} ${
              choice === 'Standard' ? styles.checked : ''
            }`}
          >
            {choice === 'Standard' && (
              <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />
            )}

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

          <label
            className={`${styles.radioRect} ${
              choice === 'Premium' ? styles.checked : ''
            }`}
          >
            {choice === 'Premium' && (
              <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />
            )}

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

        {/* Option Group 2 */}
        <form className={styles.options2}>
          <label
            className={`${styles.radioRect} ${
              choiceCuteness === '50' ? styles.checked : ''
            }`}
          >
            {choiceCuteness === '50' && (
              <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />
            )}

            <span className={styles.leftText}>
              <h3>50% Cute</h3>
              <h6>Placeholder</h6>
            </span>

            <span className={styles.rightText}>
              <h6>Additional ₱1,000</h6>
            </span>

            <input
              type="radio"
              name="optionCuteness"
              value="50"
              checked={choiceCuteness === '50'}
              onChange={(e) => setChoiceCuteness(e.target.value)}
            />
          </label>

          <label
            className={`${styles.radioRect} ${
              choiceCuteness === '75' ? styles.checked : ''
            }`}
          >
            {choiceCuteness === '75' && (
              <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />
            )}

            <span className={styles.leftText}>
              <h3>75% Cute</h3>
              <h6>Placeholder</h6>
            </span>

            <span className={styles.rightText}>
              <h6>Additional ₱2,000</h6>
            </span>

            <input
              type="radio"
              name="optionCuteness"
              value="75"
              checked={choiceCuteness === '75'}
              onChange={(e) => setChoiceCuteness(e.target.value)}
            />
          </label>

          <label
            className={`${styles.radioRect} ${
              choiceCuteness === '100' ? styles.checked : ''
            }`}
          >
            {choiceCuteness === '100' && (
              <img src="/ribbon.png" alt="Ribbon" className={styles.ribbon} />
            )}

            <span className={styles.leftText}>
              <h3>100% Cute</h3>
              <h6>Placeholder</h6>
            </span>

            <span className={styles.rightText}>
              <h6>Additional ₱3,000</h6>
            </span>

            <input
              type="radio"
              name="optionCuteness"
              value="100"
              checked={choiceCuteness === '100'}
              onChange={(e) => setChoiceCuteness(e.target.value)}
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
