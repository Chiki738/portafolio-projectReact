import "../styles/certificados-style.css";

// Importa todos los PDFs
import excel from "../pdf/excel.pdf";
import ingles from "../pdf/ingles.pdf";
import soporte from "../pdf/soporte.pdf";
import challenge from "../pdf/5.pdf";
import chatgpt from "../pdf/6.pdf";
import foco from "../pdf/7.pdf";
import git from "../pdf/8.pdf";
import htmlcss1 from "../pdf/10.pdf";
import htmlcss2 from "../pdf/11.pdf";
import htmlcss3 from "../pdf/12.pdf";
import htmlcss4 from "../pdf/13.pdf";
import logicajs from "../pdf/15.pdf";
import logica from "../pdf/16.pdf";
// Añade más importaciones según sea necesario

const pdfs = [
  {
    src: excel,
    title: "EXCEL",
    description:
      "Certificado obtenido en la Universidad Tecnológica del Perú por haber completado el curso de Herramientas Informáticas para la Toma de Decisiones correspondiente al 5° ciclo.",
  },
  {
    src: ingles,
    title: "INGLES",
    description:
      "Certificado obtenido en la Universidad Tecnológica del Perú por haber completado el curso de Ingles correspondiente al 4° ciclo.",
  },
  {
    src: soporte,
    title: "SOPORTE",
    description:
      "Certificado obtenido en la Universidad Tecnológica del Perú por haber completado el curso de Arquitectura de Computadoras correspondiente al 4° ciclo.",
  },
  {
    src: challenge,
    title: "CHALLENGE: ENCRIPTADOR",
    description:
      "Certificado obtenido en el PROGRAMA ONE, con el desafio de encriptador de texto.",
  },
  {
    src: chatgpt,
    title: "CHAT-GPT",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación.",
  },
  {
    src: foco,
    title: "FOCO",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Innovación y Gestión.",
  },
  {
    src: git,
    title: "GIT Y GITHUB",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación",
  },
  {
    src: htmlcss1,
    title: "HTML y CSS 1",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación. Contenido sobre HTML y CSS, ambientes de desarrollo, estructurade archivos y tags.",
  },
  {
    src: htmlcss2,
    title: "HTML y CSS 2",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación. Contenido sobre HTML y CSS, clases, Posicionamiento y Flexbox ",
  },
  {
    src: htmlcss3,
    title: "HTML y CSS 3",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación. Contenido sobre HTML y CSS, header, footer y variables CSS",
  },
  {
    src: htmlcss4,
    title: "HTML y CSS 4",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación. Contenido sobre HTML y CSS, trabajando con responsividad y publicación de proyectos",
  },
  {
    src: logicajs,
    title: "LÓGICA DE PROGRAMACIÓN CON JS",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación. Programación con JavaScript",
  },
  {
    src: logica,
    title: "LÓGICA DE PROGRAMACIÓN",
    description:
      "Certificado obtenido en PROGRAMA ONE, en la categoría de Programación. Programación con JavaScript, explorar funciones ylistas",
  },
];

function Certificados() {
  return (
    <div className="certificados-container">
      <h3>Certificados</h3>

      <div className="certificados">
        {pdfs.map((pdf, index) => (
          <div key={index}>
            <h4>{pdf.title}</h4>

            <div className="iframe-container">
              <iframe
                src={`${pdf.src}#toolbar=0&navpanes=0&scrollbar=0`}
                title={pdf.title}></iframe>
            </div>

            <p>
              <strong>Descripción:</strong>&nbsp;{pdf.description}
            </p>

            <a href={pdf.src} target="_blank" rel="noopener noreferrer">
              <button>DESCARGAR</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificados;
