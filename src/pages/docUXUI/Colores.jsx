import React from 'react'
import ColoresUX from './ColoresUX'
import Tipografia from './Tipografia'

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
            
        </div>
    )
}

export default Colores