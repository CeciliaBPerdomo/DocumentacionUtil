import React from 'react'
import { Link } from 'react-router-dom'

function Patrones() {
    let info = [
        {
            titulo: "Toptal",
            descripcion: "Latest Patterns",
            ruta: "https://www.toptal.com/designers/subtlepatterns/",
            color: "light"
        },

        // {
        //     titulo: "",
        //     descripcion: "",
        //     ruta: "",
        //     color: ""
        // },

    ]

    return (
        <div className="container">
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}: </b>
                                    {item.descripcion}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Patrones