import { useEffect, useState } from "react";

const lsSet = (preference) => {
  window.localStorage.setItem("theme", preference);
};

export const useDarkLight = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      lsSet("dark");
      setTheme("dark");
    } else {
      lsSet("light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};
