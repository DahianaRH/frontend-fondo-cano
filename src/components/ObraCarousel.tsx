import { useEffect, useState } from "react";
import { getObras } from "../api/obras.api";
import { ImageModal } from "./ImageModal";
import { Obra } from "../models/obra";

export const ObraCarousel = () => {
  const [obras, setObras] = useState<Obra[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    getObras()
      .then(setObras)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Cargando...</p>;

  return (
    <>
      <div style={styles.container}>
        {obras.map((obra, i) => {
          const img = obra.imagenes?.[0]?.url;

          return (
            <div
              key={obra.id}
              style={styles.card}
              onClick={() => img && setIndex(i)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";

                const img = e.currentTarget.querySelector("img");
                if (img) {
                  (img as HTMLImageElement).style.filter = "grayscale(0%)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";

                const img = e.currentTarget.querySelector("img");
                if (img) {
                  (img as HTMLImageElement).style.filter =
                    "grayscale(40%) contrast(1.1)";
                }
              }}
            >
              {img ? (
                <img src={img} style={styles.image} />
              ) : (
                <div style={styles.placeholder}>Sin imagen</div>
              )}

              <div style={styles.info}>
                <h3>{obra.titulo}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {index !== null && (
        <ImageModal
          obras={obras}
          index={index}
          onClose={() => setIndex(null)}
          onNavigate={setIndex}
        />
      )}
    </>
  );
};

const styles: any = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
    padding: "40px",
  },

  card: {
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderRadius: "16px",
    overflow: "hidden",
    background: "#0f172a",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    transition: "0.4s",
    filter: "grayscale(40%) contrast(1.1)",
  },

  placeholder: {
    height: "260px",
    background: "#1e293b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

  info: {
    padding: "12px",
    color: "#fff",
  },
};