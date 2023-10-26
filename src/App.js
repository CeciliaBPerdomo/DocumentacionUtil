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

// SCRUM
import DOCScrum from "./components/DOCScrum";

// CSS
import DOCCSS from "./components/DOCCSS";
import Separaciones from "./pages/docCSS/Separaciones";
import AnimacionesCSS from "./pages/docCSS/Animaciones.jsx"
import Games from "./pages/docCSS/Games";

//UX / UI
import UXUI from "./components/UXUI";
import Colores from "./pages/docUXUI/Colores";
import UXIdeas from "./pages/docUXUI/UXIdeas";
import UIIdeas from "./pages/docUXUI/UIIdeas";
import Prototipos from "./pages/docUXUI/Prototipos";
import RemovedoresFondo from "./pages/docUXUI/RemovedoresFondo";
import IconosLogos from "./pages/docUXUI/IconosLogos";
import News from "./pages/docUXUI/News";
import Capacidades from "./pages/docUXUI/Capacidades";
import Apps from "./pages/docUXUI/Apps";

// Bootstrap
import DOCBootStrap from "./components/DOCBootStrap";

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

            {/* SCRUM */}
            <Route path="docScrum" element={<DOCScrum />} /> 

            {/* CSS */}
            <Route path="doc_CSS" element={<DOCCSS />} /> 
            <Route path="separaciones" element={<Separaciones />} /> 
            <Route path="animaciones_CSS" element={<AnimacionesCSS />} /> 
            <Route path="games_CSS" element={<Games />} /> 

            {/* UX / UI  */}
            <Route path="ux_ui" element={<UXUI />} /> 
            <Route path="colores" element={<Colores />} /> 
            <Route path="ux_ideas" element={<UXIdeas />} /> 
            <Route path="ui_ideas" element={<UIIdeas />} /> 
            <Route path="prototipos" element={<Prototipos />} /> 
            <Route path="removedores" element={<RemovedoresFondo />} /> 
            <Route path="iconos_logos" element={<IconosLogos />} /> 
            <Route path="news" element={<News />} /> 
            <Route path="capacidades" element={<Capacidades />} /> 
            <Route path="apps_uxui" element={<Apps />} /> 

            {/* Bootstrap */}
            <Route path="bootstrap" element={<DOCBootStrap />} /> 

            {/* Error */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
