import React from 'react'
import ColoresUX from './ColoresUX'
import Tipografia from './Tipografia'
import Patrones from './Patrones'

function Colores() {
    return (
        <div className="container">
            {/* Colores */}
            <br />
            <h3>Colores</h3>
            <hr />
            <ColoresUX />

            {/* Tipografía */}
            <br />
            <h3>Tipografía</h3>
            <hr />
            <Tipografia />
            
            {/* Patrones */}
            <br />
            <h3>Patrones</h3>
            <hr />
            <Patrones />
        </div>
    )
}

export default Colores