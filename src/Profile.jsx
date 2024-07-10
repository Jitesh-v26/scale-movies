import React, { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

function Profile() {
    const {theme, language} = useContext(SettingsContext);
  return (
    <div style={{ color: theme === "light" ? "black" : "white" }}>
      Profile Page in {language}
    </div>
  );
}

export default Profile;
