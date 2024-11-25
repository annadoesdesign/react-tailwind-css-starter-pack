import React, { createContext, useContext } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// Custom hook for consuming the Theme Context
export const useThemeContext = () => useContext(ThemeContext);

// Theme Provider component
export const ThemeProvider = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};