/*import { ObraCarousel } from "../components/ObraCarousel";

export const FondoArtista = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ObraCarousel />
    </div>
  );
};*/

import { ObraCarousel } from "../components/ObraCarousel";

export const FondoArtista = () => {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
         <div style={styles.textBlock}>
          <h1 style={styles.title}>Francisco Antonio Cano</h1>
          <p style={styles.subtitle}>
            (Yarumal, Antioquia, 1865 - Bogotá, 1935)
          </p>
          <p>
            Tal vez el más ilustre representante del arte antioqueño. Recibió clases de pintura con Ángel María Palomino y con Horacio Marino Rodríguez aprende técnicas de dibujo.
          </p>
          <p>
            El pintor, escultor y grabador se formó en Bogotá y París. Cano realizó encargos para distintas instituciones y personajes influyentes de la política nacional.
          </p>
          <p>
            Su regreso a Medellín estuvo marcado por el sueño de impulsar la creación de una academia artística, que vería realizado con la apertura de la Escuela de música, pintura y escultura en 1910.
          </p>
          <p>
            Además de ser el artista más reconocido de su generación, se desempeñó como director de la Litografía Nacional, fue director y profesor de las Escuelas de Artes de Medellín y Bogotá y miembro de la Academia Colombiana de Bellas Artes.
          </p>
         </div>
      </section>

      <ObraCarousel />
    </div>
  );
};

const styles: any = {
  container: {
    width: "100%",
    overflowX: "hidden",
    background: "#0a0a0a",
    color: "#e5e5e5",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
  },

  textBlock: {
    maxWidth: "1000px", 
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.7,
  },

  title: {
    fontSize: "clamp(32px, 5vw, 56px)",
    margin: 0,
  },

  subtitle: {
    color: "#888",
    marginTop: "-10px",
    marginBottom: "10px",
  },

  gallery: {
    minHeight: "100vh",
    padding: "40px 24px",
  },
};