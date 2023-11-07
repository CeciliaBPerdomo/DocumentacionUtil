import React from 'react'

import logo from "../img/compu.jpg"

function DocTrabajos() {
  return (
    <div className="container">
    <br />
    <div className="alert alert-light" role="alert">
    <h2>
        <img src={logo} alt="Trabajos" style={{ width: "70px", marginRight: "15px" }} />
       Trabajos
        </h2>
    </div>
    <br />

    {/* Información */}
    <h3>Información</h3>
    <hr />
    </div>
  )
}

export default DocTrabajos