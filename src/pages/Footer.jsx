import "../styles/footer-style.css";

function Footer() {
  return (
    <div className="footer-container">
      <p>© 2024 Mi Portafolio. Todos los derechos reservados.</p>
      <div className="redes-enlace">
        <a
          href="https://api.whatsapp.com/send?phone=51956299119"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer">
          WhatsApp&nbsp;<i className="fa-brands fa-whatsapp" id="whatsapp"></i>
        </a>

        <a
          href="https://t.me/Chiki738"
          title="Telegram"
          target="_blank"
          rel="noopener noreferrer">
          Telegram&nbsp;<i className="fa-brands fa-telegram" id="telegram"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/daniel738/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn&nbsp;
          <i className="fa-brands fa-linkedin-in" id="linkedin"></i>
        </a>

        <a
          href="https://github.com/Chiki975/portafolio-projectReact"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer">
          GitHub&nbsp;<i className="fa-brands fa-github" id="github"></i>
        </a>

        <a
          href="mailto:carlosalzamorahuaman@gmail.com"
          title="Gmail"
          target="_blank"
          rel="noopener noreferrer">
          Gmail&nbsp;<i className="fa-regular fa-envelope" id="gmail"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
