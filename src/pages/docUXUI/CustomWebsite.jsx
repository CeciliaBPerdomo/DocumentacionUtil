import React from 'react'
import { Link } from 'react-router-dom'

function CustomWebsite() {
    let info = [
        {
            titulo: "WebFlow",
            descripcion: "Build with the power of code — without writing any.",
            ruta: "https://webflow.com/",
            color: "light"
        },

        // {
        //     titulo: "",
        //     descripcion: "",
        //     ruta: "",
        //     color: "light"
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

export default CustomWebsite