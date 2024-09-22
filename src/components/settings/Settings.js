import styles from "./Settings.module.scss";

import Slider from "./slider/Slider";
import Rules from "./rules/Rules";

const settings = [
  {
    id: 1,
    name: "uppercase letters",
    setting: "Include Uppercase Letters",
    active: false,
  },
  {
    id: 2,
    name: "lowercase letters",
    setting: "Include Lower Letters",
    active: false,
  },
  { id: 3, name: "numbers", setting: "Include Numbers", active: false },
  { id: 4, name: "symbols", setting: "Include Symbols", active: false },
];

export default function Settings() {
  return (
    <div className={styles.settingsContainer}>
      <Slider />
      <div className={styles.settings}>
        {settings.map((setting) => (
          <Rules rule={setting} key={setting.id} />
        ))}
      </div>
    </div>
  );
}
