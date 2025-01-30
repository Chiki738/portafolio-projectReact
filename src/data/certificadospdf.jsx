import excel from "../pdf/certificados/excel.pdf";
import ingles from "../pdf/certificados/ingles.pdf";
import soporte from "../pdf/certificados/soporte.pdf";
import git from "../pdf/certificados/git.pdf";
import htmlcss from "../pdf/certificados/htmlycss.pdf";
import logicadeprogramacion from "../pdf/certificados/logicaprogramacion.pdf";

export const certificados = [
  {
    nombre: "excel",
    titulo: "Excel",
    descripcion:
      "Certificado de competencia en Excel avanzado, otorgado por la Universidad Tecnológica del Perú, tras la finalización exitosa del curso de Herramientas Informáticas para la Toma de Decisiones en el 5° ciclo.",
    archivo: excel,
  },
  {
    nombre: "ingles",
    titulo: "Inglés",
    descripcion:
      "Certificación obtenida en la Universidad Tecnológica del Perú, correspondiente al 4° ciclo, por haber completado satisfactoriamente el curso de Inglés. Este certificado refleja un dominio intermedio del idioma, enfocado en habilidades comunicativas y comprensión lectora.",
    archivo: ingles,
  },
  {
    nombre: "soporte",
    titulo: "Soporte Técnico",
    descripcion:
      "Certificado por la Universidad Tecnológica del Perú en el área de Arquitectura de Computadoras. Este reconocimiento se obtuvo al culminar el curso en el 4° ciclo, donde se adquirieron conocimientos esenciales sobre soporte técnico y mantenimiento de hardware.",
    archivo: soporte,
  },
  {
    nombre: "git",
    titulo: "Git y Github",
    descripcion:
      "Certificado de competencia en el manejo de Git y GitHub, otorgado por el PROGRAMA ONE. Este curso profundiza en el control de versiones, colaboración en proyectos de desarrollo, y la gestión eficiente del código fuente a través de estas herramientas.",
    archivo: git,
  },
  {
    nombre: "htmlcss",
    titulo: "HTML y CSS",
    descripcion:
      "Certificación en HTML y CSS del PROGRAMA ONE, completando todas sus etapas. El curso abarcó desde conceptos básicos de estructura web hasta el desarrollo de diseños responsivos y optimización para móviles, incluyendo manejo de etiquetas, posicionamiento avanzado, Flexbox, componentes web y publicación de proyectos.",
    archivo: htmlcss,
  },
  {
    nombre: "logicadeprogramacion",
    titulo: "Lógica de Programación",
    descripcion:
      "Certificación en lógica de programación con JavaScript del PROGRAMA ONE. El curso abordó la resolución de problemas algorítmicos, control de flujo, funciones, arrays y manejo de eventos en aplicaciones web.",
    archivo: logicadeprogramacion,
  },
];
