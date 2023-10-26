import React from 'react'
import { Link } from 'react-router-dom'

function Documentacion() {
    let documentacion = [
        {
            descripcion: "Principios del manifiesto ágil.",
            web: "https://agilemanifesto.org/iso/es/principles.html",
            color: "success"
        },

        {
            descripcion: "Manifiesto ágil.",
            web: "https://www.atlassian.com/es/agile/manifesto",
            color: "success"
        },

        {
            descripcion: "SCRUM",
            web: "https://www.atlassian.com/es/agile/scrum",
            color: "success"
        },

        {
            descripcion: "4 reglas recogidas del M.A.",
            web: "https://baturamobile.com/blog/4-reglas-manifiesto-agile/",
            color: "danger"
        },

        {
            descripcion: "M. A. ¿cuáles son las más importantes?",
            web: "https://altertecnia.com/metodologias-agiles-mas-importantes/",
            color: "danger"
        },



        // {
        //     "descripcion": "",
        //     "web": ""
        // },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {documentacion.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className="alert alert-light" role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p>  {item.descripcion} </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Documentacion