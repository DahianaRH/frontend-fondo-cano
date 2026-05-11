import {useState} from "react";
import { ObraCarousel } from "../components/ObraCarousel";

export const FondoArtista = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    const newSection = openSection === section ? null : section;

    setOpenSection(newSection);

    // esperar a que React renderice
    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
         <div style={styles.textBlock}>
          <h1 style={styles.title}>Francisco Antonio Cano</h1>

          <p style={styles.subtitle}>
            (Yarumal, Antioquia, 1865 - Bogotá, 1935)
          </p>

          <div style={styles.accordionWrapper}>
            {/* ACORDEÓN */}
            <div style={styles.accordionContainer}>
              {/* BIOGRAFÍA */}
              <div style={styles.accordionItem}>
                <button
                  style={styles.accordionButton}
                  onClick={() => toggleSection("biografia")}
                >
                  Biografía
                </button>

                {openSection === "biografia" && (
                  <div id="biografia" style={styles.accordionContent}>
                    <p>
                      Francisco Antonio Cano Cardona (1865–1935) fue una de las figuras centrales en la consolidación
                       del arte académico en Colombia a finales del siglo XIX y comienzos del XX. Pintor, grabador, 
                       escultor, docente, editor y promotor cultural, su trayectoria se inscribe en los procesos de 
                       construcción de una identidad visual para la nación, en diálogo con las transformaciones sociales y
                        políticas de su tiempo.
                    </p>

                    <p>
                      Nació el 24 de noviembre de 1865 en Yarumal, Antioquia, en el seno de una familia de tradición artesanal. 
                      Su padre, José María Cano, le transmitió desde temprana edad conocimientos en platería, dibujo y modelado, 
                      lo que marcó el inicio de una formación artística autodidacta complementada luego por estudios formales. 
                      Durante su juventud participó en iniciativas culturales locales, como el periódico manuscrito Los Anales del 
                      Club, mientras desarrollaba sus primeras experiencias en dibujo y escultura.
                    </p>

                    <p>
                      En la década de 1880 se trasladó a Medellín, donde entró en contacto con círculos artísticos e intelectuales y 
                      comenzó a trabajar como retratista y docente. Su participación en exposiciones regionales en la década de 1890 
                      lo posicionó como uno de los pioneros de la pintura de paisaje en Colombia. Paralelamente, incursionó en el grabado 
                      y en la edición de publicaciones ilustradas, como El Repertorio, una de las primeras revistas de este tipo en la ciudad.
                    </p>

                    <p>
                      En 1898 viajó a Europa gracias a una beca otorgada por el Congreso Nacional. Durante su estancia en París ingresó a la 
                      Académie Julian y tuvo contacto con corrientes artísticas contemporáneas, ampliando su formación académica. Recorrió además 
                      varios países europeos antes de regresar a Medellín en 1901, donde retomó su labor como artista y formador, influyendo en una generación de creadores.
                    </p>

                    <p>
                      A comienzos del siglo XX, Cano desempeñó un papel fundamental en la institucionalización del arte en Colombia. Participó en 
                      la creación del Instituto de Bellas Artes de Medellín y posteriormente se trasladó a Bogotá, donde asumió la dirección de la 
                      Litografía Nacional y ejerció como profesor y rector de la Escuela de Bellas Artes. Su labor pedagógica y administrativa contribuyó 
                      significativamente a la profesionalización de la enseñanza artística en el país.
                    </p>

                    <p>
                      Su obra pictórica se caracteriza por un interés en los temas históricos, sociales y simbólicos. Entre sus pinturas más representativas 
                      se encuentra Horizontes (1913), considerada una imagen emblemática de la colonización antioqueña, en la que sintetiza ideales de progreso, 
                      familia y territorio. Asimismo, destaca Paso del Ejército Libertador por el Páramo de Pisba (1922), una escena histórica que representa la gesta 
                      independentista liderada por Simón Bolívar, consolidándose como una de las imágenes más difundidas del imaginario nacional.
                    </p>

                    <p>
                      Además de su producción artística, Cano desarrolló una intensa actividad intelectual: escribió sobre arte, dictó conferencias y fundó 
                      publicaciones como Lectura y Arte, contribuyendo a la circulación de ideas estéticas en el contexto colombiano. Su práctica también incluyó 
                      la escultura pública y proyectos arquitectónicos, evidenciando una concepción amplia del quehacer artístico.
                    </p>

                    <p>
                      En sus últimos años, continuó vinculado a la docencia y a la reflexión sobre el arte, a pesar de dificultades de salud. En 1930 fue reconocido 
                      como miembro de la Academia Colombiana de Bellas Artes. Falleció en Bogotá el 11 de mayo de 1935.
                    </p>

                    <p>
                      Tras su muerte, su obra ha sido objeto de múltiples exposiciones y revisiones críticas, consolidando su lugar como una figura clave en la historia 
                      del arte colombiano, tanto por su producción como por su incidencia en la formación de instituciones y generaciones de artistas.
                    </p>
                    <p style={styles.credit}>Textos recopilados por: Liliana Correa Rodríguez
                    <br />Colección de Artes Museo Universitario
                    </p>

                  </div>
                )}
              </div>

              {/* CRONOLOGÍA */}
              <div style={styles.accordionItem}>
                <button
                  style={styles.accordionButton}
                  onClick={() => toggleSection("cronologia")}
                >
                  Cronología
                </button>

                {openSection === "cronologia" && (
                  <div id="cronologia" style={styles.accordionContent}>
                    <p><strong>1865: Origen</strong> Nace el 24 de noviembre en Yarumal, Antioquia, en el seno de una familia de tradición artesanal. 
                    Desde niño aprende de su padre oficios como la platería, el dibujo y el modelado, base de su formación artística inicial.
                    </p>
                    <p><strong>1883: Primeros gestos culturales</strong> Participa en el periódico manuscrito Los Anales del Club, donde realiza 
                      dibujos y viñetas. Este momento marca su entrada en los circuitos culturales locales.
                    </p>

                    <p><strong>1885-1890: Llegada a Medellín</strong>Se instala en Medellín, donde trabaja como retratista y profesor de dibujo. 
                    Entra en contacto con círculos intelectuales y comienza a consolidarse como artista.
                    </p>

                    <p><strong>1892-1893: Emergencia pública</strong> Participa en las primeras exposiciones de arte en Medellín, 
                    posicionándose como uno de los pioneros del paisaje en Colombia.
                    </p>

                    <p><strong>1896-1897: Cultura impresa</strong> Cofunda El Repertorio, una de las primeras revistas ilustradas de Antioquia, 
                    donde combina imagen y reflexión sobre arte.
                    </p>

                    <p><strong>1898-1901: Formación en Europa</strong> Viaja a París con una beca estatal y estudia en la Académie Julian y la Académie Colarossi. 
                    Recorre varios países europeos y entra en contacto con el arte moderno, aunque mantiene una orientación académica. 
                    </p>

                    <p><strong>1901: Regreso y magisterio</strong> Regresa a Medellín y abre taller. Inicia una intensa labor pedagógica que influirá en futuras generaciones de artistas colombianos.
                    </p>

                    <p><strong>1903-1906: Proyecto editorial</strong> Funda la revista Lectura y Arte, clave en la difusión de ideas estéticas y en la modernización cultural de la región. 
                    </p>

                    <p><strong>1910-1911: Institucionalización del arte</strong> Participa en la creación del Instituto de Bellas Artes de Medellín, consolidando la enseñanza artística formal en la ciudad.
                    </p>

                    <p><strong>1912: Traslado a Bogotá</strong> Se radica en Bogotá como director de la Litografía Nacional e ingresa como profesor a la Escuela de Bellas Artes, integrándose al campo artístico nacional.
                    </p>

                    <p><strong>1913: Imagen de nación</strong> Realiza Horizontes, obra emblemática que representa la colonización antioqueña y se convierte en un símbolo de identidad regional y nacional.  
                    </p>

                    <p><strong>1919-1922: Pintura histórica</strong> Recibe el encargo de representar la gesta independentista y pinta Paso del Ejército Libertador por el Páramo de Pisba, escena asociada a la 
                    campaña de Simón Bolívar, consolidándose como referente del arte histórico en Colombia.
                    </p>

                    <p><strong>1923-1927: Dirección académica</strong> Asume la rectoría de la Escuela de Bellas Artes de Bogotá. Su gestión refleja tensiones entre el academicismo y las nuevas corrientes artísticas emergentes.  
                    </p>

                    <p><strong>1930: Reconocimiento institucional</strong> Es nombrado miembro de la Academia Colombiana de Bellas Artes, en reconocimiento a su trayectoria y aporte al arte nacional.
                    </p>

                    <p><strong>1935: Final de vida</strong> Fallece en Bogotá el 11 de mayo, tras una vida dedicada al arte, la enseñanza y la construcción de una imagen cultural del país.
                    </p>
                    <p style={styles.credit}>Textos recopilados por: Liliana Correa Rodríguez
                    <br />Colección de Artes Museo Universitario
                    </p>
                  </div>
                )}
              </div>

              {/* SOBRE LA OBRA */}
              <div style={styles.accordionItem}>
                <button
                  style={styles.accordionButton}
                  onClick={() => toggleSection("obra")}
                >
                  Sobre la obra
                </button>

                {openSection === "obra" && (
                  <div id="obra" style={styles.accordionContent}>
                    <p>
                      La obra de Francisco Antonio Cano se caracteriza por una práctica diversa que abarca la pintura al óleo, el dibujo, el grabado —especialmente en madera y fotograbado— y la escultura en materiales como el mármol 
                      y el bronce. Su lenguaje se inscribe en una tradición académica, con especial atención al dibujo, la composición y el modelado de la figura, pero también incorpora una sensibilidad hacia el paisaje y los tipos locales. 
                      Entre sus obras más representativas destacan Horizontes (1913), donde sintetiza una imagen idealizada de la colonización antioqueña, y Paso del Ejército Libertador por el Páramo de Pisba (1922), una escena de carácter 
                      histórico vinculada a la gesta independentista liderada por Simón Bolívar. A estas se suman sus retratos, paisajes y proyectos escultóricos públicos, en los que se evidencia su interés por construir una iconografía nacional, 
                      articulando arte, historia y representación social.
                    </p>
                    <p style={styles.credit}>Textos recopilados por: Liliana Correa Rodríguez
                    <br />Colección de Artes Museo Universitario
                    </p>
                  </div>
                  
                )}
              </div>
            </div>
          </div>
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
    background: "#FFFFFF",
    color: "#8BC34A",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 24px",
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
    color: "#8BC34A",
    marginTop: "-10px",
    marginBottom: "10px",
  },

  accordionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  
  accordionItem: {
    border: "1px solid #8BC34A",
    borderRadius: "8px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "900px",
    minWidth: "900px",
    boxSizing: "border-box",
    scrollMarginTop: "100px",
  },

  accordionButton: {
    width: "100%",
    background: "#8BC34A",
    color: "#FFFFFF",
    border: "none",
    padding: "16px 20px",
    textAlign: "left" as const,
    fontSize: "18px",
    fontWeight: 600,
    cursor: "pointer",
  }, 

  accordionContent: {
  background: "#FFFFFF",
  color: "#333333",
  padding: "20px",
  minHeight: "220px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 0.3s ease",
  },

  accordionWrapper: {
  marginTop: "40px",
  minHeight: "420px",
},

  credit: {
  fontSize: "12px",
  color: "#777",
  marginTop: "40px",
  lineHeight: 1.5,
  textAlign: "right" as const,
  fontStyle: "italic",
},

  gallery: {
    minHeight: "100vh",
    padding: "80px 24px",
  },
};