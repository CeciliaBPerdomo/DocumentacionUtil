import { Link } from "react-router-dom";
import logoReact from "./../img/react.jpg"
import logoHTML from "../img/logoHTML.jpg"
import logoBoostrap from "../img/logoBootstrap.jpg"
import logoCSS from "../img/logoCSS.jpg"
import logoJavaScript from "../img/logoJavaScript.jpg"
import logoScrum from "../img/logoScrum.jpeg"
import logoUXUI from "../img/logoUXUI.png"
import logoVue from "../img/logoVue.jpeg"
import caratula from "../img/caratula.png"
import tail from "../img/tailwindcssLogo.png"
import foundation from "../img/logoFundation.png"

import Footer from "./Footer";

// Tamano imagenes: 2560 x 1440 px

const Home = () => {
    let tema = [
        {
            tema: "Diseño UX/UI",
            imagen: logoUXUI,
            descripcion: "Ideas, Prototipos, Iconos, Colores, Apps, News",
            info: "/ux_ui"
        },
        {
            tema: "HTML",
            imagen: logoHTML,
            descripcion: "Cursos",
            info: "/docHTML"
        },

        {
            tema: "CSS",
            imagen: logoCSS,
            descripcion: "Cursos, separadores, juegos, animaciones y challenges",
            info: "/doc_CSS"
        },

        {
            tema: "Bootstrap",
            imagen: logoBoostrap,
            descripcion: "Documentación, templates",
            info: "/bootstrap"
        },

        {
            tema: "Tailwind",
            imagen: tail,
            descripcion: "Documentación, templates",
            info: "/tailwind"
        },

        {
            tema: "Foundation",
            imagen: foundation,
            descripcion: "Documentación",
            info: "/foundation"
        },

        {
            tema: "javaScript",
            imagen: logoJavaScript,
            descripcion: "Documentación útil, cursos, librerias, challenges",
            info: "/"
        },

        {
            tema: "React.js",
            imagen: logoReact,
            descripcion: "Documentación útil, cursos, librerias, challenges",
            info: "/docreactjs"
        },

        {
            tema: "Vue.js",
            imagen: logoVue,
            descripcion: "Documentación útil, cursos, librerias, challenges",
            info: "/"
        },

        {
            tema: "Scrum y metodologías ágiles",
            imagen: logoScrum,
            descripcion: "Documentación útil, certificaciones",
            info: "/docScrum"
        },

        // { 
        //     tema: "",
        //     imagen: , 
        //     descripcion: "",
        //     info: ""
        // },
    ]

    return (
        <>
            <br />
            <div className="container text-center">
                <div>
                    <img src={caratula} alt="Documentación útil" style={{ width: "45%" }} />
                    <hr />
                </div>

                <div className="row">
                    {tema.map((item, id) => (
                        <div className="col" key={id} style={{ marginBottom: "35px" }}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item.imagen} 
                                className="card-img-top" alt={item.tema} />
                                <div className="card-body" style={{ height: "85px" }}>
                                    <h5 className="card-title">{item.tema}</h5>
                                    <p className="card-text">{item.descripcion}</p>
                                </div>
                                <div className="card-body">
                                    <hr />
                                    <button className="btn btn-outline-dark">
                                        <Link to={item.info} style={{ textDecoration: "none", color: "purple", fontSize: "25px" }}>
                                            + info
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Footer />
            </div>
        </>
    )
};

export default Home;