import React from 'react'
import { Link } from 'react-router-dom'


function Capacidades() {
    let info = [
        {
            titulo: "W3C",
            descripcion: "Contrast (Minimum):Understanding SC 1.4.3",
            ruta: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",
            color: "light"
        },

        {
            titulo: "Colour Blind Awareness",
            descripcion: "Types of Colour Blindness",
            ruta: "https://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/",
            color: "light"
        },

        {
            titulo: "Color Oracle",
            descripcion: "Is a free color blindness simulator for Windows, Mac and Linux. It takes the guesswork out of designing for color blindness by showing you in real time what people with common color vision impairments will see.",
            ruta: "https://colororacle.org/",
            color: "light"
        },

        {
            titulo: "VeDa: Vesticual Symptoms",
            descripcion: "Common vestibular symptoms include dizziness, vertigo and imbalance. Secondary symptoms may include nausea, ringing in the ears (or tinnitus), hearing loss, and cognitive impairment.",
            ruta: "https://vestibular.org/article/what-is-vestibular/vestibular-symptoms/",
            color: "light"
        },
    ]

  return (
    <div className="container">
            <br />
            <h3>Capacidades diferentes</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-3" key={id}>
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

export default Capacidades