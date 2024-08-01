import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import useHeaderVisibility from "../utils/useHeaderVisibility";
import Footer from "../pages/Footer.jsx";
import Dialogo from "../utils/dialog";
import logo from "../img/logo.png";
import cv from "../pdf/Cv-alz.pdf";
import "../styles/layout-style.css";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const isHeaderVisible = useHeaderVisibility();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isHeaderVisible) {
      setIsOpen(false);
    }
  }, [isHeaderVisible]);

  return (
    <div id="layout-container">
      <header style={{ top: isHeaderVisible ? "0" : "-100%" }}>
        <div className="navbar">
          <Link to="/" id="layout_navbar-logo" className="navbar-logo">
            <figure>
              <img src={logo} alt="pikachu.png" title="Logo" />
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
                <Link to="/SobreMi">
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
                <Link onClick={() => {
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
                <Link to="/Contacto">
                  <i className="fa-solid fa-address-book">
                    <span>&#160;Contacto</span>
                  </i>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="toggle_btn" onClick={handleClick}>
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
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
                <Link onClick={() => {
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
                <Link to="/Contacto" onClick={handleLinkClick}>
                  <i className="fa-solid fa-address-book">
                    <span>&#160;Contacto</span>
                  </i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Dialogo />

      <Outlet />

      <hr />

      <Footer />
    </div>
  );
}

export default Layout;
