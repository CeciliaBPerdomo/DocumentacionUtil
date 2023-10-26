import React from 'react'
import { Link } from 'react-router-dom'

function AnimacionesCSS() {
    let animaciones = [
        {
            libreria: "Floating-UI",
            web: "https://floating-ui.com/",
            descripcion: "A JavaScript library to position floating elements and create interactions for them.",
            git: "https://github.com/floating-ui/floating-ui",
            color: "success"
        },

        {
            libreria: "Transition.css",
            web: "https://www.transition.style/",
            descripcion: "Drop-in CSS transitions.",
            git: "https://github.com/argyleink/transition.css",
            color: "success"
        },

        {
            libreria: "Atropos.JS",
            web: "https://atroposjs.com/",
            descripcion: "Stunning touch-friendly 3D parallax hover effects.",
            git: "https://github.com/nolimits4web/atropos/",
            color: "danger"
        },

        {
            libreria: "Swiper.JS",
            web: "https://swiperjs.com/",
            descripcion: "The Most Modern Mobile Touch Slider.",
            git: "https://github.com/nolimits4web/swiper",
            color: "danger"
        },

        // {
        //     libreria: "",
        //     web: "",
        //     descripcion: "",
        //     git: "",
        //     color: "primary"
        // },

        // {
        //     libreria: "",
        //     web: "",
        //     descripcion: "",
        //     git: "",
        //     color: "primary"
        // },

        // {
        //     libreria: "",
        //     web: "",
        //     descripcion: "",
        //     git: "",
        //     color: "warning"
        // },

        // {
        //     libreria: "",
        //     web: "",
        //     descripcion: "",
        //     git: "",
        //     color: "warning"
        // },
    ]
    return (
        <div className="container">

            <br />
            <h3>Animaciones</h3>
            <hr />
            <br />

            <div className='text-center'>
                <div className="row">
                    {animaciones.map((item, id) => (
                        <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div className="alert alert-light" role="alert" style={{ color: "black" }}>
                                <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                    <p><b>{item.libreria}</b>
                                        {/* : {item.descripcion} */}
                                    </p>
                                </Link>
                                {/* {item.git !== "" ?
                                <Link to={item.git} style={{ textDecoration: "none", color: "black" }}>
                                    <p>gitHub: <b>{item.git}</b></p>
                                </Link>
                                : null} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnimacionesCSS