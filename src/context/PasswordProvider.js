import PasswordContext from "./PasswordContext";
import { useState } from "react";

export default function PasswordProvider({ children }) {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);
  const [upperCaseActive, setUpperCaseActive] = useState(false);
  const [lowerCaseActive, setLowerCaseActive] = useState(false);
  const [numberActive, setNumberActive] = useState(false);
  const [symbolActive, setSymbolActive] = useState(false);
  const [strengthIndicator, setStrengthIndicator] = useState(0);

  const handleChangeOnCheckBoxClick = function (id) {
    switch (id) {
      case 1:
        setUpperCaseActive((prevValue) => !prevValue);
        break;
      case 2:
        setLowerCaseActive(!lowerCaseActive);
        break;
      case 3:
        setNumberActive(!numberActive);
        break;
      case 4:
        setSymbolActive(!symbolActive);
        break;
      default:
        console.log("Invalid checkbox input");
    }
  };

  const handlePasswordLengthChange = function (sliderValue) {
    setPasswordLength(sliderValue);
  };

  const shuffelPassword = function (p) {
    return p
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
  };

  const generatePassword = function () {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    const specialChar = "!@#$%^&*()_=+-.,/:[]{}";

    let charPool = "";
    let pass = "";

    if (upperCaseActive) {
      // Adding char to charPool according to selected parameter
      // Ensure that each category has at least one character if selected
      charPool += uppercase;
      pass += uppercase[Math.trunc(Math.random() * uppercase.length)];
    }

    if (lowerCaseActive) {
      charPool += lowercase;
      pass += lowercase[Math.trunc(Math.random() * lowercase.length)];
    }

    if (numberActive) {
      charPool += number;
      pass += number[Math.trunc(Math.random() * number.length)];
    }

    if (symbolActive) {
      charPool += specialChar;
      pass += specialChar[Math.trunc(Math.random() * specialChar.length)];
    }

    // if Req. password length is less than generated password length then trim password to meet require requirement.
    if (passwordLength <= pass.length) {
      pass = shuffelPassword(pass);
      pass = pass.slice(0, passwordLength);
      strengthCalculator(
        passwordLength,
        upperCaseActive,
        lowerCaseActive,
        numberActive,
        symbolActive
      );
      setPassword(pass);

      return;
    }

    // filling rest of password length;
    for (let i = pass.length; i < passwordLength; i++) {
      pass += charPool[Math.trunc(Math.random() * charPool.length)];
    }

    pass = shuffelPassword(pass);
    strengthCalculator(
      passwordLength,
      upperCaseActive,
      lowerCaseActive,
      numberActive,
      symbolActive
    );
    setPassword(pass);
  };

  const strengthCalculator = function (len, uc, lc, num, spl) {
    console.log("strength");
    let strength = 0;

    if (uc) strength++;
    if (lc) strength++;
    if (num) strength++;
    if (spl) strength++;

    if (len < 6) {
      strength = 1;
    }

    if (len >= 6 && len < 8) {
      console.log("weak");
      if (strength <= 3) strength--;
      else strength -= 2;
    }

    if (len >= 8 && len < 12 && strength <= 4) strength--;

    if (strength === 0) {
      strength = 1;
    }

    console.log(strength, len);
    setStrengthIndicator(strength);
  };

  return (
    <PasswordContext.Provider
      value={{
        passwordLength,
        upperCaseActive,
        lowerCaseActive,
        numberActive,
        symbolActive,
        handleChangeOnCheckBoxClick,
        handlePasswordLengthChange,
        generatePassword,
        password,
        strengthIndicator,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}
