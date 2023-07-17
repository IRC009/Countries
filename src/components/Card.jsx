import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";

function Card({ data, darkMode }) {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState(20);

  useEffect(() => {
    const filteredData = data.filter((country) => {
      const nameMatch = country.name
        .toLowerCase()
        .trim()
        .includes(search.toLowerCase().trim());
      const regionMatch = country.region
        .toLowerCase()
        .includes(filter.toLowerCase());

      return nameMatch && regionMatch;
    });

    setResult(filteredData);
  }, [search, filter, data]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleFilter = (value) => {
    setFilter(value);
  };

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    const threshold = 200; // Píxeles de margen para cargar elementos adicionales
    if (scrollPosition >= pageHeight - threshold) {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visibleResult = result.slice(0, visibleItems);

  return (
    <>
      <Nav prop={handleSearch} filter={handleFilter} darkMode={darkMode} />
      <main className={`main ${darkMode ? "main-dark" : ""}`}>
        {visibleResult.map((country) => (
          <Link
            to={`/${country.name}`}
            className={`main__card main__link ${
              darkMode ? "main__link-dark" : ""
            }`}
            key={country.name}
          >
            <div className="main__card__container-img">
              <img
                className="main__card__img"
                src={country.flag}
                alt={`${country.name} bandera`}
              />
            </div>
            <div className="main__card__container-description">
              <h2 className="main__card__h2">{country.name}</h2>
              <h3 className="main__card__h3">
                Population: {country.population}
              </h3>
              <h3 className="main__card__h3">Región: {country.region}</h3>
              <h3 className="main__card__h3">Capital: {country.capital}</h3>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}

export default Card;
