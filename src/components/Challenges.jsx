import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/challengeLogo.jpg"

function Challenges() {
    let info = [
        {
            descripcion: "CodeWars",
            ruta: "https://www.codewars.com/",
            color: "light"
        },

        {
            descripcion: "Exercism",
            ruta: "https://exercism.org/",
            color: "light"
        },

        {
            descripcion: "Let Code",
            ruta: "https://leetcode.com/",
            color: "light"
        },

        {
            descripcion: "Dev Challenges",
            ruta: "https://devchallenges.io/",
            color: "light"
        },

        {
            descripcion: "Coder byte",
            ruta: "https://coderbyte.com/",
            color: "light"
        },

        {
            descripcion: "Code Chef",
            ruta: "https://www.codechef.com/",
            color: "light"
        },

        {
            descripcion: "Hackerrank",
            ruta: "https://www.hackerrank.com/",
            color: "light"
        },

        {
            descripcion: "Ebadit",
            ruta: "https://edabit.com/",
            color: "light"
        },

        {
            descripcion: "Top Coder",
            ruta: "https://www.topcoder.com/challenges",
            color: "light"
        },

        {
            descripcion: "Retos de programación semanales",
            ruta: "https://retosdeprogramacion.com/semanales2023",
            color: "light"
        },

        // {
        //     descripcion: "Retos de programación semanales",
        //     ruta: "https://retosdeprogramacion.com/semanales2023",
        //     color: "light"
        // },
    ]
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h4>
                    <img src={logo} alt="Challenge"/>
                </h4>
            </div>

            {/* Challenges */}
            <br />
            <h3>Challenges</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color}
                            style={{ color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center align-middle'>
                                    <b>
                                    {item.descripcion} 
                                    </b>
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

export default Challenges