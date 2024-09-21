import styles from "./Settings.module.scss";

import Slider from "./slider/Slider";

export default function Settings() {
  return (
    <div className={styles.settingsContainer}>
      <Slider />
    </div>
  );
}
