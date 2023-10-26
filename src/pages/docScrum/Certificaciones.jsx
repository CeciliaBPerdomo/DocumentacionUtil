import React from 'react'
import { Link } from 'react-router-dom'

function Certificaciones() {
    let certificaciones = [
        {
            descripcion: "Scrum.org",
            web: "https://www.scrum.org/professional-scrum-certifications",
            color: "success"
        },

        {
            descripcion: "CertiProf - Professional Knowledge",
            web: "https://certiprof.com/pages/scrum-foundation-certificate-free",
            color: "success"
        },

        // {
        //     descripcion: "SCRUM",
        //     web: "https://www.atlassian.com/es/agile/scrum",
        //     color: "danger"
        // },


        // {
        //     "descripcion": "",
        //     "web": ""
        // },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {certificaciones.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
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

export default Certificaciones