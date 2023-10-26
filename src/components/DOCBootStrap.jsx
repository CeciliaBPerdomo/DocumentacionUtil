import React from 'react'
import { Link } from 'react-router-dom'


function DOCBootStrap() {
    let info = [
        {
            descripcion: "MBD",
            web: "https://mdbootstrap.com/",
            color: "success"
        }
    ]

    return (
        <div className="container">
            <br />
            <h3>Documentación oficial</h3>
            <hr />

            <div className='row'>
                <div className="col-lg-3 col-sm-1 col-md-1">
                    <div className='alert alert-light' role="alert">
                        <Link to="https://getbootstrap.com/" style={{ textDecoration: "none", color: "black" }}>
                            <p className='text-center'>Documentación oficial</p>
                        </Link>
                    </div>
                </div>
            </div>

            <br />
            <h3>Templates</h3>
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
        </div>
    )
}

export default DOCBootStrap