import React from 'react'
import { Link } from 'react-router-dom'

function ApisCalendarios() {
    let info = [
        {
            descripcion: "10+ Mejores Calendarios",
            web: "https://www.nylas.com/blog/best-calendar-apis/",
            color: "light"
        },

        {
            descripcion: "Calendly",
            web: "https://developer.calendly.com/api-docs/4b402d5ab3edd-calendly-developer",
            color: "light"
        },

        {
            descripcion: "Make Plans",
            web: "https://makeplans.com/es/api/",
            color: "light"
        },

        {
            descripcion: "React-Data-Picker",
            web: "https://projects.wojtekmaj.pl/react-date-picker/",
            color: "light"
        },

        {
            descripcion: "Google Calendar",
            web: "https://developers.google.com/calendar?hl=es-419",
            color: "light"
        },

        {
            descripcion: "Google Calendar Simple Api",
            web: "https://google-calendar-simple-api.readthedocs.io/en/latest/",
            color: "light"
        },

        {
            descripcion: "Guía Google Calendar",
            web: "https://stateful.com/blog/google-calendar-react",
            color: "light"
        },
    ]

    return (
        <div className='container'>
            <br />
            <h3>Api's externas: 📰Noticias</h3>
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

export default ApisCalendarios