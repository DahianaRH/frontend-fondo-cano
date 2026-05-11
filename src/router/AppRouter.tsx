import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ScrollToTop } from "../components/ScrollToTop";

import { Busqueda } from "../pages/Busqueda";
import { Home } from "../pages/Home";
import { FondoArtista } from "../pages/FondoArtista";
import { Login } from "../pages/Login";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <Navbar onSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fondo/cano" element={<FondoArtista />} />
          <Route path="/login" element={<Login />} />
          <Route path="/busqueda" element={<Busqueda />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};