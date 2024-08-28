# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Portafolio de @Chiki
Este es el código fuente de mi portafolio personal, donde muestro mis logros, habilidades y proyectos a lo largo de mi carrera profesional y educativa.

## Descripción
Este portafolio fue desarrollado utilizando React y otras tecnologías web modernas. El objetivo es proporcionar una plataforma interactiva donde los visitantes puedan conocer más sobre mi trayectoria, proyectos y certificaciones.

## Características
Responsive Design: Adaptable a cualquier dispositivo.
Secciones: Inicio, Sobre Mí, Proyectos, Certificados.
Animaciones: Uso de animaciones CSS y transiciones para mejorar la experiencia de usuario.
Integración con GitHub: Enlaces directos a los repositorios de mis proyectos.
Uso de Helmet: Para manejar las metaetiquetas y optimización SEO.
Custom Hooks: Implementación de hooks personalizados como useHeaderVisibility para manejar la visibilidad del encabezado.

## Tecnologías Utilizadas
React
React Router
React Helmet Async
HTML/CSS
JavaScript
GitHub
Vercel

## Instalación
Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu entorno local:

1- Clona el repositorio:
bash
Copiar código
git clone https://github.com/Chiki975/portafolio-projectReact.git

2- Navega al directorio del proyecto:
bash
Copiar código
cd portafolio-projectReact

3- Instala las dependencias:
bash
Copiar código
npm install

4- Inicia el servidor de desarrollo:
bash
Copiar código
npm start

El proyecto debería estar ejecutándose en http://localhost:3000.

## Uso
Puedes navegar por las diferentes secciones del portafolio a través del menú principal. En la sección de proyectos, puedes encontrar una lista de mis proyectos más destacados, con enlaces directos a los repositorios de GitHub y, si están disponibles, a las versiones desplegadas en línea.

## Estructura del Proyecto

.
├── public/
├── src/
│   ├── assets/          # Imágenes y otros recursos
│   ├── components/      # Componentes reutilizables
│   ├── pages/           # Páginas principales del sitio
│   ├── styles/          # Archivos CSS personalizados
│   ├── App.jsx          # Componente principal de la aplicación
│   ├── main.jsx         # Punto de entrada de la aplicación
│   └── utils/           # Hooks y utilidades
├── README.md            # Este archivo
└── package.json         # Dependencias del proyecto
