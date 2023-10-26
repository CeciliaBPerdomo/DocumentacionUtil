import React from 'react'
import { Link } from 'react-router-dom'

function Cursos() {
    let cursos = [
        {
            "descripcion": "Freecodecamp",
            "web": "https://www.freecodecamp.org/espanol/news/aprende-html-y-css-curso-desde-cero/"
        },

        {
            "descripcion": "OpenBootCamp",
            "web": "https://open-bootcamp.com/cursos/html-y-css"
        },

        {
            "descripcion": "Video-Cursos",
            "web": "https://videocursos.co/curso-de-html-y-css/"
        },

        {
            "descripcion": "Learn the fundamentals",
            "web": "https://github.com/microsoft/Web-Dev-For-Beginners"
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
                <div className="alert alert-light" role="alert" style={{color: "black"}}>
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