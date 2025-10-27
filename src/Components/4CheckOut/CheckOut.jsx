import ActualCheckOut from './ActualCheckOut/ActualCheckOut.jsx';
import styles from './CheckOut.module.css'



function CheckOut({ className }) {
    return ( 
        <section className={`${styles.container} ${className}`}>
           <ActualCheckOut/>
        </section>
    );
}

export default CheckOut;
