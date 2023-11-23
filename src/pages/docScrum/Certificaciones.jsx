import React from 'react'
import { Link } from 'react-router-dom'

function Certificaciones() {
    let certificaciones = [
        {
            "descripcion": "Scrum.org",
            "web": "https://www.scrum.org/professional-scrum-certifications",
            "color": "warning"
        },

        {
            "descripcion": "CertiProf - Professional Knowledge",
            "web": "https://certiprof.com/pages/scrum-foundation-certificate-free",
            "color": "warning"
        }, 

        {
            "descripcion": "Scrum Alliance",
            "web": "https://www.scrumalliance.org/",
            "color": "warning"
        }, 

        {
            "descripcion": "Project Managment Institute",
            "web": "https://www.pmi.org/",
            "color": "warning"
        }, 


    ]

    return (
        <div className="container text-center">
            <div className="row">
                {certificaciones.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
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

export default Certificaciones