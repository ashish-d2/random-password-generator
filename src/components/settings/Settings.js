import styles from "./Settings.module.scss";

import Slider from "./slider/Slider";
import Rules from "./rules/Rules";
import PasswordStrrength from "./passwordStrength/PasswordStrength";
import GeneratePasswordBtn from "./generatePasswordBtn/GeneratePasswordBtn";

import { useContext } from "react";
import PasswordContext from "../../context/PasswordContext";

export default function Settings() {
  const {
    passwordLength,
    handlePasswordLengthChange,
    upperCaseActive,
    lowerCaseActive,
    numberActive,
    symbolActive,
  } = useContext(PasswordContext);

  const settings = [
    {
      id: 1,
      name: "uppercase letters",
      setting: "Include Uppercase Letters",
      active: upperCaseActive,
    },
    {
      id: 2,
      name: "lowercase letters",
      setting: "Include Lower Letters",
      active: lowerCaseActive,
    },
    {
      id: 3,
      name: "numbers",
      setting: "Include Numbers",
      active: numberActive,
    },
    {
      id: 4,
      name: "symbols",
      setting: "Include Symbols",
      active: symbolActive,
    },
  ];

  return (
    <div className={styles.settingsContainer}>
      <Slider
        sliderValue={passwordLength}
        onSliderValueChange={handlePasswordLengthChange}
      />
      <div className={styles.settings}>
        {settings.map((setting) => (
          <Rules rule={setting} key={setting.id} />
        ))}
      </div>
      <PasswordStrrength />
      <GeneratePasswordBtn />
    </div>
  );
}
