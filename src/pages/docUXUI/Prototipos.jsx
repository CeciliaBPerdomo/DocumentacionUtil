import React from 'react'
import { Link } from 'react-router-dom'


function Prototipos() {
    let info = [
        {
            titulo: "upLabs",
            descripcion: "upLabs is the place to find high-quality design resources for designers, creative agencies and developers",
            ruta: "https://www.uplabs.com/",
            color: "light"
        },

        {
            titulo: "Dribble",
            descripcion: "The new web creation platform built for agencies.",
            ruta: "https://dribbble.com/shots/following/web-design",
            color: "light"
        },

        {
            titulo: "Behance",
            descripcion: "The new web creation platform built for agencies.",
            ruta: "https://www.behance.net/search/prototypes?log_shim_removal=1",
            color: "light"
        },

        {
            titulo: "Creative market",
            descripcion: "Bring your creative ideas to life.",
            ruta: "https://creativemarket.com/",
            color: "light"
        },

        {
            titulo: "Headspace App Information Architecture Study",
            descripcion: "Headspace App Information Architecture Study.",
            ruta: "https://medium.com/@phaneron/headspace-app-information-architecture-457ef0a3cc16",
            color: "light"
        },

        {
            titulo: "Design patterns",
            descripcion: "Design patterns.",
            ruta: "https://ui-patterns.com/patterns/navigation/list",
            color: "light"
        },

        {
            titulo: "10 Free-to-Use Wireframing Tools",
            descripcion: "10 Free-to-Use Wireframing Tools.",
            ruta: "https://www.interaction-design.org/literature/article/10-free-to-use-wireframing-tools",
            color: "light"
        },
    ]

    return (
        <div className="container">
            <br />
            <h3>Prototipos</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
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

export default Prototipos