import { useState , useEffect} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './ImageSlider1.module.css';

function ImageSlider1() {
  const [count, setCount] = useState(1);
  const [fade, setFade] = useState(false);

  const images = [
    '/ImageSliderImages/ImageSlider1Images/Slider1Image1.jpg',
    '/ImageSliderImages/ImageSlider1Images/Slider1Image2.jpg',
    '/ImageSliderImages/ImageSlider1Images/Slider1Image3.jpg',
  ];

  function changeImage(newCount) {
    setFade(true);
    setTimeout(() => {
      setCount(newCount);
      setFade(false);
    }, 250);
  }

  function increment() {
    changeImage(count === images.length ? 1 : count + 1);
  }

  function decrement() {
    changeImage(count === 1 ? images.length : count - 1);
  }

//Auto next image 
useEffect(() => {
  const interval = setInterval(() => {
    increment();
  }, 3000);

  return () => clearInterval(interval);
}, [count]);



  return (
    <section className={styles.container}>
      <img
        src={images[count - 1]}
        alt="slider"
        className={`${styles.imageCSS} ${fade ? styles.fade : ''}`}
      />

      <div className={styles.buttonContainer}>
        <button onClick={decrement} className={styles.arrow}>
          <FaArrowLeft />
        </button>
        <button onClick={increment} className={styles.arrow}>
          <FaArrowRight />
        </button>
      </div>

    <div className={styles.dotsContainer}>
  {images.map((_, i) => (
    <button
      key={i}
      onClick={() => changeImage(i + 1)}
      className={`${styles.dot} ${count === i + 1 ? styles.active : ''}`}
    />
  ))}
</div>

    </section>
  );
}

export default ImageSlider1;

