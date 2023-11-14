import React from 'react'
import { Link } from 'react-router-dom'

function ApiPeliculas() {
    let info = [
        {
            descripcion: "OMBd",
            web: "https://omdbapi.com/",
            color: "light"
        },

        {
            descripcion: "TMBD: The Movie Database",
            web: "https://developer.themoviedb.org/docs",
            color: "light"
        },
    ]

    let tele = [
        {
            descripcion: "TV Maze",
            web: "https://www.tvmaze.com/api",
            color: "success"
        },
    ]

    return (
        <div className='container'>
            <br />
            <h3>Api's externas: 🎥Películas</h3>
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


            <br />
            <h3>Api's externas: 📺Televisión</h3>
            <hr />

            <div className="row">
                {tele.map((item, id) => (
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
            <hr />

        </div>
    )
}

export default ApiPeliculas