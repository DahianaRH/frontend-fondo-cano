import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
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

  const [zoom, setZoom] = useState(1);

  const next = () => {
    if (index < obras.length - 1) onNavigate(index + 1);
  };

  const prev = () => {
    if (index > 0) onNavigate(index - 1);
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* cerrar */}
        <button onClick={onClose} style={styles.close}>
          <X size={28} />
        </button>

        {/* navegación */}
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
            style={{
                ...styles.image,
                transform: `scale(${zoom})`,
            }}
            />
        )}
        </div>

        {/* info */}
        <div style={styles.info}>
          <h2>{obra.titulo}</h2>
          <p>{obra.autor}</p>
          <p>{obra.tecnica}</p>
          <p>{obra.anio ?? "Año desconocido"}</p>
        </div>
      </div>
    </div>
  );
};

const styles: any = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.92)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },

  modal: {
    position: "relative",
    width: "90vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  // 🔥 contenedor que limita la imagen
  imageWrapper: {
    width: "100%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // clave
  },

  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain", // 🔥 clave para centrar correctamente
    transition: "transform 0.2s ease",
  },

  // botones SIEMPRE por encima
  nav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "50%",
    zIndex: 10, // 🔥 evita que la imagen los tape
  },

  close: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },

  info: {
    marginTop: "10px",
    color: "#fff",
    textAlign: "center",
  },
};