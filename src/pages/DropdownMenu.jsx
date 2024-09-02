import PropTypes from "prop-types"; // Importa PropTypes
import { Link } from "react-router-dom";
import cv from "../pdf/Carlos_Alzamora_CV_FrontEnd.pdf";
import "../styles/dropdownMenu-style.css";

// Función para manejar la descarga del CV
const DropdownMenu = ({ isOpen, handleLinkClick }) => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv; // Ruta del PDF importado
    link.target = "_blank"; // Abrir en una nueva pestaña
    link.click(); // Iniciar la descarga
  };

  const handleClickWithMenuClose = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    handleDownloadCV(); // Manejar la descarga del CV
    handleLinkClick(); // Cerrar el menú
  };

  return (
    <div
      className="dropdown_menu"
      style={{ display: isOpen ? "block" : "none" }}>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              <i className="fa-solid fa-house">
                <span>&#160;Inicio</span>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/SobreMi" onClick={handleLinkClick}>
              <i className="fa-solid fa-user">
                <span>&#160;Sobre&#160;Mí</span>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/Proyectos" onClick={handleLinkClick}>
              <i className="fa-solid fa-code">
                <span>&#160;Proyectos</span>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/Certificados" onClick={handleLinkClick}>
              <i className="fa-solid fa-certificate">
                <span>&#160;Certificados</span>
              </i>
            </Link>
          </li>
          <li>
            <Link to="#" onClick={handleClickWithMenuClose}>
              <i className="fa-solid fa-file">
                <span>&#160;CV</span>
              </i>
            </Link>
          </li>
          <li>
            <a
              onClick={handleLinkClick}
              href="https://github.com/Chiki975/portafolio-projectReact.git"
              target="_blank">
              <i className="fa-solid fa-code-compare">
                <span>&#160;Repositorio</span>
              </i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Validación de las props usando PropTypes
DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};

export default DropdownMenu;
