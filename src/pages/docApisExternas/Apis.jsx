import React from 'react'
import { Link } from 'react-router-dom'

function Apis() {
    let info = [
        {
            descripcion: "Imágenes",
            web: "/apisImagenes",
            color: "success"
        },

        {
            descripcion: "Pasarelas de pago",
            web: "/apisPasarelas",
            color: "success"
        },

        {
            descripcion: "Envío de emails",
            web: "/apisMails",
            color: "success"
        },

        {
            descripcion: "Música",
            web: "/apisMusica",
            color: "success"
        },

        {
            descripcion: "Comida",
            web: "/apisComida",
            color: "success"
        },

        {
            descripcion: "Noticias",
            web: "/apisNews",
            color: "success"
        },

        {
            descripcion: "Gráficas",
            web: "/apisGraficas",
            color: "success"
        },

        {
            descripcion: "IA",
            web: "/apisIA",
            color: "success"
        },

        {
            descripcion: "Calendarios",
            web: "/apisCalendarios",
            color: "success"
        },

        {
            descripcion: "Api de Google",
            web: "/",
            color: "success"
        },

        {
            descripcion: "Juegos",
            web: "/",
            color: "success"
        },

        {
            descripcion: "Lenguaje",
            web: "/",
            color: "success"
        },

    ]

    return (
        <div className='container'>
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
        </div>
    )
}

export default Apis