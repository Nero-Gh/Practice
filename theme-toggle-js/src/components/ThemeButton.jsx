import React from "react";
import useTheme from "../contexts/theme";

const ThemeButton = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const onChangeBtn = (e) => {
    // const darkModeStatus = e.currentTarget.checked;
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  return (
    <div className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="border"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 bg-gray-200 peer-focus:outline-none peer-focus:ring-4"></div>
    </div>
  );
};

export default ThemeButton;
