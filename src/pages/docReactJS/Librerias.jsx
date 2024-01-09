import React from 'react'
import { Link } from 'react-router-dom'

function Librerias() {

    // Librerias
    let librerias = [
        { nombre: "Fechas y calendarios", direccion: "/fechas-calendarios" },
        { nombre: "Gráficas", direccion: "/graficas" },
        { nombre: "Librerias UI", direccion: "/uiLibraries" },
        { nombre: "Alertas", direccion: "/alertas" },
        { nombre: "Validación de formularios", direccion: "/validacion_formularios" },
        { nombre: "Animaciones", direccion: "/animaciones" },
        { nombre: "PDF", direccion: "/pdf" },
        {nombre: "State Management", direccion: "/management"},
        // {nombre: "", direccion: ""},
    ]



    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    {librerias.map((item, id) => (
                        <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div className="alert alert-danger" role="alert">
                                <Link to={item.direccion} style={{ textDecoration: "none", color: "black" }}>
                                    {item.nombre}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Librerias