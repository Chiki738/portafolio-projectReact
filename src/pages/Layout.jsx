import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Dialogo from "../pages/Dialog.jsx";
import logo from "../assets/logo.jpg";
import cv from "../pdf/cv/CV_Carlos_Alzamora.pdf";
import DropdownMenu from "../pages/DropdownMenu.jsx";
import Footer from "../pages/Footer.jsx";
import "../styles/layout-style.css";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para detectar el scroll
  const location = useLocation();

  // Maneja el clic en el botón de alternancia
  const handleClick = () => {
    if (!isLargeScreen) {
      setIsOpen(!isOpen);
    }
  };

  // Actualiza el tamaño de la pantalla
  const updateScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  // Maneja el scroll de la ventana
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0); // Detecta si se ha hecho scroll
    if (!isLargeScreen && isOpen) {
      setIsOpen(false); // Cierra el menú en pantallas pequeñas si se hace scroll
    }
  };

  useEffect(() => {
    // Función para manejar el cambio de tamaño de la pantalla
    const handleResize = () => {
      updateScreenSize();
      if (isOpen && isLargeScreen) {
        setIsOpen(false); // Cerrar el menú si se cambia a una pantalla grande
      }
    };
  
    // Añadir los event listeners para resize y scroll
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
  
    // Limpiar los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLargeScreen, isOpen]);
  

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <header className={isScrolled ? "fixed" : ""}>
        <div className="navbar">
          <Link to="/" id="layout_navbar-logo" className="navbar-logo">
            <figure>
              <img src={logo} alt="Logo" title="Logo" />
            </figure>
            <h2>CHIKI</h2>
          </Link>

          <nav id="nav-h">
            <ul className="nav_ul">
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house">
                    <span>&#160;Inicio</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/#sobreMi">
                  <i className="fa-solid fa-user">
                    <span>&#160;Sobre Mí</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Proyectos">
                  <i className="fa-solid fa-code">
                    <span>&#160;Proyectos</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link to="/Certificados">
                  <i className="fa-solid fa-certificate">
                    <span>&#160;Certificados</span>
                  </i>
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = cv; // Aquí se asigna la ruta del PDF importado
                    link.target = "_blank"; // El archivo se abrirá en una nueva pestaña
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}>
                  <i className="fa-solid fa-file">
                    <span>&#160;CV</span>
                  </i>
                </Link>
              </li>

              <li>
                <a
                  href="https://github.com/Chiki975/portafolio-projectReact.git"
                  target="_blank">
                  <i className="fa-solid fa-code-compare">
                    <span>&#160;Repositorio</span>
                  </i>
                </a>
              </li>
            </ul>
          </nav>

          <div className="toggle_btn" onClick={handleClick}>
            <i
              className={
                isLargeScreen
                  ? "fa-solid fa-bars"
                  : isOpen
                  ? "fa-solid fa-xmark"
                  : "fa-solid fa-bars"
              }></i>
          </div>
        </div>

        <DropdownMenu isOpen={isOpen} handleLinkClick={handleClick} />
      </header>

      <Dialogo />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
