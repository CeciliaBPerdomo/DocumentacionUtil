import React from 'react'
import logo from "../img/Node.js_logo_2015.png"
// import ruta from "../img/nodeis.jpg"
import Documentacion from '../pages/docNode/Documentacion'
import Challenges from '../pages/docNode/Challenges'

function DocNode() {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h2>
                    <img src={logo} alt="Node.js"
                        style={{ width: "120px", marginRight: "15px" }}
                    />
                </h2>
            </div>

            {/* <div className='d-flex justify-content-start'>
                <img src={ruta} alt="ruta" style={{ width: "550px" }} />
            </div> */}

            <br />
            {/* Documentacion */}
            <h3>Documentación</h3>
            <hr />
            <Documentacion />

            <br />
            {/* Challenges */}
            <h3>Challenges</h3>
            <hr />
            <Challenges />

            <hr />
        </div>
    )
}

export default DocNode