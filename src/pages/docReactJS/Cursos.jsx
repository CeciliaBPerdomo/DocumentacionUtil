import React from 'react'
import { Link } from "react-router-dom";

export default function Cursos() {
    let cursos = [
        {
            "descripcion": "Build performant and progressive React applications.",
            "web": "https://web.dev/explore/react"
        },

        {
            "descripcion": "Curso para aprender React basado en proyectos.",
            "web": "https://github.com/midudev/aprendiendo-react"
        },

        {
            "descripcion": "Creación de las primeras aplicaciones web con React.",
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
                        <div className="col-4" key={id}>
                            <div className="alert alert-light" role="alert" style={{height: "55px", color: "black"}}>
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
