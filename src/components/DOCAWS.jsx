import React from 'react'
import logo from "../img/amazon.png"
import CursosAWS from '../pages/docAWS/CursosAWS'

function DOCAWS() {

    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h4>
                    <img src={logo} alt="AWS" style={{ width: "160px" }} />
                </h4>
            </div>
            <br />

            {/* Cursos */}
            <h3>Cursos</h3>
            <hr />
            <CursosAWS />

            <hr />
        </div>
    )
}

export default DOCAWS