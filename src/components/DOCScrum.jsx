import React from 'react'
import logoScrumBlanco from "../img/logoScrumBlanco.jpg"

import Documentacion from '../pages/docScrum/Documentacion.jsx'
import Certificaciones from '../pages/docScrum/Certificaciones.jsx'

function DOCScrum() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={logoScrumBlanco} alt="React" style={{ width: "70px" }} />
            </div>
            <br />

            {/* Documentacion */}
            <h3>Documentación</h3>
            <hr />
            <Documentacion />

            {/* Certificacion */}
            <br />
            <h3>Certificaciones</h3>
            <hr />
            <Certificaciones />
            
        </div>
    )

}

export default DOCScrum