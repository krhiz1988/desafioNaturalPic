import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Context from "./Context/Context";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";

  const [fotos, setFotos] = useState({});
  const globalState = { fotos, setFotos };

  const dataFotos = async () => {
    const data = await fetch(endpoint);
    const imgs = await data.json();
    setFotos(imgs.photos);
  };

  useEffect(() => {
    dataFotos();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
