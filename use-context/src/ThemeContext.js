import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const UpdateThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useUpdateTheme = () => {
    return useContext(UpdateThemeContext);
}

export const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    );
}