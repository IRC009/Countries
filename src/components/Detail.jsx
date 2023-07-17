import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import Nav from "./nav";
import backArrow from "../assets/arrow-left-solid.svg";
import backArrowDark from "../assets/arrow-left-solid1.svg";

function Detail({ data, darkMode }) {
  const { country } = useParams();
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) => item.name.includes(country));
    setDetailData(filteredData);
  }, [country, data]);

  return (
    <div className={`main main-detail ${darkMode ? "main-dark" : ""}`}>
      <Link to="/" className={`main__detail__link main__link ${darkMode ? "main__detail__link-dark" : ""}`}>
        <img className="main__detail__link__img" src={darkMode ? backArrowDark : backArrow} alt="Arrow Back" />
        <h4 className="main__detail__link__h3">Back</h4>
      </Link>
      {detailData.map((item) => (
        <div key={item.name} className="main__detail__card">
          <img src={item.flag} alt={item.name} className="main__detail__card__img" />
          <div className="main__detail__container">
            <div className="main__detail__container__div1">
              <h2 className="main__detail__container__div1__h2">{item.name}</h2>
              <h3>Native Name: {item.nativeName}</h3>
              <h3>Population: {item.population}</h3>
              <h3>Region: {item.region}</h3>
              <h3>Sub Region: {item.subregion}</h3>
              <h3>Capital: {item.capital}</h3>
            </div>
            <div className="main__detail__container__div2">
              <h3>Top Level Domain: {item.topLevelDomain}</h3>
              <h3>Currencies: {item.currencies[0].name}</h3>
              <h3>
                Languages:{" "}
                {item.languages.map((language,index) => (
                  <React.Fragment key={language.name}>
                  {index === 0 ? language.name : `, ${language.name}`}
                </React.Fragment>
                ))}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detail;
