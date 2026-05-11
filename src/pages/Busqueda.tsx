import { useEffect, useState } from "react";
import { Obra } from "../models/obra";
import { getObrasWithFilters } from "../api/getObras";

export const Busqueda = () => {
  const [filters, setFilters] = useState({
    anio: "",
    tecnica: "",
    autor: "",
    titulo: ""
  });

  const [allObras, setAllObras] = useState<Obra[]>([]);
  const [obras, setObras] = useState<Obra[]>([]);

  //Normalizador (clave para que la búsqueda funcione bien)
  const normalize = (str: string | null | undefined) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  };

  //Carga inicial (solo una vez)
  useEffect(() => {
    const fetchData = async () => {
      const res = await getObrasWithFilters({});
      setAllObras(res);
    };

    fetchData();
  }, []);

  //Manejo de inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 Filtrado en memoria
  const handleSearch = () => {
    const filtered = allObras.filter((obra) => {
      const titulo = normalize(obra.titulo);
      const autor = normalize(obra.autor_nombre);
      const tecnica = normalize(obra.tecnica_nombre);

      const fTitulo = normalize(filters.titulo);
      const fAutor = normalize(filters.autor);
      const fTecnica = normalize(filters.tecnica);
      const fAnio = filters.anio;

      return (
        (!fTitulo || titulo.includes(fTitulo)) &&
        (!fAutor || autor.includes(fAutor)) &&
        (!fTecnica || tecnica.includes(fTecnica)) &&
        (!fAnio || obra.anio === Number(fAnio))
      );
    });

    setObras(filtered);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Búsqueda avanzada</h2>

      {/* FORM */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input name="titulo" placeholder="Título" onChange={handleChange} />
        <input name="autor" placeholder="Autor" onChange={handleChange} />
        <input name="tecnica" placeholder="Técnica" onChange={handleChange} />
        <input name="anio" placeholder="Año" onChange={handleChange} />
      </div>

      <button onClick={handleSearch} style={{ marginTop: 10 }}>
        Buscar
      </button>

      {/* RESULTADOS */}
      <div style={styles.resultsContainer}>
        {obras.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          obras.map((obra) => (
            <div key={obra.id} style={styles.card}>
              {obra.imagenes?.[0] && (
                <img
                  src={obra.imagenes[0].url}
                  alt={obra.titulo}
                  style={styles.image}
                />
              )}

              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{obra.titulo}</h3>

                <p style={styles.cardText}>
                  {obra.autor_nombre}
                </p>

                <p style={styles.cardText}>
                  {obra.tecnica_nombre}
                </p>

                <p style={styles.cardYear}>
                  {obra.anio || "Sin año"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles: any = {
  resultsContainer: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "24px",
    width: "100%",
  },

  card: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.2s ease",
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    background: "#f5f5f5",
  },

  cardContent: {
    padding: "16px",
  },

  cardTitle: {
    margin: 0,
    marginBottom: "10px",
    fontSize: "18px",
    color: "#222",
  },

  cardText: {
    margin: "4px 0",
    color: "#666",
    fontSize: "14px",
  },

  cardYear: {
    marginTop: "10px",
    color: "#8BC34A",
    fontWeight: "bold",
  },
};