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
import logoVite from "../img/ViteLogo.jpg"
import logoApis from "../img/logoApisExternas.jpg"
import trabajo from "../img/trabajo.jpg"
import logoPython from "../img/logopython.jpg"
import logoFull from "../img/full-stack-developer.jpg"
import logoAWS from "../img/awslogo.png"
import logoReactNative from "../img/native.png"
import logoChallenge from "../img/challenge.jpg"

import Footer from "./Footer";

// Tamano imagenes: 2560 x 1440 px

const Home = () => {
    let tema = [
        {
            tema: "Scrum y metodologías ágiles",
            imagen: logoScrum,
            descripcion: "Documentación útil, certificaciones",
            info: "/docScrum"
        },

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
            info: "/javascript"
        },

        {
            tema: "React.js",
            imagen: logoReact,
            descripcion: "Documentación útil, cursos, librerias, challenges",
            info: "/docreactjs"
        },

        {
            tema: "React.Native",
            imagen: logoReactNative,
            descripcion: "Documentación útil, cursos, librerias, challenges",
            info: "/react_native"
        },


        {
            tema: "Vue.js",
            imagen: logoVue,
            descripcion: "Documentación útil, cursos, librerias, challenges",
            info: "/vue"
        },

        {
            tema: "Vite.js",
            imagen: logoVite,
            descripcion: "Documentación",
            info: "/vite"
        },

        {
            tema: "Python",
            imagen: logoPython,
            descripcion: "Documentación, cursos, juegos",
            info: "/python"
        },

        {
            tema: "Api's Externas",
            imagen: logoApis,
            descripcion: "Imagénes, pagos, noticias, música, juegos, calendarios, etc.",
            info: "/apisExternas"
        },

        {
            tema: "AWS",
            imagen: logoAWS,
            descripcion: "Documentación, cursos",
            info: "/doc_aws"
        },

        {
            tema: "Challenges",
            imagen: logoChallenge,
            descripcion: "Challenges",
            info: "/challenges"
        },

        {
            tema: "Full Stack",
            imagen: logoFull,
            descripcion: "Documentación, cursos, juegos",
            info: "/full"
        },

        {
            tema: "Trabajos",
            imagen: trabajo,
            descripcion: "Información sobre dónde postularse",
            info: "/trabajos"
        },

    ]

    return (
        <>
            <br />
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h3 className="position-relative top-50 start-0">Documentación útil</h3>
                    </div>
                    <div className="col">
                        <img src={caratula} alt="Documentación útil" />
                    </div>
                    <hr />
                </div>

                <div className="row text-center">
                    {tema.map((item, id) => (
                        <div className="col d-flex justify-content-center" key={id} style={{ marginBottom: "35px" }}>
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