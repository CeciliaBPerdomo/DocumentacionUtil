import React from 'react'
import { Link } from 'react-router-dom'

function Cursos() {
    let cursos = [
        {
            descripcion: "Introducción a CSS",
            web: "https://www.simplilearn.com/learn-css-basics-free-training-course-skillup",
            color: "light"
        },


        // {
        //     "descripcion": "",
        //     "web": ""
        // },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {cursos.map((item, id) => (
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

export default Cursos