import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(() => {
    const storedThemeColor = localStorage.getItem("themeColor");
    return storedThemeColor ? JSON.parse(storedThemeColor) : "enyata-pink";
  });

  useEffect(() => {
    localStorage.setItem("themeColor", JSON.stringify(themeColor));
  }, [themeColor]);

  const value = {
    themeColor,
    setThemeColor,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
