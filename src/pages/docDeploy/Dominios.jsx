import React from 'react'
import { Link } from "react-router-dom";


function Dominios() {
    let info = [
        {
            "descripcion": "Go Daddy",
            "web": "https://www.godaddy.com/es",
            "color": "light"
        },

        {
            "descripcion": "Name.com",
            "web": "https://www.name.com/es-la/",
            "color": "light"
        },

        {
            "descripcion": "Name Cheap",
            "web": "https://www.namecheap.com/",
            "color": "light"
        },
    ]
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    {info.map((item, id) => (
                        <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div className={"alert alert-" + item.color} role="alert">
                                <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                    <p><b>{item.descripcion}</b></p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dominios