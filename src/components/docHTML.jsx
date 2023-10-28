import React from 'react'

// Componentes
import Cursos from '../pages/docHTML/Cursos.jsx';
import logoHTML from "../img/htmlBlanco.png"
import Patterns from '../pages/docHTML/Patterns.jsx';

function DOCHTML() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={logoHTML} alt="HTML" style={{ width: "140px" }} />
            </div>
            <br />

            {/* Cursos */}
            <h3>Cursos</h3>
            <hr />
            <Cursos />

            {/* Patterns */}
            <br />
            <h3>Patterns</h3>
            <hr />
            <Patterns />
        </div>


    );
};


export default DOCHTML