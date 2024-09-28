import styles from "./StrengthBar.module.scss";
import { useContext } from "react";
import PasswordContext from "../../../context/PasswordContext";

export default function StrengthBar() {
  const { strengthIndicator } = useContext(PasswordContext);
  const indicator = [
    { id: 1, message: "Too Weak!", indicatorStyle: "tooWeak" },
    { id: 2, message: "Weak", indicatorStyle: "weak" },
    { id: 3, message: "Medium", indicatorStyle: "medium" },
    { id: 4, message: "Strong", indicatorStyle: "strong" },
  ];

  let displayMessage = "";
  let displayStyle = -1;

  if (strengthIndicator) {
    displayMessage = indicator[strengthIndicator - 1].message;
    displayStyle = indicator[strengthIndicator - 1].indicatorStyle;
  }

  return (
    <>
      <p className={`normal-text ${styles.actualStrength}`}>{displayMessage}</p>
      <p className={styles.figure}>
        <span
          className={strengthIndicator >= 1 ? styles[displayStyle] : ""}
        ></span>
        <span
          className={strengthIndicator >= 2 ? styles[displayStyle] : ""}
        ></span>
        <span
          className={strengthIndicator >= 3 ? styles[displayStyle] : ""}
        ></span>
        <span
          className={strengthIndicator >= 4 ? styles[displayStyle] : ""}
        ></span>
      </p>
    </>
  );
}
