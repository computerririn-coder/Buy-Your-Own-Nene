import styles from "./Cart.module.css";

function Cart({ initialCartState, setInitialCartState, setShowPurchaseItemComponentCart }) {
  const image = "/ImageSliderImages/ImageSlider1Images/Slider1Image1.jpg";

  const removeItem = (id) => {
    const updatedCart = initialCartState.filter(item => item.id !== id);
    setInitialCartState(updatedCart);
  };

  return (
    <section className={styles.container}>
      <button
        className={styles.closeBtn}
        onClick={() => setShowPurchaseItemComponentCart(false)}
      >
        ×
      </button>

      {initialCartState.length === 0 && <p>Your cart is empty.</p>}

      {initialCartState.map((element) => (
        <div key={element.id} className={styles.card}>
          <div className={styles.image}>
            <img src={image} alt="img" />
          </div>

          <p>ID: {element.id}</p>
          <p>Quality: {element.quality}</p>
          <p>Cuteness: {element.cuteness}</p>
          <p>Price: {element.price}</p>

          <button onClick={() => removeItem(element.id)}>Remove from cart</button>
          <button>Check Out</button>
        </div>
      ))}
    </section>
  );
}

export default Cart;
