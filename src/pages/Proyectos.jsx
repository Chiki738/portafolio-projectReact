import "../styles/proyectos-style.css";
import { proyectosLogos } from "../data/proyectosimg";
import { getSelectedLogos } from "../data/selectedLogos";

function Proyectos() {
  return (
    <div className="proyectos-container">
      <h3>PROYECTOS</h3>
      <div className="proyectos">
        {proyectosLogos.map((proyecto, index) => {
          const herramientas = proyecto.herramientas.split(', ').map(herramienta => herramienta.toLowerCase());
          const logos = getSelectedLogos(herramientas);

          return (
            <div key={index} className="proyecto-card">
              <h4>{proyecto.titulo}</h4>
              <div>
                <figure className="proyectos-figure">
                  <img src={proyecto.archivo} alt={proyecto.titulo} />
                </figure>
                <p>
                  <strong>DESCRIPCIÓN:</strong>&nbsp;{proyecto.descripción}
                </p>
                <div className="proyectos-tecnologia">
                  <h5>Tecnología usada:</h5>
                  <div className="logos">
                    {logos.map((logo, i) => (
                      <figure key={i}>
                        <img src={logo.archivo} alt={logo.nombre} />
                      </figure>
                    ))}
                  </div>
                </div>
                <div className="proyecto-links">
                  <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {proyecto.web && (
                    <a href={proyecto.web} target="_blank" rel="noopener noreferrer">
                      Web
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;