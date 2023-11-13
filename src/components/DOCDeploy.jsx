import React from 'react'
import logo from "../img/descarga.png"
import Dominios from '../pages/docDeploy/Dominios'
import Hostings from '../pages/docDeploy/Hostings'

function DOCDeploy() {
    
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h2>
                    <img src={logo} alt="Python"
                        style={{ width: "100px", marginRight: "15px" }}
                    /> Deploy
                </h2>
            </div>

            <div>
                <h5>
                    ¿Qué significa Deploy en el mundo de la programación?
                </h5>

                <p>
                    En términos generales, la palabra <b>deploy</b> es utilizada para describir que algo fue colocado en su posición.
                    También se utiliza cuando un sistema es habilitado para su uso, ya sea un ambiente de desarrollo, para realizar pruebas o producción.
                </p>

                <p>Existen básicamente 3 formas de realizar un deploy de un sistema: </p>
                <ol>
                    <li>
                        <b>Forma Manual: </b>
                        Un ejemplo de este proceso es el Protocolo de Transferencia de archivos, conocido como FTP. por ejemplo cuando necesitas cambiar un pequeño detalle en tu archivo JS y realizas el upload para la producción, eso es un deploy manual.
                    </li>
                    <li>
                        <b>Parcialmente automatizado: </b>
                        Un ejemplo de este tipo de deploy puede ser el push de branch master que se realiza en el repositorio Git, el cual opera un pequeño hook y actualiza el servidor de web hosting, anque necesita algunos comandos, el proceso ocurre de manera automática
                    </li>
                    <li>
                        <b>Completamente automatizado: </b>
                        Es la tendencia más moderna en el desarrollo web. Este no solamente copia los cambios de forma automática en el servidor, sino también está íntimamente conectado con el concepto de integración continua, todo esto es hecho de forma automática.
                    </li>
                </ol>
            </div>
            <hr /> 

            {/* Dominios */}
            <br />
            <h3>Dominios</h3>
            <hr />
            <Dominios />

            {/* Hostings */}
            <br />
            <h3>Hostings</h3>
            <hr />
            <Hostings />

        </div>
    )
}

export default DOCDeploy