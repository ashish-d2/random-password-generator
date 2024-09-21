import styles from "./Slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderHeadingAndValue}>
        <p className={styles.heading}>Character Length</p>
        <p className={`heading-medium ${styles.value}`}>10</p>
      </div>
      <input type="range" min="1" max="20" className={styles.slider} />
    </div>
  );
}
