import { Link } from "react-router-dom";
import { HeroCarousel } from "../components/HeroCarousel";
import cano from "../images/cano.jpg";

export const Home = () => {
  return (
    <div style={styles.container}>
      {/* HERO */}
      <section style={styles.hero}>
        {/* IZQUIERDA */}
        <div style={styles.left}>
        <h1 style={styles.title}>MUUA</h1>
          <p style={styles.tagline}>
            Museo Universitario de la Universidad de Antioquia
          </p>

          <p style={styles.description}>
            Un espacio de conservación, investigación y experiencia del patrimonio artístico y científico.
          </p>
        </div>

        {/* DERECHA */}
        <div style={styles.right}>
          <HeroCarousel />
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Quiénes somos</h2>

        <div style={styles.textBlock}>
          <p>
            El Museo Universitario de la Universidad de Antioquia MUUA fue creado en 1970, 
            mediante el Acuerdo No. 3 del Consejo Superior Universitario, producto de la fusión 
            de dos antiguos museos: el Museo de Ciencias Naturales, creado en 1942 por el profesor 
            Eduardo Zuluaga, y el Museo de Antropología, constituido en 1943 por el profesor Graciliano 
            Arcila Vélez. Por esta misma disposición, se conformó la Colección de Artes Visuales, enfocada 
            en la recuperación y la conservación de los valores más importantes de la plástica regional y nacional. 
          </p>
          <p>
            El MUUA ofrece a sus visitantes cuatro colecciones: Antropología, Artes Visuales, Ciencias Naturales 
            e Historia de la Universidad. Gracias a la consolidación del proyecto de museo contemporáneo con la 
            creación en las áreas de Educación y Museografía, también brinda una diversa programación académica y cultural.
          </p>
          <p>
            El MUUA es un centro de gestión y dinamización de procesos culturales y para el encuentro, 
            la sensibilización y la formación de públicos internos y externos en diversos lenguajes. 
            Su principal propósito y razón de ser es la difusión y reinterpretación del patrimonio, 
            desde su identidad y valor como museo de una universidad pública.
          </p>
        </div>
      </section>

      {/* FONDOS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Colecciones</h2>

        <Link to="/fondo/cano" style={styles.card}>
          <img src={cano} style={styles.cardImage} />

          <div style={styles.cardOverlay}>
            <h3>Francisco Cano</h3>
            <span>Ver colección →</span>
          </div>
        </Link>
      </section>
    </div>
  );
};

const styles: any = {
  container: {
    background: "#0a0a0a",
    color: "#e5e5e5",
    width: "100%",
    overflowX: "hidden",
  },

  hero: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    padding: "0 6%",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  right: {
    height: "70vh",
  },

  title: {
    fontSize: "clamp(50px, 6vw, 110px)",
    fontFamily: "Playfair Display, serif",
    margin: 0,
  },

  tagline: {
    color: "#999",
    fontSize: "18px",
  },

  description: {
    maxWidth: "500px",
    lineHeight: 1.6,
    color: "#cfcfcf",
  },

  section: {
    padding: "100px 6%",
  },

  heading: {
    fontSize: "26px",
    marginBottom: "30px",
  },

  textBlock: {
    maxWidth: "750px",
    lineHeight: 1.8,
  },

  card: {
    display: "block",
    height: "350px",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    textDecoration: "none",
  },

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "grayscale(20%)",
    transform: "scale(1.05)",
  },

  cardOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "20px",
    color: "#fff",
  },
};