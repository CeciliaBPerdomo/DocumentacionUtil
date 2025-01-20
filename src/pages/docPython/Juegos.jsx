import React from 'react'
import { Link } from 'react-router-dom'

function Juegos() {
    let info = [
        {
            descripcion: "Codedex",
            web: "https://www.codedex.io/python",
            color: "primary"
        },
        
        // {
        //     descripcion: "CodeCombat",
        //     web: "https://codecombat.com/",
        //     color: "primary"
        // },

        {
            descripcion: "Compute It",
            web: "https://compute-it.toxicode.fr/",
            color: "primary"
        },

        {
            descripcion: "Checkio",
            web: "https://py.checkio.org/",
            color: "primary"
        },

        {
            descripcion: "CodeCombat",
            web: "https://codecombat.com/",
            color: "primary"
        },	
    ]

    return (
        <div className='container'>
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

export default Juegos