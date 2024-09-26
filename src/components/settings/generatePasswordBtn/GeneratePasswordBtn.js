import styles from "./GeneratePasswordBtn.module.scss";
import { ReactComponent as ArrowIcon } from "./../../../assets/images/icon-arrow-right.svg";
import { useContext } from "react";
import PasswordContext from "../../../context/PasswordContext";

export default function GeneratePasswordBtn() {
  const {
    passwordLength,
    generatePassword,
    upperCaseActive,
    lowerCaseActive,
    numberActive,
    symbolActive,
  } = useContext(PasswordContext);

  const handlePasswordGenerateBtn = function () {
    if (passwordLength === 0) {
      return;
    }

    if (
      !upperCaseActive &&
      !lowerCaseActive &&
      !numberActive &&
      !symbolActive
    ) {
      return;
    }
    generatePassword();
  };

  return (
    <button
      className={`normal-text ${styles.btn}`}
      onClick={handlePasswordGenerateBtn}
    >
      Generate
      <ArrowIcon className={styles.arrowIcon} />
    </button>
  );
}
