import reactBlanco from "../img/reactBlanco.png"
// import { Link } from "react-router-dom";

// Componentes
import Cursos from "../pages/docReactJS/Cursos.jsx";
import ReactPython from "../pages/docReactJS/ReactPython.jsx";
import Librerias from "../pages/docReactJS/Librerias.jsx";

const DocReactJs = () => {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={reactBlanco} alt="React" style={{ width: "140px" }} />
            </div>
            <br />

            {/* Documentacion oficial */}
            <h3>Documentación oficial</h3>
            <hr />
            <div className="card text-bg-light mb-3" style={{ width: "540px" }}>
                <div className="card-header">React.dev</div>
                <div className="card-body">
                    <h5 className="card-title">https://es.react.dev/</h5>
                    <p className="card-text">React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. </p>
                    <p className="card-text">Crea tus propios componentes de React como Thumbnail, LikeButton, y Video. </p>
                    <p className="card-text">Luego combínalos para formar pantallas, páginas y aplicaciones.</p>
                    <hr />

                    <button className="btn btn-outline-dark float-end" onClick={() => window.location.replace("https://es.react.dev/")}>
                        Ir a la web
                    </button>
                </div>
            </div>

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

            <br />
        </div>


    );
};

export default DocReactJs;