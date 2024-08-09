import { Helmet } from "react-helmet-async";
import "../styles/sobreMi-style.css";
import fotoSobreMi from "../img/foto-sobremi.svg";

function SobreMi() {
  return (
    <div>
      <Helmet>
        <title>Sobre Mí</title>
      </Helmet>

      <div className="sobreMi-container">
        <div>
          <h2>SOBRE MÍ</h2>
          <div className="sobreMi">
            <figure className="sobreMi-container-figure">
              <img src={fotoSobreMi} alt="Perfil" title="Perfil" />
            </figure>

            <div className="sobreMi-informacion">
              <p>
                Mi nombre es <strong>Carlos Daniel Alzamora Huamán</strong> y
                soy estudiante de la carrera Ingeniería de Sistemas e
                Informática. Poseo conocimiento en HTML, CSS, JavaScript, React
                y Java. Mi objetivo es aprender más sobre el desarrollo web y
                las aplicaciones de escritorio. Me apasiona la informática y
                busco la excelencia académica.
              </p>

              <div className="informacion">
                <fieldset>
                  <legend>
                    <h3>
                      Cualidades y <br />
                      Aptitudes
                    </h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
