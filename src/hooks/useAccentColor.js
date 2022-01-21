import { useEffect, useState } from "react";

const accentColors = [
  "#d50000",
  "#f57c00",
  "#e91e63",
  "#36B06F",
  "#6250F4",
  "#2979ff",
  "#E7B92F",
];

const lsSet = (preference) => {
  window.localStorage.setItem("accent", preference);
};

export const useAccentColor = () => {
  const [accent, setAccent] = useState(accentColors[0]);

  const toggleAccent = () => {
    const localAccent = window.localStorage.getItem("accent");
    if (localAccent) {
      const currIndex = accentColors.indexOf(localAccent);
      const newIndex = (currIndex + 1) % accentColors.length;
      lsSet(accentColors[newIndex]);
      setAccent(accentColors[newIndex]);
    } else {
      lsSet(accentColors[1]);
      setAccent(accentColors[1]);
    }
  };

  useEffect(() => {
    const localAccent = window.localStorage.getItem("accent");
    if (localAccent) {
      setAccent(localAccent);
    }
  }, []);

  return [accent, toggleAccent];
};
