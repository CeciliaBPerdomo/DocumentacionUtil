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

// Bootstrap & otros
import DOCBootStrap from "./components/DOCBootStrap";
import DOCTailwind from "./components/DOCTailwind";
import DOCFoundation from "./components/DOCFoundation";

// JavaScript
import DOCJavaScript from "./components/DOCJavaScript";
import GraficasJS from "./pages/docJavaScript/Graficas_JS.jsx";

// Vue.js
import DocVue from "./components/DocVue";

// Vite.js
import DocVite from "./components/DocVite";

// Apis Externas
import DOCApis from "./components/DOCApis";
import ImagenesApi from "./pages/docApisExternas/ImagenesApi";
import PasarelasApis from "./pages/docApisExternas/PasarelasApis";
import EnvioMails from "./pages/docApisExternas/EnvioMails";
import MailerLite from "./pages/docApisExternas/MailerLite";
import MusicaApis from "./pages/docApisExternas/MusicaApis";
import ComidaApis from "./pages/docApisExternas/ComidaApis";
import ApisNews from "./pages/docApisExternas/ApisNews";
import ApiGraficas from "./pages/docApisExternas/ApiGraficas";
import ApiIA from "./pages/docApisExternas/ApiIA";
import ApisCalendarios from "./pages/docApisExternas/ApisCalendarios";
import ApisGoogle from "./pages/docApisExternas/ApisGoogle";
import ApisJuegos from "./pages/docApisExternas/ApisJuegos";
import ApisLenguajes from "./pages/docApisExternas/ApisLenguajes";
import ApisComics from "./pages/docApisExternas/ApisComics";
import ApisDatos from "./pages/docApisExternas/ApisDatos";
import ApisClima from "./pages/docApisExternas/ApisClima";
import ApiPeliculas from "./pages/docApisExternas/ApiPeliculas";
import ApiMascotas from "./pages/docApisExternas/ApiMascotas";

// Trabajos
import DocTrabajos from "./components/DocTrabajos.jsx";

// Python
import DocPython from "./components/DocPython.jsx";

// Full Stack
import DocFull from "./components/DocFull.jsx";

// AWS
import DOCAWS from "./components/DOCAWS.jsx";
import DocNative from "./components/DocNative.jsx";

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

            {/* Bootstrap y otros */}
            <Route path="bootstrap" element={<DOCBootStrap />} /> 
            <Route path="tailwind" element={<DOCTailwind />} /> 
            <Route path="foundation" element={<DOCFoundation />} /> 

            {/* JavaScript */}
            <Route path="javascript" element={<DOCJavaScript />} /> 
            <Route path="graficas_js" element={<GraficasJS />} /> 

            {/* Vue.js */}
            <Route path="vue" element={<DocVue />} /> 

            {/* Vite.js */}
            <Route path="vite" element={<DocVite />} /> 

            {/* Apis externas */}
            <Route path="apisExternas" element={<DOCApis />} /> 
            <Route path="apisImagenes" element={<ImagenesApi />} /> 
            <Route path="apisPasarelas" element={<PasarelasApis />} /> 
            <Route path="apisMails" element={<EnvioMails />} /> 
            <Route path="mailerLite" element={<MailerLite />} /> 
            <Route path="apisMusica" element={<MusicaApis />} /> 
            <Route path="apisComida" element={<ComidaApis />} /> 
            <Route path="apisNews" element={<ApisNews />} /> 
            <Route path="apisGraficas" element={<ApiGraficas />} /> 
            <Route path="apisIA" element={<ApiIA />} /> 
            <Route path="apisCalendarios" element={<ApisCalendarios />} /> 
            <Route path="apisGoogle" element={<ApisGoogle />} /> 
            <Route path="apisGames" element={<ApisJuegos />} /> 
            <Route path="apisLenguaje" element={<ApisLenguajes />} /> 
            <Route path="apisComics" element={<ApisComics />} /> 
            <Route path="apisDatos" element={<ApisDatos />} /> 
            <Route path="apisClima" element={<ApisClima />} /> 
            <Route path="apisPeliculas" element={<ApiPeliculas />} /> 
            <Route path="apisMascotas" element={<ApiMascotas />} /> 

            {/* Trabajos */}
            <Route path="trabajos" element={<DocTrabajos />} /> 

            {/* Python */}
            <Route path="python" element={<DocPython />} /> 

            {/* Full Stack */}
            <Route path="full" element={<DocFull />} /> 

            {/* AWS */}
            <Route path="doc_aws" element={<DOCAWS />} /> 

            {/* React Native */}
            <Route path="react_native" element={<DocNative />} /> 

            {/* Error */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
