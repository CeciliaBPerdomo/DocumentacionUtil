import React from 'react'
import { Link } from 'react-router-dom'
import letras from "../../img/letra.png"

function Tipografia() {
    let info = [
        // {
        //     titulo: "Realtime Colors",
        //     descripcion: "Visualize Your Colors & Fonts On a Real Site",
        //     ruta: "https://www.realtimecolors.com/?colors=130e01-fffaeb-ff8400-fff5d6-cf4307&fonts=Poppins-Poppins",
        //     color: "light"
        // },

    ]
    return (
        <div className="container">
            <div className="alert alert-light col-4 d-flex justify-content-center" role="alert">
                <img src={letras} alt="Tipografia" />
            </div>
            <br />
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-4" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ height: "85px", color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo}: </b>
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

export default Tipografia