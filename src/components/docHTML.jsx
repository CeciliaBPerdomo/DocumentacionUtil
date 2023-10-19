import React from 'react'
import Cursos from '../pages/docHTML/Cursos.jsx';
import logoHTML from "../img/htmlBlanco.png"

function DOCHTML() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={logoHTML}  alt="HTML" style={{ width: "140px" }} />
            </div>
            <br />

            {/* Cursos */}
            <h3>Cursos</h3>
            <hr />
            <Cursos />
        </div>


    );
};


export default DOCHTML