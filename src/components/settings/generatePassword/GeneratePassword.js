import styles from "./GeneratePassword.module.scss";
import { ReactComponent as ArrowIcon } from "./../../../assets/images/icon-arrow-right.svg";

export default function GeneratePassword() {
  return (
    <button className={`normal-text ${styles.btn}`}>
      Generate
      <ArrowIcon className={styles.arrowIcon} />
    </button>
  );
}
