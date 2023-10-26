import React from 'react'
import { Link } from 'react-router-dom'

function Patterns() {
    let info = [
        {
            descripcion: "Patterns",
            web: "https://www.patterns.dev/",
            color: "primary"
        }
    ]
    
    return (
        <div className="container text-center">
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
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

export default Patterns