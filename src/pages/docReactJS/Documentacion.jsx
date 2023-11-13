import React from 'react'
import { Link } from 'react-router-dom'

function Documentacion() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://es.react.dev/",
            color: "light"
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

export default Documentacion