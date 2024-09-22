import styles from "./PasswordStrrength.module.scss";

export default function PasswordStrrength() {
  return (
    <div className={styles.passwordStrengthContainer}>
      <p className={styles.strength}>Strength</p>
      <div className={styles.strengthContainer}>
        <p className={`normal-text ${styles.actualStrength}`}>Medium</p>
        <p className={styles.figure}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
    </div>
  );
}
