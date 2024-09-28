import styles from "./Display.module.scss";
import { ReactComponent as CopyIcon } from "./../../assets/images/icon-copy.svg";
import { useContext } from "react";
import PasswordContext from "../../context/PasswordContext";
import CopyContext from "../../context/CopyContext";

export default function Display() {
  const { password, copyBtnActive, handleCopyBtnClick } =
    useContext(PasswordContext);
  const { copyToClipboard } = useContext(CopyContext);

  const handleClick = function (password) {
    copyToClipboard(password);
    handleCopyBtnClick();
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

        <CopyIcon
          className={styles.copyIcon}
          onClick={() => handleClick(password)}
        />
      </div>
    </div>
  );
}
