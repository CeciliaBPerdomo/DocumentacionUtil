import React from 'react'
import logoJS from "../img/LogoJSBlanco.png"

// Componenetes
import Patterns from '../pages/docJavaScript/Patterns'
import Cursos from '../pages/docJavaScript/Cursos'
import Challenges from '../pages/docJavaScript/Challenges'
import Libreriras from '../pages/docJavaScript/Libreriras'
import Juegos from '../pages/docJavaScript/Juegos'

function DOCJavaScript() {
    return (
        <div className="container">
             <br />
            <div className="alert alert-light" role="alert">
                <h2>
                <img src={logoJS} alt="JavaScript" style={{ width: "80px", marginRight: "25px" }} />
                JavaScript
                </h2>
            </div>

            <br />
            <h3>Cursos</h3>
            <hr />
            <Cursos />

            <br />
            <h3>Challenges</h3>
            <hr />
            <Challenges />

            <br />
            <h3>Librerias</h3>
            <hr />
            <Libreriras />

            <br />
            <h3>Patterns</h3>
            <hr />
            <Patterns />

            <br />
            <h3>Juegos</h3>
            <hr />
            <Juegos />
        </div>
    )
}

export default DOCJavaScript