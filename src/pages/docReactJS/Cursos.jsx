import React from 'react'
import { Link } from "react-router-dom";

export default function Cursos() {
    let cursos = [
        {
            "descripcion": "Build performant and progressive",
            "web": "https://web.dev/explore/react"
        },

        {
            "descripcion": "Curso basado en proyectos",
            "web": "https://github.com/midudev/aprendiendo-react"
        },

        {
            "descripcion": "Creación de las primeras aplicaciones",
            "web": "https://learn.microsoft.com/es-es/training/paths/react/?WT.mc_id=DT-MVP-5004970"
        },

        // {
        //     "descripcion": "",
        //     "web": ""
        // },
    ]

    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    {cursos.map((item, id) => (
                        <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div className="alert alert-primary" role="alert">
                                <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                  <p>  {item.descripcion} </p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
