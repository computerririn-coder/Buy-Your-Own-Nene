import ImageSlider from './ImageSlider/ImageSlider';
import styles from './PhotoSliderContainer.module.css';




function PhotoSlider({className}) {
    return ( 
        <>
        <section className={`${styles.container} ${className}`}>
<ImageSlider/>    
  </section>
        </>
    );
}

export default PhotoSlider;
