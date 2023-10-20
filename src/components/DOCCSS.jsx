import React from 'react'
import logoCSS from "../img/logoCSSBlanco.jpg"

// CSS
import Cursos from '../pages/docCSS/Cursos.jsx'
import Customizables from "../pages/docCSS/Customizables.jsx"
import Challenges from '../pages/docCSS/Challenges'

function DOCCSS() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={logoCSS} alt="React" style={{ width: "80px" }} />
            </div>
            <br />

            {/* Documentacion */}
            <h3>Cursos</h3>
            <hr />
            <Cursos />

            {/* Customizables */}
            <br />
            <h3>Customizables & Games</h3>
            <hr />
            <Customizables />

            {/* Challenges */}
            <br />
            <h3>Challenges</h3>
            <hr />
            <Challenges />

        </div>
    )
}

export default DOCCSS