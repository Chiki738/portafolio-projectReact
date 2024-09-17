import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/sobreMi-style.css";
import fotoSobreMi from "../assets/foto-sobremi.svg";

function SobreMi() {
  const [visibleFieldset, setVisibleFieldset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      advanceFieldset();
    }, 8000);

    return () => clearInterval(interval); // Limpieza al desmontar el componente
  }, [visibleFieldset]);

  const advanceFieldset = () => {
    setVisibleFieldset((prevVisibleFieldset) => (prevVisibleFieldset + 1) % 3);
  };

  const goBackFieldset = () => {
    setVisibleFieldset((prevVisibleFieldset) =>
      prevVisibleFieldset === 0 ? 2 : prevVisibleFieldset - 1
    );
  };

  return (
    <>
      <Helmet>
        <title>Sobre Mí</title>
      </Helmet>

      <div className="sobreMi-container">
        <div>
          <h3>SOBRE MÍ</h3>

          <div className="sobreMi-descripcion">
            <figure>
              <img src={fotoSobreMi} alt="Perfil" title="Perfil" />
            </figure>

            <div className="sobreMi-informacion-container">
              <div className="sobreMi-informacion">
                <fieldset
                  className={visibleFieldset === 0 ? "visible" : "hidden"}>
                  <legend>
                    <h4>Descripción</h4>
                  </legend>
                  <p>
                    Mi nombre es <strong>Carlos Alzamora</strong>{" "}
                    y soy estudiante de la carrera Ingeniería de Sistemas e
                    Informática. Poseo conocimiento en HTML, CSS, JavaScript,
                    React y Java. Mi objetivo es aprender más sobre el
                    desarrollo web y las aplicaciones de escritorio.
                  </p>
                </fieldset>

                <fieldset id="cualidades"
                  className={visibleFieldset === 1 ? "visible" : "hidden"}>
                  <legend>
                    <h4>Cualidades y Aptitudes</h4>
                  </legend>
                  <ul>
                    <li>Creatividad</li>
                    <li>Productividad</li>
                    <li>Empatia</li>
                    <li>Respeto</li>
                    <li>Paciencia</li>
                    <li>Organización</li>
                    <li>Humildad</li>
                    <li>Escucha activa</li>
                    <li>Disciplina</li>
                  </ul>
                </fieldset>

                <fieldset id="hobbies"
                  className={visibleFieldset === 2 ? "visible" : "hidden"}>
                  <legend>
                    <h4>Hobbies</h4>
                  </legend>
                  <ul>
                    <li>Novelas Ligeras</li>
                    <li>Manga</li>
                    <li>Anime</li>
                    <li>Programar</li>
                    <li>Escuchar música</li>
                    <li>Series</li>
                    <li>Investigar</li>
                  </ul>
                </fieldset>
              </div>

              <div className="navigation-arrows">
                <button onClick={goBackFieldset}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button onClick={advanceFieldset}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreMi;
