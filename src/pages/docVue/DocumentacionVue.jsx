import React from 'react'
import { Link } from 'react-router-dom'

function DocumentacionVue() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://vuejs.org/",
            color: "light"
        }, 

        {
            descripcion: "Vue Composition Utilities",
            web: "https://vueuse.org/",
            color: "light"
        },

        {
            descripcion: "Pinia",
            web: "https://pinia.vuejs.org/",
            color: "light"
        },

        
        {
            descripcion: "Vue Router",
            web: "https://router.vuejs.org/",
            color: "light"
        },
    ]

    return (
        <div className="container text-center">
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p>  {item.descripcion} </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default DocumentacionVue