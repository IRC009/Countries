import Buscador from "../assets/magnifying-glass-solid.svg";
import BuscadorDark from "../assets/magnifying-glass-solid1.svg";

function Nav({ prop, filter, darkMode }) {
  const inputClassName = darkMode
    ? "nav__container__input-dark nav__container__input"
    : "nav__container__input";
  const optionClassName = darkMode
    ? "nav__filtro__option nav__filtro__option-dark"
    : "nav__filtro__option";

  return (
    <nav className={darkMode ? "nav-dark nav" : "nav"}>
      <div className="nav__container">
        <img
          src={darkMode ? BuscadorDark : Buscador}
          alt="Buscador"
          className="nav__container__img"
        />
        <input
          placeholder="Search for a country..."
          type="text"
          className={inputClassName}
          onChange={(e) => {
            prop(e.target.value);
          }}
        />
      </div>
      <select
        name="Filtro"
        className={`nav__filtro ${darkMode ? "nav__filtro-dark" : ""}`}
        defaultValue=""
        onChange={(e) => {
          filter(e.target.value);
        }}
      >
        <option className={optionClassName} value="">
          Filter by region
        </option>
        <option className={optionClassName} value="Africa">
          Africa
        </option>
        <option className={optionClassName} value="America">
          America
        </option>
        <option className={optionClassName} value="Asia">
          Asia
        </option>
        <option className={optionClassName} value="Europe">
          Europe
        </option>
        <option className={optionClassName} value="Oceania">
          Oceania
        </option>
      </select>
    </nav>
  );
}

export default Nav;
