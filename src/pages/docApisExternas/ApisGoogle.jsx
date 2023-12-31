import React from 'react'
import { Link } from 'react-router-dom'

function ApisGoogle() {
    let info = [
        {
            descripcion: "Desarrolle soluciones para GD",
            web: "https://developers.google.com/drive?hl=es-419",
            color: "light"
        },
        {
            descripcion: "Guía de inicio rápido",
            web: "https://developers.google.com/drive/api/quickstart/js?hl=es-419",
            color: "light"
        },
        {
            descripcion: "Books",
            web: "https://developers.google.com/books?hl=es-419",
            color: "light"
        },
    ]

    let cursos = [
        {
            descripcion: "Build your Future",
            web: "https://buildyourfuture.withgoogle.com/programs",
            color: "success"
        }, 

        {
            descripcion: "Grow with google",
            web: "https://grow.google/intl/es/courses-and-tools/",
            color: "success"
        }, 
    ]
    return (
        <div className='container'>
            <br />
            <h3>Api's externas: de Google</h3>
            <hr />
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    {item.descripcion}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            <h3>Cursos</h3>
            <hr />
            <div className="row">
                {cursos.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    {item.descripcion}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default ApisGoogle