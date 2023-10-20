import React from 'react'
import { Link } from 'react-router-dom'

function Separaciones() {
    let separaciones = [
        {
            libreria: "Generate SVG Waves",
            web: "https://svgwave.in/",
            descripcion: "A minimal gradient svg wav generator with lot of customization.",
            git: "https://github.com/anup-a/svgwave",
            color: "success"
        },

        {
            libreria: "Shape Divider",
            web: "https://www.shapedivider.app/",
            descripcion: "Free tool to make it easier for designers and developers to export a beautiful SVG shape divider for their latest project.",
            git: "https://github.com/gwleuverink/blade-shape-divider",
            color: "success"
        },

        {
            libreria: "Get Waves",
            web: "https://getwaves.io/",
            descripcion: "Generate stunning visual content – ready to use with your design tools and workflow.",
            git: "https://haikei.app/",
            color: "danger"
        },

        {
            libreria: "Fancy Border Radius",
            web: "https://9elements.github.io/fancy-border-radius/",
            descripcion: "When you use eight values specifying border-radius in CSS, you can build organic looking shapes.",
            git: "https://github.com/9elements/fancy-border-radius",
            color: "danger"
        },

        {
            libreria: "SVG Shape Generator",
            web: "https://www.softr.io/tools/svg-shape-generator",
            descripcion: "Create Beautiful SVG Shapes.",
            git: "https://www.softr.io/blog",
            color: "primary"
        },

        {
            libreria: "The Big Horizontal Line Archive",
            web: "https://www.smashingmagazine.com/2008/09/the-hr-contest-results-download-your-fresh-hr-line-now/",
            descripcion: "However, the design of horizontal lines is quite simple and not really appealing by default.",
            git: "",
            color: "primary"
        },

        {
            libreria: "Separator generator",
            web: "https://wweb.dev/resources/css-separator-generator",
            descripcion: "CSS Section Separator Generator.",
            git: "https://github.com/wwebdev/separator-generator",
            color: "warning"
        },

        {
            libreria: "Animar gradientes o degradados",
            web: "https://pixonauta.com/como-animar-gradientes-o-degradados-con-css/",
            descripcion: "Cómo puedes animar gradientes o degradados solo con CSS. Un efecto que luce muy bien para dar notoriedad a cualquier sitio web.",
            git: "",
            color: "warning"
        },
    ]

    return (
        <div className="container text-center">
            <br />
            <div className="row">
                {separaciones.map((item, id) => (
                    <div className="col-6" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ height: "120px", color: "black" }}>
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p><b>{item.libreria}</b>: {item.descripcion}</p>
                            </Link>
                            {item.git !== "" ?
                            <Link to={item.git} style={{ textDecoration: "none", color: "black" }}>
                                <p>gitHub: <b>{item.git}</b></p>
                            </Link>
                            : null }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Separaciones