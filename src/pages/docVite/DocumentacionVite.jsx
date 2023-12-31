import React from 'react'
import { Link } from 'react-router-dom'

function DocumentacionVite() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://vitejs.dev/",
            color: "light"
        },
    ]
    return (
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
    )
}

export default DocumentacionVite