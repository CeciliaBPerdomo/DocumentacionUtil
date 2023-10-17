import { Link } from "react-router-dom";
import logoReact from "./../img/react.jpg"
import logoHTML from "../img/logoHTML.jpg"
import logoBoostrap from "../img/logoBootstrap.jpg"
import logoCSS from "../img/logoCSS.jpg"
import logoJavaScript from "../img/logoJavaScript.jpg"

// Tama;o imagenes: 2560 x 1440 px

const Home = () => {
    return (
        <>
            <br />
            <div className="container text-center">
                <div className="row">

                    {/* HTML */}
                    <div className="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={logoHTML} class="card-img-top" alt="HTML" />
                            <div class="card-body" style={{ height: "110px" }}>
                                <h5 class="card-title">HTML</h5>
                                <p class="card-text">Cursos</p>
                            </div>
                            <div class="card">
                                <button className="btn btn-outline-dark">
                                    <Link to="/" style={{ textDecoration: "none", color: "purple", fontSize: "25px" }}>
                                        + info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={logoCSS} class="card-img-top" alt="CSS" />
                            <div class="card-body" style={{ height: "110px" }}>
                                <h5 class="card-title">CSS</h5>
                                <p class="card-text">Cursos, separadores, juegos, animaciones y challenges</p>

                            </div>
                            <div class="card">
                                <button className="btn btn-outline-dark">
                                    <Link to="/docreactjs" style={{ textDecoration: "none", color: "purple", fontSize: "25px" }}>
                                        + info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bootstrap */}
                    <div className="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={logoBoostrap} class="card-img-top" alt="Bootstrap" />
                            <div class="card-body" style={{ height: "110px" }}>
                                <h5 class="card-title">Bootstrap</h5>
                                <p class="card-text">Cursos</p>
                            </div>
                            <div class="card">
                                <button className="btn btn-outline-dark">
                                    <Link to="/" style={{ textDecoration: "none", color: "purple", fontSize: "25px" }}>
                                        + info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* JS */}
                    <div className="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={logoJavaScript} class="card-img-top" alt="LogoJavaScript" />
                            <div class="card-body" style={{ height: "110px" }}>
                                <h5 class="card-title">JavaScript</h5>
                                <p class="card-text">
                                    Documentación útil, cursos, librerias, challenges
                                </p>
                            </div>
                            <div class="card">
                                <button className="btn btn-outline-dark">
                                    <Link to="/" style={{ textDecoration: "none", color: "purple", fontSize: "25px" }}>
                                        + info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    {/* React JS */}
                    <div className="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={logoReact} class="card-img-top" alt="LogoReact" />
                            <div class="card-body" style={{ height: "110px" }}>
                                <h5 class="card-title">React JS</h5>
                                <p class="card-text">
                                    Documentación útil, cursos, librerias, challenges
                                </p>
                            </div>
                            <div class="card">
                                <button className="btn btn-outline-dark">
                                    <Link to="/docreactjs" style={{ textDecoration: "none", color: "purple", fontSize: "25px" }}>
                                        + info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </div>
        </>
    )
};

export default Home;