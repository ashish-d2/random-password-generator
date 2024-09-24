import styles from "./Display.module.scss";
import { ReactComponent as CopyIcon } from "./../../assets/images/icon-copy.svg";
import { useState } from "react";

export default function Display() {
  const [copyBtnActive, setCopyBtnActive] = useState(false);

  const handleCopyBtnClick = function () {
    setCopyBtnActive(true);
  };

  return (
    <div className={styles.displayContainer}>
      <p className={`heading-medium ${styles.empty}`}></p>
      <div className={styles.copyContainer}>
        {copyBtnActive ? <p className={styles.copied}>Copied</p> : ""}

        <CopyIcon className={styles.copyIcon} onClick={handleCopyBtnClick} />
      </div>
    </div>
  );
}
