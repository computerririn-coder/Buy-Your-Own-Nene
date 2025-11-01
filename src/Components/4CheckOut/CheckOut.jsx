import { useState } from 'react';
import ActualCheckOut from './ActualCheckOut/ActualCheckOut.jsx';
import styles from './CheckOut.module.css'



function CheckOut({ className, liftedSetChoice, liftedSetChoiceCuteness, showPurchaseItemComponent, setShowPurchaseItemComponent }) {

    
    return ( 
        <section className={`${styles.container} ${className}`}>
           <ActualCheckOut liftedSetChoice={liftedSetChoice} liftedSetChoiceCuteness={liftedSetChoiceCuteness} showPurchaseItemComponent={showPurchaseItemComponent} setShowPurchaseItemComponent={setShowPurchaseItemComponent}/>
        </section>
    );
}

export default CheckOut;
