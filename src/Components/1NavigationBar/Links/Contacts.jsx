import { useReducer } from "react";
import styles from "./PurchaseItem.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "BACK":
      action.setShowPurchaseItemComponent(false);
      return state;

    case "PURCHASE":
      if (!action.liftedChoice) {
        return { ...state, error: "Please select Quality." };
      }

    default:
      return state;
  }
}

function PurchaseItem({
  liftedChoice,
  liftedChoiceCuteness,
  setShowPurchaseItemComponent,
}) {
  const [state, dispatch] = useReducer(reducer, { error: "" });

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

      {state.error && <p>{state.error}</p>}

      <div className={styles.buttonGroup}>
        <button
          className={styles.backBtn}
          onClick={() =>
            dispatch({
              type: "BACK",
              setShowPurchaseItemComponent,
            })
          }
        >
          Back
        </button>

        <button
          className={styles.purchaseBtn}
          onClick={() =>
            dispatch({
              type: "PURCHASE",
              liftedChoice,
              liftedChoiceCuteness,
            })
          }
        >
          Purchase
        </button>
      </div>
    </section>
  );
}

export default PurchaseItem;
