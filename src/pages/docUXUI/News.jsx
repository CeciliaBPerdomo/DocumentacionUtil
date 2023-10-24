import React from 'react'
import { Link } from 'react-router-dom'

function News() {
    let info = [
        {
            titulo: "Sketch vs Figma, Adobe XD, And Other UI Design Applications",
            descripcion: "Sketch vs Figma, Adobe XD, And Other UI Design Applications",
            ruta: "https://www.smashingmagazine.com/2019/04/sketch-figma-adobe-xd-ui-design-applications/",
            color: "light"
        },

        {
            titulo: "How Spotify’s design system goes beyond platforms",
            descripcion: "How Spotify’s design system goes beyond platforms",
            ruta: "https://www.designsystems.com/",
            color: "light"
        },

        {
            titulo: "Effective Visual Communication for Graphical User Interfaces",
            descripcion: "Effective Visual Communication for Graphical User Interfaces",
            ruta: "http://web.cs.wpi.edu/~matt/courses/cs563/talks/smartin/int_design.html",
            color: "light"
        },

        {
            titulo: "Using Light, Color and Contrast Effectively in UI Design",
            descripcion: "Using Light, Color and Contrast Effectively in UI Design",
            ruta: "https://usabilitypost.com/2008/08/14/using-light-color-and-contrast-effectively-in-ui-design/",
            color: "light"
        },

        {
            titulo: "UX Planet",
            descripcion: "UX Planet",
            ruta: "https://uxplanet.org/",
            color: "success"
        },

        {
            titulo: "7 Rules for Creating Gorgeous UI - Part 1",
            descripcion: "7 Rules for Creating Gorgeous UI",
            ruta: "https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda#b7c4",
            color: "success"
        },

        {
            titulo: "7 Rules for Creating Gorgeous UI - Part 2",
            descripcion: "7 Rules for Creating Gorgeous UI",
            ruta: "https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96",
            color: "success"
        },
    ]
    return (
        <div className="container">
            <br />
            <h3>Noticias</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ height: "80px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo} </b>
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

export default News