// import encriptador from "../img/encriptador.png";
// import cafe from "../img/cafeNoir.png";
// import recicla from "../img/reciclaPeru.png";
// import venta from "../img/venta.png";
// import html from "../img/html.png";
// import css from "../img/css.png";
// import js from "../img/js.png";
// import github from "../img/gitHub.png";
// import vercel from "../img/vercel.png";
// import java from "../img/java.png";
// import bootstrap from "../img/bootstrap.png";
// import php from "../img/php.png";
// import bot from "../img/botpress.png";
// import "../styles/proyectos-style.css";

// const proyectos = [
//   {
//     title: "ENCRIPTADOR DE TEXTO",
//     imgSrc: encriptador,
//     description:
//       "Este proyecto fue desarrollado durante el primer desafío del Programa One." +
//       " Permite encriptar y desencriptar texto ingresado, aceptando únicamente letras en minúscula." +
//       " Es compatible con dispositivos móviles, tablets, laptops y PCs.",
//     tecnologias: [
//       { src: html },
//       { src: css },
//       { src: js },
//       { src: github },
//       { src: vercel },
//     ],
//     botones: [
//       {
//         tipo: "github",
//         href: "https://github.com/Chiki975/challenge-encriptador.git",
//         mostrar: true,
//       },
//       {
//         tipo: "web",
//         href: "https://challenge-encriptador-eosin.vercel.app/",
//         mostrar: true,
//       },
//     ],
//   },

//   {
//     title: "CAFÉ NOIR",
//     imgSrc: cafe,
//     description:
//       "Desarrollo de una aplicación web para optimizar la atención al cliente en cafeterías. " +
//       "La aplicación permite realizar compras, gestionar pedidos y llevar a cabo el proceso de pago, " +
//       " además de enviar un correo notificando que el pedido ha sido realizado.",
//     tecnologias: [
//       { src: html },
//       { src: css },
//       { src: java },
//       { src: github },
//       { src: bootstrap },
//     ],
//     botones: [
//       {
//         tipo: "github",
//         href: "https://github.com/Chiki975/cafeNoir.git",
//         mostrar: true,
//       },
//       {
//         tipo: "",
//         href: "",
//         mostrar: false,
//       },
//     ],
//   },

//   {
//     title: "RECICLA PERÚ",
//     imgSrc: recicla,
//     description:
//       "Proyecto que busca promover el reciclaje de residuos electrónicos mediante la recolección, " +
//       "el procesamiento y la sensibilización sobre su impacto ambiental. Además, incluye un sistema " +
//       "de inicio de sesión con acceso de administrador y gráficos estadísticos.",
//     tecnologias: [
//       { src: html },
//       { src: css },
//       { src: js },
//       { src: github },
//       { src: bot },
//       { src: php },
//     ],
//     botones: [
//       {
//         tipo: "github",
//         href: "https://github.com/Chiki975/recicla-peru.git",
//         mostrar: true,
//       },
//       {
//         tipo: "",
//         href: "",
//         mostrar: false,
//       },
//     ],
//   },

//   {
//     title: "VENTA DE CELULARES",
//     imgSrc: venta,
//     description:
//       "Proyecto desarrollado para la venta de celulares, " +
//       "que incluye un sistema de inicio de sesión para acceder a la cuenta y un proceso de pago.",
//     tecnologias: [
//       { src: html },
//       { src: css },
//       { src: js },
//       { src: github },
//       { src: php },
//     ],
//     botones: [
//       {
//         tipo: "github",
//         href: "https://github.com/HikaruMagnun/TPW-PROYECT-BAKEND.git",
//         mostrar: true,
//       },
//       {
//         tipo: "",
//         href: "",
//         mostrar: false,
//       },
//     ],
//   },
// ];

// function Proyectos() {
//   return (
//     <div className="proyectos-container">
//       <h3>PROYECTOS</h3>

//       <div className="proyectos">
//         {proyectos.map((proyecto, index) => (
//           <div key={index}>
//             <h4>{proyecto.title}</h4>

//             <div>
//               <figure className="proyectos-figure">
//                 <img src={proyecto.imgSrc} />
//               </figure>

//               <p>
//                 <strong>DESCRIPCIÓN:</strong>&nbsp;{proyecto.description}
//               </p>

//               <div className="proyectos-tecnologia">
//                 <h5>Tecnología usada:</h5>
//                 <div>
//                   {proyecto.tecnologias.map((tec, i) => (
//                     <figure key={i}>
//                       <img src={tec.src} />
//                     </figure>
//                   ))}
//                 </div>
//               </div>

//               <div className="proyectos-button">
//                 {proyecto.botones.map(
//                   (boton, i) =>
//                     boton.mostrar && (
//                       <a
//                         key={i}
//                         href={boton.href}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         <button>
//                           {boton.tipo === "github" ? (
//                             <i className="fa-brands fa-github"></i>
//                           ) : (
//                             <i className="fa-solid fa-globe"></i>
//                           )}
//                           &nbsp;{boton.tipo.toUpperCase()}
//                         </button>
//                       </a>
//                     )
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Proyectos;
