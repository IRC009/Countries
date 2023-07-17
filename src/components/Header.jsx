import { useEffect } from "react";
import moon from "../assets/moon-regular.svg";
import moonDark from "../assets/moon-solid.svg";

function Header({ dark, darkMode }) {
  useEffect(() => {
    let isDark = localStorage.getItem("dark") === "true";
    dark(isDark);
  }, []);

  return (
    <header className={darkMode ? "header-dark header" : "header"}>
      <h1 className="header__h1">Where in the world?</h1>
      <div className="header__container" onClick={() => dark()}>
        <img
          src={darkMode ? moonDark : moon}
          alt="Moon"
          className="header__img"
        />
        <h4 className="header__h3">Dark Mode</h4>
      </div>
    </header>
  );
}

export default Header;
