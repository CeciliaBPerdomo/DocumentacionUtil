import React from 'react'
import { Link } from 'react-router-dom'

function ReactRouter() {
    let info = [
        {   nombre: "Documentación oficial", 
            direccion: "/react-router"
        }
    ]

  return (
    <div>
         <div className="container text-center">
                <div className="row">
                    {info.map((item, id) => (
                        <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div className="alert alert-success" role="alert">
                                <Link to={item.direccion} style={{ textDecoration: "none", color: "black" }}>
                                    {item.nombre}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}


export default ReactRouter