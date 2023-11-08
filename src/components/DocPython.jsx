import React from 'react'
import { Link } from 'react-router-dom'

// Imagenes
import logo from "../img/Python-Logo.png"
import ruta from "../img/bestpython.jpg"
import Cursos from '../pages/docPython/Cursos'
import Juegos from '../pages/docPython/Juegos'

function DocPython() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://www.python.org/",
            color: "light"
        },

        {
            descripcion: "Road map",
            web: "https://github.com/matiwan3/PYTHON-main",
            color: "light"
        },

    ]

    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h2>
                    <img src={logo} alt="Python"
                        style={{ width: "120px", marginRight: "15px" }}
                    />
                </h2>
            </div>
            <br />

            <div className='d-flex justify-content-center'>
                <img src={ruta} alt="ruta" />
            </div>

            <br />
            {/* Documentacion */}
            <h3>Documentación oficial</h3>
            <hr />
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.descripcion}</b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            {/* Cursos */}
            <h3>Cursos</h3>
            <hr />
            <Cursos />

            <br />
            {/* Juegos */}
            <h3>Juegos</h3>
            <hr />
            <Juegos />


            <hr />           
        </div>
    )
}

export default DocPython