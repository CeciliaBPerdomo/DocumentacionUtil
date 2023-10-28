import React from 'react'
import { Link } from 'react-router-dom'

function CursosVue() {
    let info = [
        {
            descripcion: "Microsoft Ignite",
            web: "https://learn.microsoft.com/es-es/training/paths/vue-first-steps/?WT.mc_id=DT-MVP-5004970",
            color: "success"
        },

        {
            descripcion: "Official Certification",
            web: "https://vueschool.io/articles/news/the-official-vue-js-certification-program-is-announced/?utm_source=GoogleAds&utm_medium=SEM&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBWISRrjd2AKQcHpHCIjVhpGbJfqOTU-kUmh_C_Y0RIhL2hMzBQ8_xxoCDvYQAvD_BwE",
            color: "success"
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

export default CursosVue