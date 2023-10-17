import { Link } from "react-router-dom";
import logoReact from "./../img/react.jpg"
import logoHTML from "../img/logoHTML.jpg"
import logoBoostrap from "../img/logoBootstrap.jpg"
import logoCSS from "../img/logoCSS.jpg"
import logoJavaScript from "../img/logoJavaScript.jpg"

// Tama;o imagenes: 2560 x 1440 px

const Home = () => {
    let tema = [
        {
            tema: "HTML",
            imagen: logoHTML,
            descripcion: "Cursos",
            info: "/"
        },

        {
            tema: "CSS",
            imagen: logoCSS,
            descripcion: "Cursos, separadores, juegos, animaciones y challenges",
            info: "/"
        },

        {
            tema: "Bootstrap",
            imagen: logoBoostrap,
            descripcion: "Cursos",
            info: "/"
        },

        {
            tema: "javaSrcipt",
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
                <div className="row">
                    {tema.map((item, id) => (
                        <div className="col" key={id} style={{marginBottom: "35px"}}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item.imagen} className="card-img-top" alt="HTML" />
                                <div className="card-body" style={{ height: "110px" }}>
                                    <h5 className="card-title">{item.tema}</h5>
                                    <p className="card-text">{item.descripcion}</p>
                                </div>
                                <div className="card">
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
            </div>
        </>
    )
};

export default Home;