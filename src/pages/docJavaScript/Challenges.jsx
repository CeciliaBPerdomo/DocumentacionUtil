import React from 'react'
import { Link } from 'react-router-dom'

function Challenges() {
    let info = [
        {
            descripcion: "FrontEnd Mentor",
            web: "https://www.frontendmentor.io/",
            color: "primary"
        },

        {
            descripcion: "30 days of JS",
            web: "https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/readme.md",
            color: "primary"
        },

        {
            descripcion: "JavaScript 30",
            web: "https://javascript30.com/",
            color: "primary"
        },

        {
            descripcion: "30 days of javaScript",
            web: "https://github.com/swapnilsparsh/30DaysOfJavaScript",
            color: "primary"
        },

        {
            descripcion: "Advent.js",
            web: "https://adventjs.dev/es",
            color: "primary"
        },


    ]
    return (
        <div className="container text-center">
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p>
                                    <b>
                                        {item.descripcion}
                                    </b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Challenges