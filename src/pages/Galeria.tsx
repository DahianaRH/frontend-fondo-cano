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

  //Buscar obras globalmente
  useEffect(() => {
    const delay = setTimeout(() => {
      getObras(search).then(setObras);
    }, 300);

    return () => clearTimeout(delay);
  }, [search]);

  //filtros por dropdown
  const handleFilter = (f: { anio?: number }) => {
    if (!f.anio) return;

    setObras((prev) =>
      prev.filter((o) => o.anio === f.anio)
    );
  };

  return (
    <div style={styles.container}>
      <h2>Galería</h2>

      <Filtros onFilter={handleFilter} />

      <div style={styles.grid}>
        {obras.map((o) => (
          <div key={o.id} style={styles.card}>
            <h3>{o.titulo}</h3>
            <p>{o.autor}</p>
            <p>{o.anio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    minHeight: "100vh",
    width: "100%",
    background: "#FFFFFF",
    color: "#000000",
    padding: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    padding: "12px",
    borderRadius: "12px",
    background: "#FFFFFF",
    boxShadow: "0 6px 20px #ddd",
  },
};