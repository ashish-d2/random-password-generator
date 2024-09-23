import styles from "./Display.module.scss";
import { ReactComponent as CopyIcon } from "./../../assets/images/icon-copy.svg";

export default function Display() {
  return (
    <div className={styles.displayContainer}>
      <p className={`heading-medium ${styles.empty}`}></p>
      <CopyIcon className={styles.copyIcon} />
    </div>
  );
}
