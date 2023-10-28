import React from 'react'
import logoVite from "../img/viteBlanco.jpg"
import DocumentacionVite from '../pages/docVite/DocumentacionVite'

function DocVite() {
  return (
    <div className="container">
    <br />
    <div className="alert alert-light" role="alert">
        <h2>
        <img src={logoVite} alt="Vite.js" style={{ width: "70px", marginRight: "15px" }} />
        Vite.js
        </h2>
    </div>
    <br />

    {/* Documentacion */}
    <h3>Documentación</h3>
    <hr />
    <DocumentacionVite />

<hr />
    </div>
  )
}

export default DocVite