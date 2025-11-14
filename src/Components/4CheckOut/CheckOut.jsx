import { useState } from 'react';
import ActualCheckOut from './ActualCheckOut/ActualCheckOut.jsx';
import styles from './CheckOut.module.css'



function CheckOut({ className, liftedSetChoiceQuality, liftedSetChoiceCuteness, showPurchaseItemComponent, setShowPurchaseItemComponent }) {

    
    return ( 
        <section className={`${styles.container} ${className}`}>
           <ActualCheckOut liftedSetChoiceQuality={liftedSetChoiceQuality} liftedSetChoiceCuteness={liftedSetChoiceCuteness} showPurchaseItemComponent={showPurchaseItemComponent} setShowPurchaseItemComponent={setShowPurchaseItemComponent}/>
        </section>
    );
}

export default CheckOut;
