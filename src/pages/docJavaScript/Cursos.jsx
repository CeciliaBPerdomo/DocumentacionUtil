import React from 'react'
import { Link } from 'react-router-dom'

function Cursos() {
    let info = [
        {
            descripcion: "Microsoft Learn",
            web: "https://learn.microsoft.com/en-us/training/modules/web-development-101-arrays/",
            color: "light"
        },

        {
            descripcion: "Aprende JavaScript",
            web: "https://www.aprendejavascript.dev/",
            color: "light"
        },

        {
            descripcion: "Microsoft Ignite",
            web: "https://learn.microsoft.com/es-es/training/paths/web-development-101/?WT.mc_id=DT-MVP-5004970",
            color: "light"
        },
        
        {
            descripcion: "LenguajeJS",
            web: "https://lenguajejs.com/javascript/",
            color: "light"
        },

        {
            descripcion: "Microsoft Training",
            web: "https://learn.microsoft.com/es-es/training/paths/build-javascript-applications-nodejs/?WT.mc_id=DT-MVP-5004970",
            color: "light"
        },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {info.map((item, id) => (
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

export default Cursos