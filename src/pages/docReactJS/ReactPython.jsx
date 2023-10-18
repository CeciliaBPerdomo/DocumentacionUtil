import React from 'react'
import { Link } from 'react-router-dom'

function ReactPython() {
    let info = [
        {   nombre: "Documentación oficial", 
            direccion: "/react-python"
        }
    ]

  return (
    <div>
         <div className="container text-center">
                <div className="row">
                    {info.map((item, id) => (
                        <div className="col-3" key={id}>
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

export default ReactPython