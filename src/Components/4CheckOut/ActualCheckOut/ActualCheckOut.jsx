import { use, useState } from 'react';
import styles from './ActualCheckOut.module.css';

function ActualCheckOut({ liftedSetChoiceQuality, liftedSetChoiceCuteness, setShowPurchaseItemComponent }) {
  const [choiceQuality, setChoiceQuality] = useState('');
  const [choiceCuteness, setChoiceCuteness] = useState('None');

  function handleSubmit(e) {
    e.preventDefault();
    liftedSetChoiceQuality(choiceQuality);
    liftedSetChoiceCuteness(choiceCuteness);
    setShowPurchaseItemComponent(true);
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Which is best for you?</h1>

      <div className={styles.title2}>
        <h3 className={styles.qualityText}>Quality</h3>
        <h3 className={styles.cutenessText}>Cuteness</h3>
      </div>

      <div className={styles.formContainer}>
        {/* Option Group 1 */}
        <form className={styles.options1}>
          <label
            className={`${styles.radioRect} ${choiceQuality === 'SubStandard' ? styles.checked : ''}`}
          >
            {choiceQuality === 'SubStandard' && (
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
              name="choice1"
              value="SubStandard"
              checked={choiceQuality === 'SubStandard'}
              onChange={(e) => setChoiceQuality(e.target.value)}
              onClick={() => setChoiceQuality(prev => (prev === 'SubStandard' ? '' : 'SubStandard'))}
            />
          </label>

          <label
            className={`${styles.radioRect} ${choiceQuality === 'Standard' ? styles.checked : ''}`}
          >
            {choiceQuality === 'Standard' && (
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
              name="choice1"
              value='Standard'
              checked={choiceQuality === 'Standard'}
              onChange={(e) => setChoiceQuality(e.target.value)}
              onClick={() => setChoiceQuality(prev => (prev === 'Standard' ? '' : 'Standard'))}
            />
          </label>

          <label
            className={`${styles.radioRect} ${choiceQuality === 'Premium' ? styles.checked : ''}`}
          >
            {choiceQuality === 'Premium' && (
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
              name="choice1"
              value="Premium"
              checked={choiceQuality === 'Premium'}
              onChange={(e) => setChoiceQuality(e.target.value)}
              onClick={() => setChoiceQuality(prev => (prev === 'Premium' ? '' : 'Premium'))}
            />
          </label>
        </form>

        {/* Option Group 2 */}
       <form className={styles.options2}>
  <label
    className={`${styles.radioRect} ${choiceCuteness === '50%' ? styles.checked : ''}`}
  >
    {choiceCuteness === '50%' && (
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
      name="choice2"
      value="50%"
      checked={choiceCuteness === '50%'}
      onChange={(e) => setChoiceCuteness(e.target.value)}
      onClick={() => setChoiceCuteness(prev => (prev === '50%' ? '' : '50%'))}
    />
  </label>

  <label
    className={`${styles.radioRect} ${choiceCuteness === '75%' ? styles.checked : ''}`}
  >
    {choiceCuteness === '75%' && (
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
      name="choice2"
      value="75%"
      checked={choiceCuteness === '75%'}
      onChange={(e) => setChoiceCuteness(e.target.value)}
      onClick={() => setChoiceCuteness(prev => (prev === '75%' ? '' : '75%'))}
    />
  </label>

  <label
    className={`${styles.radioRect} ${choiceCuteness === '100%' ? styles.checked : ''}`}
  >
    {choiceCuteness === '100%' && (
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
      name="choice2"
      value="100%"
      checked={choiceCuteness === '100%'}
      onChange={(e) => setChoiceCuteness(e.target.value)}
      onClick={() => setChoiceCuteness(prev => (prev === '100%' ? '' : '100%'))}
    />
  </label>
</form>
      </div>

      <div className={styles.mySubmit}>
        <button type="submit" onClick={handleSubmit} className={styles.mySubmitButton}>
          Purchase
        </button>
      </div>
    </section>
  );
}

export default ActualCheckOut;
