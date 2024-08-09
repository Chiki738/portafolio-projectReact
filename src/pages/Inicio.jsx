import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import perfil from "../img/foto-inicio.png";
import "../styles/inicio-style.css";
import cv from "../pdf/cv.pdf";

function Inicio() {
  return (
    <div>
      <Helmet>
        <title>Portafolio</title>
      </Helmet>

      <div className="inicio-div">
        <div className="presentacion-div">
          <main>
            <h1>PORTAFOLIO</h1>
            <p>
              Este portafolio destaca los conocimientos y los logros que se van
              obteniendo a lo largo de mi trayectoria profesional y
              personal.😉😉😊😊
            </p>
          </main>
        </div>
      </div>

      <div className="cartilla-div-container">
        <div className="cartilla-div">
          <figure className="cartilla-div-figure">
            <img src={perfil} alt="Perfil" title="Perfil" />
          </figure>

          <div className="cartilla-div-description">
            <h3>CARLOS ALZAMORA</h3>

            <p>
              Estudiante de Ingeniería de Sistemas e Informática en la
              Universidad Tecnológica del Perú, con conocimientos en desarrollo
              front-end.
            </p>

            <div className="cartilla-div-button">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cv; // Aquí se asigna la ruta del PDF importado
                  link.target = "_blank"; // El archivo se abrirá en una nueva pestaña
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}>
                Ver CV&nbsp;<i className="fa-solid fa-file"></i>
              </button>

              <a
                href="https://github.com/Chiki975/portafolio-projectReact"
                target="_blank">
                <button>
                  GitHub&nbsp;<i className="fa-brands fa-github"></i>
                </button>
              </a>

              <Link to="/Contacto">
                <button>
                  Contactar&nbsp;<i className="fa-solid fa-address-book"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
