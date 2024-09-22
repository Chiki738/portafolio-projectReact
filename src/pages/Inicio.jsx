import { Helmet } from "react-helmet-async";
import perfil from "../assets/fotoInicio.svg";
import "../styles/inicio-style.css";
import cv from "../pdf/Carlos_Alzamora_CV_FrontEnd.pdf";

function Inicio() {
  return (
    <>
      <Helmet>
        <title>Portafolio</title>
      </Helmet>

      <div className="inicio-div">
        <div className="presentacion-div">
          <main>
            <h1>PORTAFOLIO</h1>
            <p>
              Este portafolio destaca los conocimientos y los logros que se van
              obteniendo a lo largo de mi trayectoria profesional y personal.
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
              Ingeniero de Sistemas e Informática en la Universidad Tecnológica
              del Perú, con conocimientos en desarrollo front-end.
            </p>

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
