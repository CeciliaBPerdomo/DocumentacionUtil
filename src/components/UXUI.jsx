import React from 'react'
import logo from "../img/logoUXUIBlanco.jpg"
import { Link } from 'react-router-dom'

function UXUI() {
    let info = [
        {
            descripcion: "UX Ideas",
            ruta: "/ux_ideas",
            color: "light"
        },

        {
            descripcion: "UI Ideas",
            ruta: "/ui_ideas",
            color: "light"
        },

        {
            descripcion: "Prototipos",
            ruta: "/",
            color: "light"
        },

        {
            descripcion: "Removedores de fondo",
            ruta: "/",
            color: "light"
        },

        {
            descripcion: "Iconos & Logos",
            ruta: "/",
            color: "success"
        },

        {
            descripcion: "Colores, tipografía & patrones",
            ruta: "/colores",
            color: "success"
        },

        {
            descripcion: "News",
            ruta: "/",
            color: "success"
        },

        {
            descripcion: "Apps",
            ruta: "/",
            color: "success"
        },

        {
            descripcion: "Capacidades diferentes",
            ruta: "/",
            color: "danger"
        },
    ]
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h4>
                    <img src={logo} alt="UX/UI" style={{ width: "70px" }} />    Diseño UX/UI
                </h4>
            </div>
            <br />

            {/* Frase */}
            <div className="alert alert-success text-center" role="alert">
                <h3>El diseño es el embajador silencioso de tu marca</h3>
            </div>


            {/* Info */}
            <br />
            <h3>Información</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-3" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ height: "55px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>  {item.descripcion} </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default UXUI