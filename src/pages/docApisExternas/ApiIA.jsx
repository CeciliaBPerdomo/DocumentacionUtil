import React from 'react'
import { Link } from 'react-router-dom'

function ApiIA() {
    let info = [
        {
            descripcion: "Alexa",
            web: "https://developer.amazon.com/es-ES/docs/alexa/ask-overviews/what-is-the-alexa-skills-kit.html",
            color: "light"
        },

        {
            descripcion: "Google Home",
            web: "https://developers.home.google.com/device-sdk?hl=es-419",
            color: "light"
        },

        {
            descripcion: "Future AI Lab",
            web: "https://futureailab.com/",
            color: "light"
        },
    ]

    return (
        <div className='container'>
            <br />
            <h3>Api's externas: 🧠Inteligencia artificial</h3>
            <hr />
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
            <hr />
        </div>
    )
}

export default ApiIA