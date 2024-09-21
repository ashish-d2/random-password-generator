import copyIcon from "./../../assets/images/icon-copy.svg";
import styles from "./Display.module.scss";

export default function Display() {
  return (
    <div className={styles.displayContainer}>
      <p className="heading-medium">Random</p>
      <img src={copyIcon} alt="copy-icon" />
    </div>
  );
}
