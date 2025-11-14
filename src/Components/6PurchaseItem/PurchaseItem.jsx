import { useReducer } from "react"; // Removed useEffect import
import styles from "./PurchaseItem.module.css";

const initialCartState = [];

function reducer(state, action) {
  switch (action.type) {
    case "BACK":
      action.setShowPurchaseItemComponent(false);
      return state;

    case "PURCHASE":
      if (!action.quality) {
        return {...state, error: "Please select Quality."};
      }
      if(initialCartState.length ===  3){
        return {...state, error: "Can only add maximum of 3 items in your cart"}
      }
      const newItem = {
        quality: action.quality,
        cuteness: action.cuteness,
      };

      initialCartState.push(newItem)
      action.setInitialCartState(initialCartState)
      action.setShowPurchaseItemComponent(false);
      console.log(initialCartState);

    default:
      return state;
  }
}

function PurchaseItem({
  liftedChoiceQuality,
  liftedChoiceCuteness,
  setShowPurchaseItemComponent,
  setInitialCartState,
  
}) {
  const [state, dispatch] = useReducer(reducer, {
    cart: initialCartState,
    error: null,
  });

  const randomNum = Math.floor(Math.random() * 3) + 1;
  const image = `/ImageSliderImages/ImageSlider1Images/Slider1Image${randomNum}.jpg`;

  const price =
    (liftedChoiceQuality === "SubStandard"
      ? 79990
      : liftedChoiceQuality === "Standard"
      ? 99990
      : liftedChoiceQuality === "Premium"
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
        <img src={image} alt="img" />
      </div>

      <p className={styles.itemName}>Quality: {liftedChoiceQuality}</p>
      <p className={styles.itemVariation}>Cuteness: {liftedChoiceCuteness}</p>
      <p className={styles.itemPrice}>Price: {price}</p>
      <button onClick={() => console.log(state.cart)}>
        log Cart State(remove later)
      </button>

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
               setShowPurchaseItemComponent,
               setInitialCartState,
              quality: liftedChoiceQuality,
              cuteness: liftedChoiceCuteness,
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