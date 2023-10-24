import React from 'react'
import { Link } from 'react-router-dom'


function IconosLogos() {
    let iconos = [
        {
            titulo: "Íconos",
            descripcion: "Miles de iconos gratis",
            ruta: "https://icon-icons.com/es/icono/red-social-html5-html/71",
            color: "light"
        },
    ]

    let logos = [
        {
            titulo: "200+ Cool Personal Logo Designs",
            descripcion: "200+ Cool Personal Logo Designs.",
            ruta: "https://www.companyfolders.com/blog/200-cool-personal-logo-designs-for-inspiration",
            color: "light"
        },
    ]

    return (
        <div className="container">
            <br />
            <h3>Íconos</h3>
            <hr />

            <div className="row">
                {iconos.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"align-middle alert alert-" + item.color} role="alert" style={{ height: "80px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}</b>
                                    {/* {item.descripcion} */}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            <h3>Logos</h3>
            <hr />

            <div className="row">
                {logos.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"align-middle alert alert-" + item.color} role="alert" style={{ height: "80px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}</b>
                                    {/* {item.descripcion} */}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default IconosLogos