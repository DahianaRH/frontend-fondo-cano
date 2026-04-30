import { useEffect, useState } from "react";
import { getObras } from "../api/obras.api";
import { Filtros } from "../components/Filtros";
import { Obra } from "../models/obra";

interface Props {
  search: string;
}

export const Galeria = ({ search }: Props) => {
  const [obras, setObras] = useState<Obra[]>([]);
  const [all, setAll] = useState<Obra[]>([]);

  useEffect(() => {
    getObras().then((data) => {
      setObras(data);
      setAll(data);
    });
  }, []);

  // 🔍 búsqueda global
  useEffect(() => {
    let filtered = all;

    if (search) {
      filtered = filtered.filter((o) =>
        o.titulo.toLowerCase().includes(search.toLowerCase()) ||
        o.autor.toLowerCase().includes(search.toLowerCase()) ||
        o.tecnica.toLowerCase().includes(search.toLowerCase()) ||
        (o.anio !== null && o.anio.toString().includes(search))
      );
    }

    setObras(filtered);
  }, [search, all]);

  // 🎯 filtros por dropdown
  const handleFilter = (f: { anio?: number }) => {
    let filtered = all;

    if (f.anio) {
      filtered = filtered.filter((o) => o.anio === f.anio);
    }

    setObras(filtered);
  };

  return (
    <div style={{ width: "100%" }}>
      <h2>Galería</h2>

      <Filtros onFilter={handleFilter} />

      {obras.map((o) => (
        <div key={o.id}>
          {o.titulo} - {o.autor} - {o.anio}
        </div>
      ))}
    </div>
  ); 
};

const styles: any = {
container: {
  minHeight: "100vh",
  width: "100%",
  background: "#0a0a0a",
  color: "#e5e5e5",
}
};
