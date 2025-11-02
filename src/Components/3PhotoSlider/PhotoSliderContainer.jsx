import ImageSlider1 from './ImageSlider/ImageSlider1/ImageSlider1.jsx';
import ImageSlider2 from './ImageSlider/ImageSlider2/ImageSlider2.jsx';
import ImageSlider3 from './ImageSlider/ImageSlider3/ImageSlider3.jsx';
import styles from './PhotoSliderContainer.module.css';




function PhotoSlider({className}) {
    return ( 
        <>
        <section className={`${styles.container} ${className} ${styles.gridContainer}`}>
<ImageSlider1/>    
<ImageSlider2/>
<div  className={styles.thirdImageSlider}>
    <ImageSlider3/>
</div>

  </section>
        </>
    );
}

export default PhotoSlider;
