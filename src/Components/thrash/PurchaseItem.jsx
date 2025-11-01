import styles from './PurchaseItem.module.css'

function PurchaseItem() {
    return (
        <section className={styles.purchaseContainer}>
            <h1 className={styles.title}>Check Out?</h1>
            
            <div className={styles.imagePlaceholder}>Image Preview</div>
            
            <p className={styles.itemName}>Quality: placeholder</p>
            <p className={styles.itemVariation}>Cuteness: placeholder</p>
            <p className={styles.itemPrice}>Price:placeholder</p>

            <div className={styles.buttonGroup}>
                <button className={styles.cancelBtn}>Cancel</button>
                <button className={styles.purchaseBtn}>Purchase</button>
            </div>
        </section>
    )
}

export default PurchaseItem;
