import styles from "./Rules.module.scss";
import { useContext } from "react";
import PasswordContext from "../../../context/PasswordContext";

export default function Rules(props) {
  const { id, name, setting, active } = props.rule;
  const { handleChangeOnCheckBoxClick } = useContext(PasswordContext);

  const handleChange = function (id) {
    handleChangeOnCheckBoxClick(id);
  };

  return (
    <div className={styles.setting}>
      <input
        type="checkbox"
        id={name}
        className={styles.input}
        onChange={() => handleChange(id)}
      />
      <label htmlFor={name} className={styles.label}>
        {setting}
      </label>
    </div>
  );
}
