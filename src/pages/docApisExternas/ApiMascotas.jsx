import React from 'react'
import { Link } from 'react-router-dom'

function ApiMascotas() {
    let info = [
        {
            descripcion: "Dog-Api",
            web: "https://dog.ceo/dog-api/",
            color: "light"
        },
        
        // {
        //     descripcion: "Marvel",
        //     web: "https://developer.marvel.com/",
        //     color: "light"
        // },
    ]
  return (
    <div className='container'>
            <br />
            <h3>Api's externas: 🐕 Mascotas</h3>
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
            <hr />
            </div>
  )
}

export default ApiMascotas