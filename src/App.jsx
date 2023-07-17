import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "../../rest-countries-api-with-color-theme-switcher-master/data.json"
        );
        let jsondata = await response.json();
        setData(jsondata);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);

  const darkModeChange = (value) => { //en el local storage yo le paso un parametro, pero al darle click en el boton "darkMode" no se le pasa nigun parametro
    if (value === undefined) {
      if (darkMode) {
        //función props
        setDarkMode(false);
        document.getElementById("root").classList.remove("root-dark");
        localStorage.setItem("dark", false);
      } else {
        setDarkMode(true);
        localStorage.setItem("dark", true);
        document.getElementById("root").classList.add("root-dark");
      }
    } else {
      setDarkMode(value);
      value
        ? document.getElementById("root").classList.add("root-dark")
        : document.getElementById("root").classList.remove("root-dark");
    }
  };

  return (
    <div className={darkMode ? "app-dark app" : "app"}>
      <Header dark={darkModeChange} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Card data={data} darkMode={darkMode} />} />
        <Route
          path="/:country"
          element={<Detail data={data} darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
