import { createContext, useContext } from "react";

// Create a context for the current theme (light or dark)
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// making components to be able to subscribe to context changes using ThemeContext.Provider
export const ThemeProvider = ThemeContext.Provider;

//making components to be able to subscribe to context changes using useTheme hook
export default function useTheme() {
  return useContext(ThemeContext);
}
