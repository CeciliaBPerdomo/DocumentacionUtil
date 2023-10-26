import React from 'react'
import { Link } from 'react-router-dom'
// import colores from "../../img/colorwheel.png"

function ColoresUX() {
    let info = [
        {
            titulo: "Realtime Colors",
            descripcion: "Visualize Your Colors & Fonts On a Real Site",
            ruta: "https://www.realtimecolors.com/?colors=130e01-fffaeb-ff8400-fff5d6-cf4307&fonts=Poppins-Poppins",
            color: "light"
        },

        {
            titulo: "Coolors",
            descripcion: "The super fast color paletts generator.",
            ruta: "https://coolors.co/",
            color: "light"
        },

        {
            titulo: "Color",
            descripcion: "Los colores están inspirados por declaraciones atrevidas. Introduce colores vibrantes e inesperados.",
            ruta: "https://desarrollador-android.com/material-design/diseno-material-design/estilo/color/",
            color: "light"
        },

        {
            titulo: "Color safe",
            descripcion: "Empowering designers with beautiful and accessible color palettes based on WCAG Guidelines of text and background contrast ratios.",
            ruta: "http://colorsafe.co/",
            color: "light"
        },

        {
            titulo: "Choosing colors",
            descripcion: "How to Choose a Color for Your Website: Expert Tips.",
            ruta: "https://www.digitalinformationworld.com/2022/02/how-to-choose-color-for-your-website.html",
            color: "light"
        },

        {
            titulo: "Adobe colors",
            descripcion: "Da rienda suelta a la magia de Color en Adobe Express.",
            ruta: "https://color.adobe.com/es/create/color-wheel",
            color: "light"
        },

        {
            titulo: "Colorzilla",
            descripcion: "Is an extension that assists web developers and graphic designers with color related tasks - both basic and advanced.",
            ruta: "https://www.colorzilla.com/chrome/",
            color: "light"
        },

        {
            titulo: "Color names",
            descripcion: "Modern browsers support 140 named colors. Use them in your HTML and CSS by name, Hex color code or RGB value.",
            ruta: "https://htmlcolorcodes.com/color-names/",
            color: "light"
        },

    ]

    return (
        <div className="container">
            {/* <div className="alert alert-light col-lg-5 col-sm-1 d-flex justify-content-center" role="alert">
                <img src={colores} alt="Colores" />
            </div>
            <br /> */}

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ color: "black" }}>
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


export default ColoresUX