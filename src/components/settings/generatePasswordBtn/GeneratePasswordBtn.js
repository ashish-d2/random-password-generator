import styles from "./GeneratePasswordBtn.module.scss";
import { ReactComponent as ArrowIcon } from "./../../../assets/images/icon-arrow-right.svg";
import { useContext } from "react";
import PasswordContext from "../../../context/PasswordContext";

export default function GeneratePasswordBtn() {
  const { generatePassword } = useContext(PasswordContext);

  return (
    <button
      className={`normal-text ${styles.btn}`}
      onClick={() => generatePassword()}
    >
      Generate
      <ArrowIcon className={styles.arrowIcon} />
    </button>
  );
}
