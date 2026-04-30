import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Galeria } from "../pages/Galeria";
import { Home } from "../pages/Home";
import { FondoArtista } from "../pages/FondoArtista";
import { Login } from "../pages/Login";
import { Navbar } from "../components/Navbar";

export const AppRouter = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}> 
        <Navbar onSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fondo/cano" element={<FondoArtista />} />
          <Route path="/login" element={<Login />} />
          <Route path="/galeria" element={<Galeria search={search} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};