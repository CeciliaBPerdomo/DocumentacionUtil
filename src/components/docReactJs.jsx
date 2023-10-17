import reactBlanco from "../img/reactBlanco.png"
import { Link } from "react-router-dom";
import Cursos from "../pages/docReactJS/Cursos.jsx";

// Librerias
let librerias = [
    { nombre: "Fechas y calendarios", direccion: "/fechas-calendarios" },
    { nombre: "Gráficas", direccion: "/graficas" },
    { nombre: "Librerias UI", direccion: "" },
    { nombre: "Alertas", direccion: "" },
    { nombre: "Validación de formularios", direccion: "" },
    { nombre: "Animaciones", direccion: "" },
    { nombre: "PDF", direccion: "" },
    // {nombre: "", direccion: ""},
    // {nombre: "", direccion: ""},
]

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

            <div className="container text-center">
                <div className="row">
                    {librerias.map((item, id) => (
                        <div className="col-3" key={id}>
                            <div className="alert alert-light" role="alert">
                                <Link to={item.direccion} style={{ textDecoration: "none", color: "black" }}>
                                    {item.nombre}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <br />
            <h3>Cursos</h3>
            <hr />
            <Cursos />

            <br />
            <h3>React.py</h3>
            <hr />
        </div>


    );
};

export default DocReactJs;