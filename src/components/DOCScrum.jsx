import React from 'react'
import logoScrumBlanco from "../img/logoScrumBlanco.jpg"

import Documentacion from '../pages/docScrum/Documentacion.jsx'
import Certificaciones from '../pages/docScrum/Certificaciones.jsx'
import HerramientasScrum from '../pages/docScrum/HerramientasScrum'
import HistoriasDeUsuario from '../pages/docScrum/HistoriasDeUsuario'
import Cursos from '../pages/docScrum/Cursos.jsx'

function DOCScrum() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={logoScrumBlanco} alt="SCRUM" style={{ width: "70px" }} />
            </div>
            <br />

            {/* Documentacion */}
            <h3>Documentación</h3>
            <hr />
            <Documentacion />
            <br />

            {/* Cursos */}
            <h3>Cursos</h3>
            <hr />
            <Cursos />
            <br />

            {/* Historias de usuarios */}
            <h3>Historias de usuarios</h3>
            <hr />
            <HistoriasDeUsuario />

            {/* Certificacion */}
            <br />
            <h3>Certificaciones</h3>
            <hr />
            <Certificaciones />

            {/* Herramientas */}
            <br />
            <h3>Herramientas</h3>
            <hr />
            <HerramientasScrum />

            <hr />
        </div>
    )

}

export default DOCScrum