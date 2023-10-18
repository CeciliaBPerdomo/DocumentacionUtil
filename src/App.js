//import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home.jsx";

// React
import DocReactJs from "./components/docReactJs.jsx";
import FechasyCalendarios from "./pages/docReactJS/FechasyCalendarios.jsx";
import Graficas from "./pages/docReactJS/Graficas.jsx";
import ReactPythonDocOficial from "./pages/docReactJS/ReactPythonDocOficial.jsx";
import UILibraries from "./pages/docReactJS/UILibraries";

import NoPage from "./pages/noPage";
import Alertas from "./pages/docReactJS/Alertas";
import ReactRouterDocOficial from "./pages/docReactJS/ReactRouterDocOficial";
import ValidacionFormularios from "./pages/docReactJS/ValidacionFormularios";

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

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
