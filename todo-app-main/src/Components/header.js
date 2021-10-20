import { useState, useEffect } from "react";
import MoonIcon from "../Images/icon-moon.svg";
import SunIcon from "../Images/icon-sun.svg";
function Header() {
  const [mood, setMood] = useState(localStorage.getItem("theme"));

  const handelTheme = () => {
    const newTheme = mood == "enable" ? "disable" : "enable";

    if (newTheme == "enable") {
      document.querySelector("body").classList.add("dark");
      localStorage.setItem("theme", newTheme);
    } else if (newTheme == "disable") {
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("theme", newTheme);
    }
    setMood(newTheme);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") == "enable") {
      document.querySelector("body").classList.add("dark");
    }
  }, []);

  return (
    <>
      <header className="container header flex f-ai-c f-jc-b">
        <h1 className="header__title">TODO</h1>
        <button className="header__cta pointer" onClick={() => handelTheme()}>
          {mood ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>
    </>
  );
}

export default Header;
