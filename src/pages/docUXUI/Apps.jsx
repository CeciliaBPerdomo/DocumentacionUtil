import React from 'react'
import { Link } from 'react-router-dom'


function Apps() {
    let info = [
        {
            titulo: "Origami",
            descripcion: "Design, animate, and prototype. All-in-one.",
            ruta: "https://origami.design/",
            color: "light"
        },

        {
            titulo: "Adobe XD",
            descripcion: "Adobe XD",
            ruta: "https://helpx.adobe.com/in/support/xd.html",
            color: "light"
        },
    ]

    let demo = [
        {
            titulo: "Figma",
            descripcion: "Figma.",
            ruta: "https://www.figma.com/",
            color: "light"
        },

        {
            titulo: "inVision",
            descripcion: "Freehand – The all-in-one collaborative workspace.",
            ruta: "https://www.invisionapp.com/",
            color: "light"
        },

        {
            titulo: "Sketch",
            descripcion: "Sketch is where great design happens.",
            ruta: "https://www.sketch.com/",
            color: "light"
        },

        {
            titulo: "Zeplin",
            descripcion: "Between Design and Dev – there’s Zeplin.",
            ruta: "https://zeplin.io/",
            color: "light"
        },

        {
            titulo: "Proto.io",
            descripcion: "Prototyping for all.",
            ruta: "https://proto.io/",
            color: "success"
        },

        {
            titulo: "Axure",
            descripcion: "Infinite Interactions, Unlimited Power.",
            ruta: "https://www.axure.com/",
            color: "success"
        },

        {
            titulo: "WebFlow",
            descripcion: "Build with the power of code — without writing any.",
            ruta: "https://webflow.com/",
            color: "success"
        },

        {
            titulo: "Framer",
            descripcion: "Success starts with a site.",
            ruta: "https://www.framer.com/",
            color: "success"
        },

        {
            titulo: "Principle",
            descripcion: "Animate Your Ideas, Design Better Apps.",
            ruta: "https://principleformac.com/",
            color: "danger"
        },
    ]

    let pagas = [
        {
            titulo: "Just in Mind",
            descripcion: "Design and prototyping tool for web and mobile apps.",
            ruta: "https://www.justinmind.com/",
            color: "light"
        },

        // {
        //     titulo: "Adobe XD",
        //     descripcion: "Adobe XD",
        //     ruta: "https://helpx.adobe.com/in/support/xd.html",
        //     color: "light"
        // },
    ]
    return (
        <div className="container">
            <br />
            <h3>Apps gratuitas</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"align-middle alert alert-" + item.color} role="alert" style={{ color: "black" }}>
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
            <h3>Apps con demos gratuitas</h3>
            <hr />

            <div className="row">
                {demo.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"align-middle alert alert-" + item.color} role="alert" style={{ height: "60px", color: "black" }}>
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
            <h3>Apps pagas</h3>
            <hr />

            <div className="row">
                {pagas.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"align-middle alert alert-" + item.color} role="alert" style={{ height: "60px", color: "black" }}>
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

export default Apps