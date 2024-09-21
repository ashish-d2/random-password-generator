import styles from "./Heading.module.scss";

export default function Heading() {
  return (
    <h1 className={`normal-text ${styles.heading}`}>Password Generator</h1>
  );
}
