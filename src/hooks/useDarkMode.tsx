import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-color-mode', 'dark');
      document.documentElement.classList. add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute('data-color-mode', 'light');
      document.documentElement.classList. remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};

export default useDarkMode;
