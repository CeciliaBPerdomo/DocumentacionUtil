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

    let scrum = [
        {
            "descripcion": "SCRUM",
            "web": "https://www.atlassian.com/es/agile/scrum",
            "color": "success"
        },

        {
            "descripcion": "¿Qué es Scrum?",
            "web": "https://proyectosagiles.org/que-es-scrum/",
            "color": "success"
        },

        {
            "descripcion": "Scrum: conceptos clave",
            "web": "https://asana.com/es/resources/what-is-scrum",
            "color": "success"
        },
    ]

    return (
        <div className="container text-start">
            <div className="row">
                {documentacion.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", "color": "black" }}>
                                <p className='text-center'>
                                    <b>
                                        {item.descripcion}
                                    </b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <h3>Scrum</h3>
            <hr />
            
            <h6>Scrum es una metodología para la gestión de proyectos complejos en los que se necesita obtener un resultado rápido en entornos muy cambiantes.</h6>
            <h6>El término “Scrum” se toma del rugby: “Los miembros del equipo se pasan la pelota entre sí, a medida que avanzan como una unidad por el campo de juego”.</h6>
            <h6>Scrum alienta a “los equipos a observar cuán efectivas son sus técnicas de trabajo y los desafía a evolucionar y mejorarlas continuamente”.</h6>
            <br />
            <p>Scrum es un marco de trabajo ágil a través del cual las personas pueden abordar problemas complejos adaptativos a la vez que se entregan productos de forma eficiente y creativa con el máximo valor. Así, Scrum es una metodología que ayuda a los equipos a colaborar y realizar un trabajo de alto impacto. La metodología Scrum proporciona un plan de valores, roles y pautas para ayudar a tu equipo a concentrarse en la iteración y la mejora continua en proyectos complejos. Por otra parte, deberás saber que en Scrum se trabaja con equipos pequeños multidisciplinares en ciclos iterativos centrados en el cliente y se crea un producto de forma incremental.</p>
            <br />

            <div className="row">
                {scrum.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", "color": "black" }}>
                                <p className='text-center'>
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