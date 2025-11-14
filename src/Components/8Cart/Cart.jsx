import { useReducer } from "react";
import styles from "./Cart.module.css";
function Cart( { initialCartState} ) {

  const image = `/ImageSliderImages/ImageSlider1Images/Slider1Image1.jpg`;
  return (
    <section className={styles.container}>
{initialCartState.map(element => (
  <div key={element.id} className={styles.card}>

<div className={styles.image}>
<img src={image} alt="img" />
</div>
<p>{element.quality}</p>
<p>{element.cuteness}</p>
<p>{element.price}</p>
<button>Remove from cart</button>
<button>Check Out</button>
  </div>
))}
    </section>
  );
}

export default Cart;
