// import PropTypes from "prop-types"; // Importa PropTypes
// import { Link, useLocation } from "react-router-dom";
// import { useEffect } from "react"; // Importa useEffect
// import cv from "../pdf/CV_Carlos_Alzamora_Front_End.pdf";
// import "../styles/dropdownMenu-style.css";

// // Función para manejar la descarga del CV
// const DropdownMenu = ({ isOpen, handleLinkClick }) => {
//   const location = useLocation(); // Mueve useLocation aquí, no dentro de la función

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.querySelector(location.hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   const handleDownloadCV = () => {
//     const link = document.createElement("a");
//     link.href = cv; // Ruta del PDF importado
//     link.target = "_blank"; // Abrir en una nueva pestaña
//     link.click(); // Iniciar la descarga
//   };

//   const handleClickWithMenuClose = (event) => {
//     event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
//     handleDownloadCV(); // Manejar la descarga del CV
//     handleLinkClick(); // Cerrar el menú
//   };

//   return (
//     <div
//       className="dropdown_menu"
//       style={{ display: isOpen ? "block" : "none" }}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/" onClick={handleLinkClick}>
//               <i className="fa-solid fa-house">
//                 <span>&#160;Inicio</span>
//               </i>
//             </Link>
//           </li>
//           <li>
//             <Link to="/#sobreMi" onClick={handleLinkClick}> {/* Corregido el hash */}
//               <i className="fa-solid fa-user">
//                 <span>&#160;Sobre&#160;Mí</span>
//               </i>
//             </Link>
//           </li>
//           <li>
//             <Link to="/Proyectos" onClick={handleLinkClick}>
//               <i className="fa-solid fa-code">
//                 <span>&#160;Proyectos</span>
//               </i>
//             </Link>
//           </li>
//           <li>
//             <Link to="/Certificados" onClick={handleLinkClick}>
//               <i className="fa-solid fa-certificate">
//                 <span>&#160;Certificados</span>
//               </i>
//             </Link>
//           </li>
//           <li>
//             <Link to="#" onClick={handleClickWithMenuClose}>
//               <i className="fa-solid fa-file">
//                 <span>&#160;CV</span>
//               </i>
//             </Link>
//           </li>
//           <li>
//             <a
//               onClick={handleLinkClick}
//               href="https://github.com/Chiki975/portafolio-projectReact.git"
//               target="_blank">
//               <i className="fa-solid fa-code-compare">
//                 <span>&#160;Repositorio</span>
//               </i>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// // Validación de las props usando PropTypes
// DropdownMenu.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   handleLinkClick: PropTypes.func.isRequired,
// };

// export default DropdownMenu;
