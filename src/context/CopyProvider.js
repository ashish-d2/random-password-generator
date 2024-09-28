import CopyContext from "./CopyContext";
import { useState } from "react";

export default function CopyProvider({ children }) {
  const [copyStatus, setCopyStatus] = useState(false);
  const [copyDisplayMessage, setCopyDisplayMessage] = useState();

  const copyToClipboard = function (textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => setCopyDisplayMessage("Copied"))
      .catch((err) => setCopyDisplayMessage(err.message));
  };

  return (
    <CopyContext.Provider
      value={{ copyToClipboard, copyStatus, copyDisplayMessage }}
    >
      {children}
    </CopyContext.Provider>
  );
}
