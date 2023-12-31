import React from 'react'
import { Link } from 'react-router-dom'


function Customizables() {
    let customizables = [
        {
            descripcion: "Separadores",
            ruta: "/separaciones",
            color: "success"
        },

        {
            descripcion: "Animaciones",
            ruta: "/animaciones_CSS",
            color: "success"
        },

        {
            descripcion: "Games",
            ruta: "/games_CSS",
            color: "success"
        },


        // {
        //     "descripcion": "",
        //     "web": ""
        // },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {customizables.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ height: "55px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p>  {item.descripcion} </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Customizables