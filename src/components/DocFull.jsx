import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/full.jpeg"

function DocFull() {
    let info = [
        {
            descripcion: "Developer roadmaps",
            web: "https://roadmap.sh/",
            color: "light"
        },

        {
            descripcion: "Every programmer should know",
            web: "https://github.com/mtdvio/every-programmer-should-know",
            color: "light"
        },

        {
            descripcion: "Code Signal",
            web: "https://codesignal.com/developers/",
            color: "light"
        },

        {
            descripcion: "Class Central",
            web: "https://www.classcentral.com/",
            color: "light"
        },

        {
            descripcion: "Learn to program",
            web: "https://github.com/karlhorky/learn-to-program",
            color: "light"
        },

        {
            descripcion: "Full Stack open",
            web: "https://fullstackopen.com/es/",
            color: "light"
        },

        {
            descripcion: "Aula fácil",
            web: "https://www.aulafacil.com/todos-los-certificados-gratis",
            color: "light"
        },

        {
            descripcion: "Cursos gratis",
            web: "https://cursosgratisonline.co/programacion/",
            color: "light"
        },


        {
            descripcion: "Fundación telefónica",
            web: "https://conectaempleo-formacion.fundaciontelefonica.com/argentina",
            color: "light"
        },

        {
            descripcion: "Mongo DB Trainning",
            web: "https://learn.mongodb.com/catalog",
            color: "light"
        },

        {
            descripcion: "Web Dev Open",
            web: "https://dashboard.webdevopen.com/c/fundamentals/",
            color: "light"
        },

        {
            descripcion: "Redis University",
            web: "https://university.redis.com/",
            color: "light"
        },

        {
            descripcion: "Código facilito",
            web: "https://codigofacilito.com/",
            color: "light"
        },

        {
            descripcion: "Hackerearth",
            web: "https://www.hackerearth.com/for-developers/",
            color: "light"
        },

        {
            descripcion: "Code Academy",
            web: "https://www.codecademy.com/",
            color: "light"
        },

        {
            descripcion: "Solo Learn",
            web: "https://www.sololearn.com/",
            color: "light"
        },

        {
            descripcion: "Codealo",
            web: "https://www.codealo.dev/cursos",
            color: "light"
        },

    ]


    return (
        <div className="container">
            <br />
            <div >
                <h2>
                    <img src={logo} alt="Full Stack"
                        style={{ marginRight: "25px" }}
                    />
                    Full Stack Software developer
                </h2>
            </div>
            <br />

            {/* Cursos */}
            <h3>Recursos</h3>
            <hr />
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.descripcion}</b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DocFull