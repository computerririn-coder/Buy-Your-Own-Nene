import styles from './Title.module.css';

function Title({ className, setShowPurchaseItemComponentCart }) {
  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.textContainer}>
        <div>
                  <span>New!</span>
        <h1>Nene Kusanagi</h1>
        <span>From ₱999,999</span>
        </div>
<div className={styles.cartContainer} onClick={() => setShowPurchaseItemComponentCart(true)}>
  🛒<br></br> <h5>Cart</h5>
</div>

      </div>

    </section>
  );
}

export default Title;
