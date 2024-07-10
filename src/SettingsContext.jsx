import React, { useState } from "react";

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  // Write your code here
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('English');
    
    const toggleTheme = () => {
        if(theme == 'light') setTheme('dark');
        else setTheme('light');
    }

    const toggleLanguage = () => {
        if(language == 'English') setLanguage('Spanish');
        else setLanguage('English');
    }

    return(
        <SettingsContext.Provider value={{theme, language, toggleTheme, toggleLanguage}}>{children}</SettingsContext.Provider>
    );
};

export default SettingsProvider;
