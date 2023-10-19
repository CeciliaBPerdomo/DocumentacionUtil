//import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home.jsx";
import NoPage from "./pages/noPage";

// React
import DocReactJs from "./components/docReactJs.jsx";
import FechasyCalendarios from "./pages/docReactJS/FechasyCalendarios.jsx";
import Graficas from "./pages/docReactJS/Graficas.jsx";
import ReactPythonDocOficial from "./pages/docReactJS/ReactPythonDocOficial.jsx";
import UILibraries from "./pages/docReactJS/UILibraries";
import Alertas from "./pages/docReactJS/Alertas";
import ReactRouterDocOficial from "./pages/docReactJS/ReactRouterDocOficial";
import ValidacionFormularios from "./pages/docReactJS/ValidacionFormularios";
import Animaciones from "./pages/docReactJS/Animaciones";
import PDF from "./pages/docReactJS/PDF";

// HTML 
import DOCHTML from "./components/docHTML.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* React */}
            <Route path="docreactjs" element={<DocReactJs />} />
            <Route path="fechas-calendarios" element={<FechasyCalendarios />} />
            <Route path="graficas" element={<Graficas />} />
            <Route path="react-python" element={<ReactPythonDocOficial />} />
            <Route path="uiLibraries" element={<UILibraries />} />
            <Route path="alertas" element={<Alertas />} />
            <Route path="react-router" element={<ReactRouterDocOficial />} />            
            <Route path="validacion_formularios" element={<ValidacionFormularios />} />            
            <Route path="animaciones" element={<Animaciones />} />            
            <Route path="pdf" element={<PDF />} />        

            {/* HTML*/}
            <Route path="docHTML" element={<DOCHTML />} />        

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
