import React from 'react'
import { Link } from 'react-router-dom'

function HerramientasScrum() {
    let info = [
        {
            descripcion: "Trello",
            web: "https://trello.com/es",
            color: "info"
        },

        {
            descripcion: "Jira",
            web: "https://www.atlassian.com/es/software/jira",
            color: "info"
        },

        {
            descripcion: "Asana",
            web: "https://asana.com/es/templates/use-case/agile",
            color: "info"
        },
        {
            descripcion: "Bitrix 24",
            web: "https://www.bitrix24.es/",
            color: "info"
        },
       
       
    ]
    return (
        <div className="row">
            {info.map((item, id) => (
                <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                    <div className={"alert alert-" + item.color} role="alert">
                        <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                            <p className='text-center'>
                                <b>
                                    {item.descripcion}
                                </b>
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HerramientasScrum