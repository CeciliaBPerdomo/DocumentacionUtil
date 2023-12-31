import React from 'react'
import { Link } from 'react-router-dom'


function ApisComics() {
    let info = [
        {
            descripcion: "PokeApi",
            web: "https://pokeapi.co/",
            color: "light"
        },

        {
            descripcion: "Marvel",
            web: "https://developer.marvel.com/",
            color: "light"
        },

        {
            descripcion: "Rick and Morty",
            web: "https://rickandmortyapi.com/",
            color: "light"
        },

        {
            descripcion: "Star Wars",
            web: "https://swapi.py4e.com/",
            color: "light"
        },

        {
            descripcion: "Dragon Ball",
            web: "https://dragonball.fandom.com/f/p/4400000000000173218",
            color: "light"
        },

        {
            descripcion: "Jikan",
            web: "https://jikan.moe/",
            color: "light"
        },
    ]

    let libros = [
        {
            descripcion: "Open Library",
            web: "https://openlibrary.org/developers/api",
            color: "success"
        },
    ]
    return (
        <div className='container'>
            <br />
            <h3>Api's externas: 💥Comics</h3>
            <hr />
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>
                                        {item.descripcion}
                                    </b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Libros */}
            <br />
            <h3>Api's externas: 📖Libros</h3>
            <hr />
            <div className="row">
                {libros.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
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

export default ApisComics