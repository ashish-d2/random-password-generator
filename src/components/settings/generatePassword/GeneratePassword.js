import styles from "./GeneratePassword.module.scss";
import arrowIcon from "./../../../assets/images/icon-arrow-right.svg";

export default function GeneratePassword() {
  return (
    <button className={`normal-text ${styles.btn}`}>
      Generate
      <img src={arrowIcon} alt="arrow-icon" className={styles.arrowIcon} />
    </button>
  );
}
