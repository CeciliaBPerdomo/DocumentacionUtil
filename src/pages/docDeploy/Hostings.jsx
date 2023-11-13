import React from 'react'
import { Link } from "react-router-dom";


function Hostings() {
    let info = [
        {
            "descripcion": "Heroku",
            "web": "/heroku",
            "color": "success"
        },

        {
            "descripcion": "Fly.io",
            "web": "https://fly.io/",
            "color": "success"
        },

        {
            "descripcion": "Koyeb",
            "web": "https://www.koyeb.com/",
            "color": "success"
        },

        {
            "descripcion": "Fl{/}",
            "web": "https://www.fl0.com//",
            "color": "success"
        },

        // {
        //     "descripcion": "Fl{/}",
        //     "web": "https://www.fl0.com//",
        //     "color": "success"
        // },
    ]

    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    {info.map((item, id) => (
                        <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div className={"alert alert-" + item.color} role="alert">
                                <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                    <p><b>{item.descripcion}</b></p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hostings