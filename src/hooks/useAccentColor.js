import { useEffect, useState } from "react";

const accentColors = [
  "#757575", //colorblind friendly
  "#d50000", //red
  "#f57c00", //orange
  "#e91e63", //pink
  "#36B06F", //yellow
  "#6250F4", //purple
  "#2979ff", // blue
  "#E7B92F", // green
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
