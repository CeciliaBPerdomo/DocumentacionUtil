import React from 'react'
import { Link } from 'react-router-dom'

function Documentacion() {
    let documentacion = [
        {
            "descripcion": "Metodología Agile",
            "web": "https://atenos.com/agile/que-es-una-metodologia-agile/#:~:text=3-%20Entrega%20valor%20con%20frecuencia,lograr%20entregas%20con%20mayor%20frecuencia.",
            "color": "light"
        },

        {
            "descripcion": "Principios del manifiesto ágil.",
            "web": "https://agilemanifesto.org/iso/es/principles.html",
            "color": "light"
        },

        {
            "descripcion": "Manifiesto ágil.",
            "web": "https://www.atlassian.com/es/agile/manifesto",
            "color": "light"
        },

        {
            "descripcion": "SCRUM",
            "web": "https://www.atlassian.com/es/agile/scrum",
            "color": "light"
        },

        {
            "descripcion": "4 reglas recogidas del M.A.",
            "web": "https://baturamobile.com/blog/4-reglas-manifiesto-agile/",
            "color": "light"
        },

        {
            "descripcion": "¿Cuáles son las más importantes?",
            "web": "https://altertecnia.com/metodologias-agiles-mas-importantes/",
            "color": "light"
        },

        {
            "descripcion": "Criterios de aceptación",
            "web": "https://www.scrummanager.com/blog/2023/03/criterios-de-aceptacion-definicion-y-ejemplos/",
            "color": "light"
        },

        {
            "descripcion": "Fichas ágiles",
            "web": "https://www.autentia.com/wp-content/uploads/libros/Autentia-MazosAgile-v2.0.pdf",
            "color": "light"
        },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {documentacion.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", "color": "black" }}>
                                <p>
                                    <b>
                                        {item.descripcion}
                                    </b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Documentacion