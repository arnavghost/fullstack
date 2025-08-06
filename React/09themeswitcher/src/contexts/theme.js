import { createContext, useContext } from "react";

// Create the context with default values
export const ThemeContext = createContext({
themeMode: "light",
darkTheme: () => {},
lightTheme: () => {},
});

// Export the context provider
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the ThemeContext
export function useTheme() {
return useContext(ThemeContext);
}