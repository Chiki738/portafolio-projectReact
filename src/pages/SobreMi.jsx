import { Helmet } from "react-helmet-async";
import "../styles/sobreMi-style.css";
import fotoSobreMi from "../assets/foto-sobremi.svg";

function SobreMi() {
  return (
    <>
      <Helmet>
        <title>Sobre Mí</title>
      </Helmet>

      <div className="sobreMi-container">
        <div>
          <h3>SOBRE MÍ</h3>
          <div className="sobreMi-descripcion">
            <div>
              <figure>
                <img src={fotoSobreMi} alt="Perfil" title="Perfil" />
              </figure>

              <p>
                Mi nombre es <strong>Carlos Daniel Alzamora Huamán</strong> y
                soy estudiante de la carrera Ingeniería de Sistemas e
                Informática. Poseo conocimiento en HTML, CSS, JavaScript, React
                y Java. Mi objetivo es aprender más sobre el desarrollo web y
                las aplicaciones de escritorio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sobreMi-informacion">
        <div>
          <fieldset>
            <legend>
              <h3>Cualidades y Aptitudes</h3>
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

          <fieldset>
            <legend>
              <h3>Hobbies</h3>
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
      </div>
    </>
  );
}

export default SobreMi;
