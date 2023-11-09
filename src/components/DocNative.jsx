import React from 'react'
import CursosNative from '../pages/docReactNative/CursosNative'
import DocumentacionNative from '../pages/docReactNative/DocumentacionNative'
import logo from "../img/logo_native.png"

function DocNative() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h4>
                    <img src={logo} alt="React Native" 
                    style={{ width: "90px" }} />
                </h4>
            </div>
            <br />

            {/* Documentacion */}
            <h3>Documentación</h3>
            <hr />
            <DocumentacionNative />

            {/* Cursos */}
            <h3>Cursos</h3>
            <hr />
            <CursosNative />

            <hr />
        </div>
    )
}

export default DocNative