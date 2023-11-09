import React from 'react'
import { Link } from 'react-router-dom'

function CursosAWS() {
    let info = [
        {
            descripcion: "AWS Educate",
            web: "https://aws.amazon.com/es/education/awseducate/",
            color: "light"
        },
    ]

    return (
        <div>
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

export default CursosAWS