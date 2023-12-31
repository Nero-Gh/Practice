import React, { useEffect } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = React.useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    // const root = window.document.documentElement;
    // root.classList.remove("light", "dark");
    // root.classList.add(themeMode);

    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
