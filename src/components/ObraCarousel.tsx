import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { getObras } from "../api/obras.api";
import { ImageModal } from "./ImageModal";
import { Obra } from "../models/obra";

export const ObraCarousel = () => {
  const [obras, setObras] = useState<Obra[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    getObras()
      .then((data) => {
        setObras(data);
        setError(null);
      })
      .catch(() => {
        setError(
          "No se pudieron cargar las obras. Verifica tu conexión e intenta recargar."
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const normalize = (value: string | null | undefined) =>
    (value ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const filteredObras = useMemo(() => {
    const query = normalize(search);
    if (!query) return obras;

    return obras.filter((obra) => {
      const titulo = normalize(obra.titulo);
      const autor = normalize(obra.autor_nombre);
      const tecnica = normalize(obra.tecnica_nombre);

      return (
        titulo.includes(query) ||
        autor.includes(query) ||
        tecnica.includes(query)
      );
    });
  }, [obras, search]);

  const resetModal = () => setIndex(null);

  if (loading) return <p style={{ padding: 20 }}>Cargando...</p>;

  return (
    <>
      <section style={styles.header}>
        <div style={styles.headerText}>
          <h2 style={styles.title}>Galería de obras</h2>
          <p style={styles.subtitle}>
            Explora la colección con mejor detalle y navegación visual.
          </p>
        </div>

        <div style={styles.searchWrapper}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título, autor o técnica"
            style={styles.searchInput}
          />
          <span style={styles.count}>{filteredObras.length} obras</span>
        </div>
      </section>

      <div style={styles.container}>
        {filteredObras.map((obra, i) => {
          const img = obra.imagenes?.[0]?.url;

          return (
            <div
              key={obra.id}
              style={styles.card}
              onClick={() => img && setIndex(i)}
            >
              {img ? (
                <img src={img} alt={obra.titulo} loading="lazy" style={styles.image} />
              ) : (
                <div style={styles.placeholder}>Sin imagen</div>
              )}

              <div style={styles.info}>
                <h3 style={styles.cardTitle}>{obra.titulo}</h3>
                <p style={styles.cardMeta}>
                  {obra.autor_nombre || "Autor desconocido"}
                </p>
                <p style={styles.cardMeta}>
                  {obra.tecnica_nombre || "Técnica no disponible"}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {error && <p style={styles.errorState}>{error}</p>}
      {!error && !filteredObras.length && (
        <p style={styles.emptyState}>
          No encontramos obras con ese criterio. Prueba con otro término.
        </p>
      )}

      {index !== null && (
        <ImageModal
          obras={filteredObras}
          index={index}
          onClose={resetModal}
          onNavigate={setIndex}
        />
      )}
    </>
  );
};

const styles: Record<string, CSSProperties> = {
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "16px",
    padding: "16px 24px 0",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },
  headerText: {
    maxWidth: "620px",
  },
  title: {
    margin: 0,
    color: "#20331A",
    fontSize: "clamp(26px, 3.2vw, 38px)",
  },
  subtitle: {
    margin: "8px 0 0",
    color: "#54645C",
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  searchInput: {
    width: "min(360px, 100%)",
    minWidth: "240px",
    borderRadius: "10px",
    border: "1px solid #CFE2C8",
    padding: "10px 14px",
    outline: "none",
    fontSize: "14px",
  },
  count: {
    color: "#507744",
    fontSize: "13px",
    fontWeight: 600,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    padding: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
    background: "#FFFFFF",
  },

  card: {
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    borderRadius: "14px",
    overflow: "hidden",
    background: "#FFFFFF",
    boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
    border: "1px solid #F1F1F1",
  },

  image: {
    width: "100%",
    aspectRatio: "4 / 5",
    objectFit: "cover",
    display: "block",
    background: "#F2F4F1",
  },

  placeholder: {
    width: "100%",
    aspectRatio: "4 / 5",
    display: "grid",
    placeItems: "center",
    color: "#7F8A7F",
    background: "#F2F4F1",
  },

  info: {
    padding: "12px 14px 14px",
  },

  cardTitle: {
    margin: "0 0 6px",
    fontSize: "16px",
    color: "#1E1E1E",
    lineHeight: 1.35,
  },

  cardMeta: {
    margin: 0,
    color: "#6D6D6D",
    fontSize: "13px",
    lineHeight: 1.4,
  },

  emptyState: {
    margin: "8px 24px 24px",
    color: "#68766B",
    textAlign: "center",
  },
  errorState: {
    margin: "10px 24px 0",
    color: "#A12C2C",
    textAlign: "center",
    fontSize: "14px",
  },
};