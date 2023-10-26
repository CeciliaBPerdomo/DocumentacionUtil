import React from 'react'
import { Link } from 'react-router-dom'

function Challenges() {
    let challenges = [
        {
            descripcion: "FrontEnd Mentor",
            web: "https://www.frontendmentor.io/",
            color: "danger"
        },
        {
            descripcion: "Codepen",
            web: "https://codepen.io/challenges",
            color: "danger"
        },


        // {
        //     "descripcion": "",
        //     "web": ""
        // },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {challenges.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ height: "55px", color: "black" }}>
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p>  {item.descripcion} </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Challenges