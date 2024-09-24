import styles from "./Rules.module.scss";

export default function Rules(props) {
  console.log(props.rule.name);
  return (
    <div className={styles.setting}>
      <input type="checkbox" id={props.rule.name} className={styles.input} />
      <label htmlFor={props.rule.name} className={styles.label}>
        {props.rule.setting}
      </label>
    </div>
  );
}
