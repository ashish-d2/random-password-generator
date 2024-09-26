import styles from "./Slider.module.scss";

export default function Slider({ sliderValue, onSliderValueChange }) {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderHeadingAndValue}>
        <p className={styles.heading}>Character Length</p>
        <p className={`heading-medium ${styles.value}`}>{sliderValue}</p>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        value={sliderValue}
        step="1"
        onChange={(event) => onSliderValueChange(+event.target.value)}
        className={styles.slider}
        style={{
          background: `linear-gradient(to right, #A4FFAF ${
            sliderValue * 5
          }%, #18171F ${sliderValue * 5}%)`,
        }}
      />
    </div>
  );
}
