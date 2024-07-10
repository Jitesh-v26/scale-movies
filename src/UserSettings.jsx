import React, { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

function UserSettings() {
    const { theme, toggleTheme, language, toggleLanguage } = useContext(SettingsContext);
  return (
    <div>
      <button onClick={() => toggleTheme()}>
        Toggle Theme
      </button>
      <button
        onClick={() =>
          toggleLanguage()
        }
      >
        Toggle Language
      </button>
    </div>
  );
}

export default UserSettings;
