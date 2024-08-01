import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Certificados from "./pages/Certificados";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="SobreMi" element={<SobreMi />} />
        <Route path="Proyectos" element={<Proyectos />} />
        <Route path="Certificados" element={<Certificados />} />
        <Route path="Contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;
