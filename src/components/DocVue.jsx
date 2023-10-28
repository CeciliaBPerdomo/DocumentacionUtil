import React from 'react'
import logoVue from "../img/logoVueBlanco.png"

// Componentes
import DocumentacionVue from '../pages/docVue/DocumentacionVue'
import CursosVue from '../pages/docVue/CursosVue'

function DocVue() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h2>
                    <img src={logoVue} alt="Vue.js" style={{ width: "80px", marginRight: "15px" }} /> Vue.js
                </h2>
            </div>
            <br />

            {/* Documentación */}
            <h3>Documentación</h3>
            <hr />
            <DocumentacionVue />

            {/* Cursos */}
            <br />
            <h3>Cursos & Certificaciones</h3>
            <hr />
            <CursosVue />

            <hr />
        </div>
    )
}

export default DocVue