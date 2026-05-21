import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { Obra } from "../models/obra";

interface Props {
  obras: Obra[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const ImageModal = ({ obras, index, onClose, onNavigate }: Props) => {
  const obra = obras[index];
  const imagen = obra.imagenes?.[0]?.url;

  const next = () => {
    if (index < obras.length - 1) onNavigate(index + 1);
  };

  const prev = () => {
    if (index > 0) onNavigate(index - 1);
  };

  useEffect(() => {
    const handleKeyNavigation = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && index < obras.length - 1) {
        onNavigate(index + 1);
      }
      if (event.key === "ArrowLeft" && index > 0) {
        onNavigate(index - 1);
      }
    };

    window.addEventListener("keydown", handleKeyNavigation);
    return () => window.removeEventListener("keydown", handleKeyNavigation);
  }, [index, obras.length, onClose, onNavigate]);

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={styles.close}>
          <X size={24} />
        </button>

        <button onClick={prev} style={{ ...styles.nav, left: 10 }}>
          <ChevronLeft size={30} />
        </button>

        <button onClick={next} style={{ ...styles.nav, right: 10 }}>
          <ChevronRight size={30} />
        </button>

        <div style={styles.imageWrapper}>
          {imagen && (
            <img
              src={imagen}
              alt={obra.titulo}
              style={{
                ...styles.image,
              }}
            />
          )}
        </div>

        <div style={styles.info}>
          <h2>{obra.titulo}</h2>
          <p>{obra.autor_nombre || "Autor desconocido"}</p>
          <p>{obra.tecnica_nombre || "Técnica no disponible"}</p>
          <p>{obra.anio ?? "Año desconocido"}</p>
          <small style={styles.counter}>
            {index + 1} de {obras.length}
          </small>
        </div>
      </div>
    </div>
  );
};

const styles: any = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(10, 10, 10, 0.86)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    padding: "16px",
    boxSizing: "border-box",
  },

  modal: {
    position: "relative",
    width: "min(1100px, 100%)",
    height: "min(92vh, 840px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "16px",
    background: "#F7F8F7",
    padding: "16px 20px 14px",
    boxSizing: "border-box",
  },

  imageWrapper: {
    width: "100%",
    flex: 1,
    minHeight: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "transform 0.2s ease",
  },

  nav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(51, 105, 30, 0.95)",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "50%",
    zIndex: 10,
  },

  close: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    background: "rgba(255, 255, 255, 0.95)",
    border: "none",
    color: "#33691E",
    cursor: "pointer",
    borderRadius: "999px",
    width: "36px",
    height: "36px",
    display: "grid",
    placeItems: "center",
  },

  info: {
    marginTop: "8px",
    color: "#273226",
    textAlign: "center",
    lineHeight: 1.3,
    width: "100%",
  },
  counter: {
    color: "#5F6D5F",
  },
};