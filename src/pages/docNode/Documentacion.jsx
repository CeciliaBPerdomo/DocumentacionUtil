import React from 'react'
import { Link } from "react-router-dom";

function Documentacion() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://nodejs.org/en/docs",
            color: "light"
        },

        // {
        //     descripcion: "Django",
        //     web: "https://www.djangoproject.com/",
        //     color: "light"
        // },
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

export default Documentacion