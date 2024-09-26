import styles from "./PasswordStrrength.module.scss";
import StrengthBar from "./StrengthBar";

export default function PasswordStrrength() {
  return (
    <div className={styles.passwordStrengthContainer}>
      <p className={styles.strength}>Strength</p>
      <div className={styles.strengthContainer}>
        <StrengthBar />
      </div>
    </div>
  );
}
