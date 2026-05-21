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
  const [isLoading, setIsLoading] = useState(true);

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
      setObras(res);
      setIsLoading(false);
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

  const handleReset = () => {
    const clean = { anio: "", tecnica: "", autor: "", titulo: "" };
    setFilters(clean);
    setObras(allObras);
  };

  return (
    <div style={styles.page}>
      <section style={styles.header}>
        <h2 style={styles.title}>Búsqueda avanzada</h2>
        <p style={styles.subtitle}>
          Encuentra obras por título, autor, técnica o año.
        </p>
      </section>

      <div style={styles.form}>
        <input
          name="titulo"
          placeholder="Título"
          value={filters.titulo}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="autor"
          placeholder="Autor"
          value={filters.autor}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="tecnica"
          placeholder="Técnica"
          value={filters.tecnica}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="anio"
          type="number"
          min="1000"
          max="2099"
          placeholder="Año"
          value={filters.anio}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.actions}>
        <button onClick={handleSearch} style={styles.primaryButton}>
          Buscar
        </button>
        <button onClick={handleReset} style={styles.secondaryButton}>
          Limpiar
        </button>
        <span style={styles.resultCount}>{obras.length} resultados</span>
      </div>

      <div style={styles.resultsContainer}>
        {isLoading ? (
          <p style={styles.empty}>Cargando obras...</p>
        ) : obras.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          obras.map((obra) => (
            <div key={obra.id} style={styles.card}>
              {obra.imagenes?.[0] && (
                <img
                  src={obra.imagenes[0].url}
                  alt={obra.titulo}
                  loading="lazy"
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
  page: {
    padding: "28px 20px 36px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "16px",
  },
  title: {
    margin: 0,
    color: "#253922",
    fontSize: "clamp(24px, 3vw, 34px)",
  },
  subtitle: {
    margin: "8px 0 0",
    color: "#5A6957",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "10px",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #CADBC4",
    outline: "none",
    background: "#fff",
  },
  actions: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "12px",
    flexWrap: "wrap",
  },
  primaryButton: {
    background: "#33691E",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "10px 16px",
    cursor: "pointer",
  },
  secondaryButton: {
    background: "#EFF4ED",
    color: "#2F4E26",
    border: "1px solid #D4E0D0",
    borderRadius: "10px",
    padding: "10px 16px",
    cursor: "pointer",
  },
  resultCount: {
    color: "#5A6F52",
    fontSize: "14px",
    fontWeight: 600,
  },
  resultsContainer: {
    marginTop: 22,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "18px",
    width: "100%",
  },

  card: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
    transition: "transform 0.2s ease",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #EEF1EC",
  },

  image: {
    width: "100%",
    aspectRatio: "4 / 5",
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
  empty: {
    color: "#566657",
  },
};