import { useReducer } from "react";
import styles from "./PurchaseItem.module.css";

let nextId = 1;

function reducer(state, action) {
  switch (action.type) {
    case "BACK":
      action.setShowPurchaseItemComponent(false);
      return state;

    case "PURCHASE":
      const cart = action.currentCart;

      if (!action.quality) {
        return { ...state, error: "Please select Quality." };
      }

      if (cart.length === 4) {
        return { ...state, error: "Can only add maximum of 4 items in your cart" };
      }

      const newItem = {
        quality: action.quality,
        cuteness: action.cuteness,
        id: action.nextId,
      };

      cart.push(newItem);
      action.setInitialCartState([...cart]);
      action.setShowPurchaseItemComponent(false);
      console.log(cart);
window.alert("Item added to cart")
      return { ...state, error: null };

    default:
      return state;
  }
}

function PurchaseItem({
  liftedChoiceQuality,
  liftedChoiceCuteness,
  setShowPurchaseItemComponent,
  initialCartState,
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

  const handlePurchase = () => {
    dispatch({
      type: "PURCHASE",
      setShowPurchaseItemComponent,
      setInitialCartState,
      quality: liftedChoiceQuality,
      cuteness: liftedChoiceCuteness,
      nextId: nextId,
      currentCart: initialCartState,
    });

    nextId += 1;
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Check Out?</h1>

      <div className={styles.imagePlaceholder}>
        <img src={image} alt="img" />
      </div>

      <p className={styles.itemName}>Quality: {liftedChoiceQuality}</p>
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

        <button className={styles.purchaseBtn} onClick={handlePurchase}>
          Purchase
        </button>
      </div>
    </section>
  );
}

export default PurchaseItem;