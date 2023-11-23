import React from 'react'
import { Link } from 'react-router-dom'

function Cursos() {
  let documentacion = [
    {
        descripcion: "Introducción a Agile y SCRUM",
        web: "hhttps://formacion.tutellus.com/tecnologia/desarrollo-web/introduccion-a-agile-y-scrum-2510?affref=d5a608f252ca4c778d20497fb6acad4d",
        color: "danger"
    },

     // {
    //     descripcion: "Principios del manifiesto ágil.",
    //     web: "https://agilemanifesto.org/iso/es/principles.html",
    //     color: "danger"
    // },
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

export default Cursos