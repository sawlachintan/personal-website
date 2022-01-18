import { useEffect, useState } from "react";

export const useDarkLight = () => {
  const [theme, setTheme] = useState("light");
  function lsSet(preference) {
    window.localStorage.setItem("theme", preference);
    setTheme(preference);
  }

  function toggleTheme() {
    if (theme === "light") {
      lsSet("dark");
    } else {
      lsSet("light");
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? lsSet("dark")
      : localTheme
      ? setTheme(localTheme)
      : lsSet("light");
  }, [theme]);

  return [theme, toggleTheme];
};
