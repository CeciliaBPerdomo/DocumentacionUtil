import React from 'react'
import { Link } from 'react-router-dom'

function Apis() {
    let info = [
        {
            descripcion: "Calendarios",
            web: "/apisCalendarios",
            color: "success"
        },

        {
            descripcion: "Clima",
            web: "/apisClima",
            color: "success"
        },

        {
            descripcion: "Cómics",
            web: "/apisComics",
            color: "success"
        },

        {
            descripcion: "Comida y bebidas",
            web: "/apisComida",
            color: "success"
        },

        {
            descripcion: "Datos",
            web: "/apisDatos",
            color: "success"
        },

        {
            descripcion: "Envío de emails",
            web: "/apisMails",
            color: "success"
        },

        {
            descripcion: "Google",
            web: "/apisGoogle",
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
            descripcion: "Imágenes",
            web: "/apisImagenes",
            color: "success"
        },

        {
            descripcion: "Juegos",
            web: "/apisGames",
            color: "success"
        },

        {
            descripcion: "Lenguaje",
            web: "/apisLenguaje",
            color: "success"
        },  
        
        {
            descripcion: "Mascotas",
            web: "/apisMascotas",
            color: "success"
        },


        {
            descripcion: "Música",
            web: "/apisMusica",
            color: "success"
        },
        
        {
            descripcion: "Noticias",
            web: "/apisNews",
            color: "success"
        },

        {
            descripcion: "Pasarelas de pago",
            web: "/apisPasarelas",
            color: "success"
        },

        {
            descripcion: "Películas",
            web: "/apisPeliculas",
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