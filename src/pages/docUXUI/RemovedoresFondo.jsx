import React from 'react'
import { Link } from 'react-router-dom'

function RemovedoresFondo() {
    let info = [
        {
            titulo: "RemoveBg",
            descripcion: "Upload an image to remove the background.",
            ruta: "https://www.remove.bg/upload",
            color: "light"
        },

        // {
        //     titulo: "",
        //     descripcion: "",
        //     ruta: "",
        //     color: "light"
        // },
    ]
    return (
        <div className="container">
            <br />
            <h3>Removedores de fondo</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"align-middle alert alert-" + item.color} role="alert" style={{ height: "80px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}</b>
                                    {/* {item.descripcion} */}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default RemovedoresFondo