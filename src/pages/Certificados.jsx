import "../styles/certificados-style.css";
import { certificados } from "../data/certificadospdf.jsx"; // Antes: "certificates" no existía

function Certificados() {
  return (
    <div className="certificados-container">
      <h3>Certificados</h3>

      <div className="certificados">
        {certificados.map(
          (
            pdf,
            index // Antes: "pdfs.map" (no existía)
          ) => (
            <div key={index}>
              <h4>{pdf.titulo}</h4> {/* Antes: "pdf.title" */}
              <p>
                <strong>Descripción:</strong>&nbsp;{pdf.descripcion}{" "}
                {/* Antes: "pdf.description" */}
              </p>
              <a href={pdf.archivo} target="_blank" rel="noopener noreferrer">
                {" "}
                {/* Antes: "pdf.src" */}
                <button>DESCARGAR</button>
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Certificados;
