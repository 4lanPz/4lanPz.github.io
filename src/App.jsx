import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Informacion from "./paginas/Informacion";
import Contacto from "./paginas/Contacto";
import Conocimientos from "./paginas/Conocimientos";
import Proyectos from "./paginas/proyectos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Inicio />} />
          
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/conocimientos" element={<Conocimientos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
