import styles from "./Display.module.scss";
import { ReactComponent as CopyIcon } from "./../../assets/images/icon-copy.svg";
import { useState, useContext } from "react";
import PasswordContext from "../../context/PasswordContext";

export default function Display() {
  const { password } = useContext(PasswordContext);
  const [copyBtnActive, setCopyBtnActive] = useState(false);

  const handleCopyBtnClick = function () {
    setCopyBtnActive(true);
  };

  return (
    <div className={styles.displayContainer}>
      {password.length === 0 ? (
        <p className={`heading-medium ${styles.empty}`}></p>
      ) : (
        <p className="heading-medium">{password}</p>
      )}
      <div className={styles.copyContainer}>
        {copyBtnActive ? <p className={styles.copied}>Copied</p> : ""}

        <CopyIcon className={styles.copyIcon} onClick={handleCopyBtnClick} />
      </div>
    </div>
  );
}
