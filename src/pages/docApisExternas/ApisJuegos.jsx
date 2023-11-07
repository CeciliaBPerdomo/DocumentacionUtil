import React from 'react'
import { Link } from 'react-router-dom'

function ApisJuegos() {
    let info = [
        {
            descripcion: "Steam",
            web: "https://steamcommunity.com/dev",
            color: "light"
        },
        {
            descripcion: "Riot Games",
            web: "https://developer.riotgames.com/apis",
            color: "light"
        },
        {
            descripcion: "Free to Game",
            web: "https://www.freetogame.com/api-doc",
            color: "light"
        },
    ]

    let deportes = [
        {
            descripcion: "Football",
            web: "https://www.api-football.com/",
            color: "success"
        },
    ]

    return (
        <div className='container'>
            <br />
            <h3>Api's externas: 🎮Juegos</h3>
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


            <br />
            <h3>Api's externas: ⚽Deportes</h3>
            <hr />

            <div className="row">
                {deportes.map((item, id) => (
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

export default ApisJuegos