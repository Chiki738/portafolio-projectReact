import "../styles/certificados-style.css";

// Importa todos los PDFs
import excel from "../pdf/excel.pdf";
import ingles from "../pdf/ingles.pdf";
import soporte from "../pdf/soporte.pdf";
import challenge from "../pdf/challenge.pdf";
import chatgpt from "../pdf/chatgpt.pdf";
import foco from "../pdf/foco.pdf";
import git from "../pdf/git.pdf";
import htmlcss1 from "../pdf/htmlycss1.pdf";
import htmlcss2 from "../pdf/htmlycss2.pdf";
import htmlcss3 from "../pdf/htmlycss3.pdf";
import htmlcss4 from "../pdf/htmlycss4.pdf";
import logicajs from "../pdf/logicaprogramaacionjs.pdf";
import logica from "../pdf/logicaprogramaacion.pdf";
// Añade más importaciones según sea necesario

const pdfs = [
  {
    src: excel,
    title: "EXCEL",
    description:
      "Certificado de competencia en Excel avanzado, otorgado por la Universidad Tecnológica del Perú, tras la finalización exitosa del curso de Herramientas Informáticas para la Toma de Decisiones en el 5° ciclo. Este curso profundiza en técnicas de análisis de datos y toma de decisiones empresariales utilizando Excel.",
  },
  {
    src: ingles,
    title: "INGLÉS",
    description:
      "Certificación obtenida en la Universidad Tecnológica del Perú, correspondiente al 4° ciclo, por haber completado satisfactoriamente el curso de Inglés. Este certificado refleja un dominio intermedio del idioma, enfocado en habilidades comunicativas y comprensión lectora.",
  },
  {
    src: soporte,
    title: "SOPORTE TÉCNICO",
    description:
      "Certificado por la Universidad Tecnológica del Perú en el área de Arquitectura de Computadoras. Este reconocimiento se obtuvo al culminar el curso en el 4° ciclo, donde se adquirieron conocimientos esenciales sobre soporte técnico y mantenimiento de hardware.",
  },
  {
    src: challenge,
    title: "CHALLENGE: ENCRIPTADOR",
    description:
      "Certificación obtenida en el PROGRAMA ONE por completar el desafío de desarrollo de un encriptador de texto. Este reto involucró la aplicación de principios de seguridad informática y criptografía básica, demostrando competencias en lógica de programación.",
  },
  {
    src: chatgpt,
    title: "CHAT-GPT",
    description:
      "Certificado de participación en el PROGRAMA ONE, centrado en el uso de tecnologías avanzadas como Chat-GPT. Este curso abarcó la implementación de modelos de lenguaje natural y su integración en aplicaciones prácticas dentro del ámbito de la programación.",
  },
  {
    src: foco,
    title: "GESTIÓN Y FOCO",
    description:
      "Certificación obtenida en el PROGRAMA ONE en la categoría de Innovación y Gestión. Este certificado destaca la capacidad para gestionar proyectos con un enfoque innovador y metodologías ágiles, esenciales para el liderazgo en entornos tecnológicos.",
  },
  {
    src: git,
    title: "CONTROL DE VERSIONES: GIT Y GITHUB",
    description:
      "Certificado de competencia en el manejo de Git y GitHub, otorgado por el PROGRAMA ONE. Este curso profundiza en el control de versiones, colaboración en proyectos de desarrollo, y la gestión eficiente del código fuente a través de estas herramientas.",
  },
  {
    src: htmlcss1,
    title: "INTRODUCCIÓN A HTML Y CSS",
    description:
      "Certificación obtenida en el PROGRAMA ONE por completar la primera etapa del curso de HTML y CSS. Este módulo abarca los conceptos fundamentales de la estructura web, incluyendo etiquetas básicas, manejo de archivos y preparación del entorno de desarrollo.",
  },
  {
    src: htmlcss2,
    title: "HTML Y CSS AVANZADO",
    description:
      "Certificado obtenido en el PROGRAMA ONE en la segunda etapa del curso de HTML y CSS. Enfocado en el desarrollo de layouts más complejos utilizando clases, posicionamiento avanzado, y Flexbox para la creación de diseños web responsivos.",
  },
  {
    src: htmlcss3,
    title: "DESARROLLO DE COMPONENTES WEB",
    description:
      "Certificado de competencia en la tercera etapa del curso de HTML y CSS del PROGRAMA ONE. Este nivel abarca el desarrollo de componentes web como headers y footers, y la utilización de variables CSS para la personalización avanzada de estilos.",
  },
  {
    src: htmlcss4,
    title: "RESPONSIVE DESIGN Y PUBLICACIÓN WEB",
    description:
      "Certificación obtenida en el PROGRAMA ONE tras completar la última fase del curso de HTML y CSS. Este módulo se enfoca en técnicas de diseño responsivo, optimización para dispositivos móviles, y la publicación de proyectos en la web.",
  },
  {
    src: logicajs,
    title: "LÓGICA DE PROGRAMACIÓN CON JAVASCRIPT",
    description:
      "Certificado del PROGRAMA ONE que valida competencias en lógica de programación utilizando JavaScript. Este curso incluye la resolución de problemas algorítmicos, estructuras de control, y manejo de eventos en el contexto de aplicaciones web.",
  },
  {
    src: logica,
    title: "FUNDAMENTOS DE LÓGICA DE PROGRAMACIÓN",
    description:
      "Certificación obtenida en el PROGRAMA ONE en lógica de programación, enfocada en el uso de JavaScript para desarrollar soluciones a problemas comunes en programación, incluyendo el uso de funciones, arrays, y control de flujo.",
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
