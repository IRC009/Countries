import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Detail from "./components/Detail";
import data from "./assets/data.json";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Simulamos la obtención de datos desde un archivo JSON local
    setJsonData(data);
  }, []);

  const darkModeChange = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    // Actualizar el tema oscuro en el local storage al cambiar el estado
    localStorage.setItem("dark", darkMode.toString());

    // Actualizar la clase del elemento root según el modo oscuro
    const rootElement = document.getElementById("root");
    if (rootElement) {
      if (darkMode) {
        rootElement.classList.add("root-dark");
      } else {
        rootElement.classList.remove("root-dark");
      }
    }
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "app-dark" : ""}`}>
      <Header dark={darkModeChange} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Card data={jsonData} darkMode={darkMode} />} />
        <Route path="/:country" element={<Detail data={jsonData} darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
