import { useReducer } from "react";
import styles from "./PurchaseItem.module.css";

// Reducer setup
const initialState = { value: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "BACK":
      return { value: 1 };
    case "CANCEL":
      return { value: 2 };
    case "PURCHASE":
      return { value: 3 };
    default:
      return state;
  }
}

function PurchaseItem({ liftedChoice, liftedChoiceCuteness }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const randomNum = Math.floor(Math.random() * 3) + 1;
  const image = `/ImageSliderImages/ImageSlider1Images/Slider1Image${randomNum}.jpg`;

  const price =
    (liftedChoice === "SubStandard"
      ? 79990
      : liftedChoice === "Standard"
      ? 99990
      : liftedChoice === "Premium"
      ? 149990
      : 0) +
    (liftedChoiceCuteness === "50%"
      ? 1000
      : liftedChoiceCuteness === "75%"
      ? 2000
      : liftedChoiceCuteness === "100%"
      ? 3000
      : 0);

  return (
    
    <section className={styles.container}>
      <h1 className={styles.title}>Check Out?</h1>

      <div className={styles.imagePlaceholder}>
        <img src={image} alt="" />
      </div>

      <p className={styles.itemName}>Quality: {liftedChoice}</p>
      <p className={styles.itemVariation}>Cuteness: {liftedChoiceCuteness}</p>
      <p className={styles.itemPrice}>Price: {price}</p>

      {/*Placeholder*/}
      <p style={{ color: "black" }}>Placeholder value: {state.value}</p>

      <div className={styles.buttonGroup}>
        <button
          className={styles.backBtn}
          onClick={() => dispatch({ type: "BACK" })}
        >
          Back
        </button>
        <button
          className={styles.cancelBtn}
          onClick={() => dispatch({ type: "CANCEL" })}
        >
          Cancel
        </button>
        <button
          className={styles.purchaseBtn}
          onClick={() => dispatch({ type: "PURCHASE" })}
        >
          Purchase
        </button>
      </div>
    </section>
  );
}

export default PurchaseItem;
