import styles from './Contacts.module.css';



function Contacts({setShowContactsComponent}) {
    return (
        <section className={styles.container}>
                          <button
                className={styles.closeBtn}
                onClick={() => setShowContactsComponent(false)}
              >
                ×
              </button>
            <div className={styles.header}>
                <img
                    src="/logo.png"
                    alt="Logo"
                    className={styles.logo}
                />
                <h2 className={styles.title}>Contacts</h2>
            </div>

            <div className={styles.links}>
                <a href="https://www.facebook.com/artagnan.gutierrez.2025" target="_blank">
                    Facebook: Artagnan Gutierrez<br />
                    <span>Link: https://www.facebook.com/artagnan.gutierrez.2025</span>
                </a>

                <a href="https://www.linkedin.com/in/gabriel-gutierrez-a87565372/" target="_blank">
                    LinkedIn<br />
                    <span>Link: https://www.linkedin.com/in/gabriel-gutierrez-a87565372/</span>
                </a>

                <a href="https://github.com/computerririn-coder" target="_blank">
                    GitHub<br />
                    <span>Link: https://github.com/computerririn-coder</span>
                </a>
            </div>

            <div className={styles.contactNumber}>
                <span>Contact: </span>
                <strong>+09560072791</strong>
            </div>
        </section>
    );
}

export default Contacts;
