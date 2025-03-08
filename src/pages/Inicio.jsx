import { Helmet } from "react-helmet-async";
import "../styles/inicio-style.css";
import { getSelectedLogos } from "../data/selectedLogos";
import { logos } from "../data/logos.jsx";
import perfil from "../assets/fotoInicio.svg";
import cv from "../pdf/cv/CV_Carlos_Alzamora.pdf";

const selectedImages = ["html", "css", "js", "react", "github", "vercel"];

const herramientas = {
  tecnologias: getSelectedLogos(selectedImages).map((logo) => ({
    src: logo.archivo,
    alt: logo.nombre,
  })),
};

function Inicio() {
  return (
    <>
      <Helmet>
        <title>Portafolio</title>
      </Helmet>

      <div className="inicio-div">
        <main className="presentacion-div">
          <h1>PORTAFOLIO</h1>
          <div className="herramientas">
            {herramientas.tecnologias.map((tec, i) => (
              <figure key={i}>
                <img src={tec.src} alt={tec.alt} />
              </figure>
            ))}
          </div>
          <p>
            Este portafolio destaca los conocimientos y los logros que se van
            obteniendo a lo largo de mi trayectoria profesional y personal.
          </p>
        </main>
      </div>

      <hr />

      <div className="cartilla-div-container" id="sobreMi">
        <div className="cartilla-div">
          <figure className="cartilla-div-figure">
            <img src={perfil} alt="Perfil" title="Perfil" />
          </figure>

          <div className="cartilla-div-description">
            <h3>CARLOS ALZAMORA</h3>

            <p>
              Estudiante de Ingeniería de Sistemas con experiencia en desarrollo
              web, bases de datos y análisis de datos, destacando en soluciones
              escalables y trabajo en equipo.
            </p>

            <div className="logos-container">
              <h4>Tecnologias de desarrollo adquiridas</h4>
              <div className="logos">
                {logos.map((tec, i) => (
                  <figure key={i}>
                    <img src={tec.archivo} alt={tec.nombre} />
                  </figure>
                ))}
              </div>
            </div>

            <div className="cartilla-div-button">
              <a href={cv} target="_blanck">
                <button>
                  Ver CV&nbsp;<i className="fa-solid fa-file"></i>
                </button>
              </a>

              <a
                href="https://github.com/Chiki975/portafolio-projectReact"
                target="_blank">
                <button>
                  GitHub&nbsp;<i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
