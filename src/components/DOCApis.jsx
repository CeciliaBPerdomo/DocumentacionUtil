import React from 'react'
import { Link } from 'react-router-dom'

// Imagen
import logo from "../img/api.png"
import Apis from '../pages/docApisExternas/Apis'

function DOCApis() {
    let info = [
        {
            descripcion: "Public Apis",
            web: "https://github.com/public-apis/public-apis",
            color: "light"
        },

        {
            descripcion: "Rapid Api",
            web: "https://rapidapi.com/hub",
            color: "light"
        },

        {
            descripcion: "Any Api",
            web: "https://any-api.com/",
            color: "light"
        },

    ]

    return (
        <div className='container'>

            <br />
            <div className="alert alert-light" role="alert">
                <h3>
                    <img src={logo} alt="Apis externas" style={{ width: "90px", marginRight: "10px" }} />
                    Api's externas
                </h3>
            </div>
            <br />

            <br />
            <h3>Muchas Apis</h3>
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
            <h3>Api's externas</h3>
            <hr />
            <Apis />
            
            <hr />
        </div>
    )
}

export default DOCApis