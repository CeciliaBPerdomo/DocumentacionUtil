import React from 'react'
import { Link } from 'react-router-dom'

function DocumentacionOficial() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
            color: "success"
        },

        {
            descripcion: "Learn Next.js",
            web: "https://nextjs.org/learn/dashboard-app",
            color: "success"
        },

        {
            descripcion: "Templates",
            web: "https://vercel.com/templates?framework=next.js",
            color: "success"
        },
    ]

    return (
        <div>
            {/* Documentacion oficial */}
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

export default DocumentacionOficial