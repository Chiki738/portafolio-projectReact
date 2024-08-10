import excel from "../pdf/excel.pdf";
import "../styles/certificados-style.css";

function Certificados() {
  return (
    <div className="certificados-container">
      <h2>Certificados</h2>

      <div className="certificados">
        <div>
          <h3>Excel</h3>
          <iframe src={excel}></iframe>

          <h4>Descripción:</h4>
          <p>
            Certificado conseguido en la
            <strong>Universidad Texnologica del Peru</strong> en el curso
            <strong>Innovacion y transformacion digital</strong> del ciclo 10.
          </p>

          <button>DESCARGAR</button>
        </div>
      </div>
    </div>
  );
}

export default Certificados;
