import React from 'react'
import IdeasUI from './IdeasUI'
import ImagenesUI from './ImagenesUI'
import AnimacionesUI from './AnimacionesUI'

function UIIdeas() {
    return (
        <div className='container'>
            <br />
            {/* Frase */}
            <div className="alert alert-warning text-center" role="alert">
                <h3>No reinventes la rueda: Utiliza kits de interfaz de usuario</h3>
            </div>

            {/* Ideas */}
            <br />
            <h3>Ideas UI</h3>
            <hr />
            <IdeasUI />

             {/* Imagenes */}
             <br />
            <h3>Imagenes</h3>
            <hr />
            <ImagenesUI />

             {/* Animaciones */}
             <br />
            <h3>Animaciones</h3>
            <hr />
            <AnimacionesUI />
        </div>
    )
}

export default UIIdeas