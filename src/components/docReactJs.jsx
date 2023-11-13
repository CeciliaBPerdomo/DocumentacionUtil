import reactBlanco from "../img/reactBlanco.png"
// import { Link } from "react-router-dom";

// Componentes
import Cursos from "../pages/docReactJS/Cursos.jsx";
import ReactPython from "../pages/docReactJS/ReactPython.jsx";
import Librerias from "../pages/docReactJS/Librerias.jsx";
import ReactRouter from "../pages/docReactJS/ReactRouter.jsx";
import Documentacion from "../pages/docReactJS/Documentacion.jsx";

const DocReactJs = () => {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={reactBlanco} alt="React" style={{ width: "140px" }} />
            </div>
            <br />

            {/* Documentacion */}
            <h3>Documentación</h3>
            <hr />
            <Documentacion />

            <br />
            <h3>React Router</h3>
            <hr />
            < ReactRouter />

            {/* Librerias */}
            <br />
            <h3>Librerías</h3>
            <hr />
            <Librerias />
           
            {/* Cursos */}
            <br />
            <h3>Cursos</h3>
            <hr />
            <Cursos />

            {/* React.py */}
            <br />
            <h3>React.py</h3>
            <hr />
            <ReactPython />
        </div>


    );
};

export default DocReactJs;