import { useState } from "react";
import styles from "./Slider.module.scss";

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderValueChange = function (event) {
    setSliderValue(event.target.value);
  };

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
        onChange={handleSliderValueChange}
        className={styles.slider}
        style={{
          background: `linear-gradient(to right, #A4FFAF ${
            sliderValue * 5
          }%, #ddd ${sliderValue * 5}%)`,
        }}
      />
    </div>
  );
}
