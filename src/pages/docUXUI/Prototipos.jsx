import React from 'react'
import { Link } from 'react-router-dom'


function Prototipos() {
    let info = [
        {
            titulo: "upLabs",
            ruta: "https://www.uplabs.com/",
            color: "light"
        },

        {
            titulo: "Dribble",
            ruta: "https://dribbble.com/shots/following/web-design",
            color: "light"
        },

        {
            titulo: "Behance",
            ruta: "https://www.behance.net/search/prototypes?log_shim_removal=1",
            color: "light"
        },

        {
            titulo: "Creative market",
            ruta: "https://creativemarket.com/",
            color: "light"
        },

        {
            titulo: "Design patterns",
            ruta: "https://ui-patterns.com/patterns/navigation/list",
            color: "light"
        },

        {
            titulo: "Mobbin",
            ruta: "https://mobbin.com/browse/ios/apps",
            color: "light"
        },

        {
            titulo: "Flowstep",
            ruta: "https://flowstep.design/",
            color: "light"
        },

        {
            titulo: "Screenalane",
            ruta: "https://screenlane.com/",
            color: "light"
        },

        {
            titulo: "Landing Folio",
            ruta: "https://www.landingfolio.com/",
            color: "light"
        },


        {
            titulo: "Site Inspire",
            ruta: "https://www.siteinspire.com/",
            color: "light"
        },

        
        {
            titulo: "UI Sources",
            ruta: "https://www.uisources.com/",
            color: "light"
        },
        
         
        {
            titulo: "Saas Interface",
            ruta: "https://saasinterface.com/",
            color: "light"
        },
    ]

    let masInfo = [
        {
            titulo: "10 Free-to-Use Wireframing Tools",
            ruta: "https://www.interaction-design.org/literature/article/10-free-to-use-wireframing-tools",
            color: "success"
        },

        {
            titulo: "Headspace App Information",
            ruta: "https://medium.com/@phaneron/headspace-app-information-architecture-457ef0a3cc16",
            color: "success"
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
                        <div className={"align-middle alert alert-" + item.color} role="alert">
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}</b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            <br />
            <h3>Información adicional</h3>
            <hr />

            <div className="row">
                {masInfo.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"align-middle alert alert-" + item.color} role="alert">
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}</b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            <hr />

        </div>

    )
}

export default Prototipos