import excel from "../pdf/1.pdf";
import ingles from "../pdf/2.pdf";
import soporte from "../pdf/2.pdf";
import "../styles/certificados-style.css";

function Certificados() {
  return (
    <div className="certificados-container">
      <h3>Certificados</h3>

      <div className="certificados">
        <div>
          <h3>Excel</h3>
          <iframe src={`${excel}#toolbar=0&navpanes=0&scrollbar=0`}></iframe>

          <h4>Descripción:</h4>
          <p>
            Certificado obtenido en la{" "}
            <strong>Universidad Tecnológica del Perú</strong> por haber
            completado el curso de{" "}
            <strong>Innovación y Transformación Digital</strong> correspondiente
            al ciclo 10.
          </p>

          <button>DESCARGAR</button>
        </div>

        <div>
          <h3>Excel</h3>
          <iframe src={`${excel}#toolbar=0&navpanes=0&scrollbar=0`}></iframe>

          <h4>Descripción:</h4>
          <p>
            Certificado obtenido en la{" "}
            <strong>Universidad Tecnológica del Perú</strong> por haber
            completado el curso de{" "}
            <strong>Innovación y Transformación Digital</strong> correspondiente
            al ciclo 10.
          </p>

          <button>DESCARGAR</button>
        </div>

        <div>
          <h3>Excel</h3>
          <iframe src={`${excel}#toolbar=0&navpanes=0&scrollbar=0`}></iframe>

          <h4>Descripción:</h4>
          <p>
            Certificado obtenido en la{" "}
            <strong>Universidad Tecnológica del Perú</strong> por haber
            completado el curso de{" "}
            <strong>Innovación y Transformación Digital</strong> correspondiente
            al ciclo 10.
          </p>

          <button>DESCARGAR</button>
        </div>
      </div>
    </div>
  );
}

export default Certificados;
