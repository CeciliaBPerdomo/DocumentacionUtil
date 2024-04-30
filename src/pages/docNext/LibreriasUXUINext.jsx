import React from 'react'
import { Link } from 'react-router-dom'

function LibreriasUXUI() {
    let info = [
        {
            descripcion: "Next UI",
            web: "https://nextui.org/",
            color: "danger"
        },

        {
            descripcion: "Radix",
            web: "https://www.radix-ui.com/",
            color: "danger"
        },

        {
            descripcion: "Daysi",
            web: "https://daisyui.com/",
            color: "danger"
        },

        {
            descripcion: "Shadcn",
            web: "https://ui.shadcn.com/",
            color: "danger"
        },

        {
            descripcion: "Mantine",
            web: "https://ui.mantine.dev/",
            color: "danger"
        },
    ]

    return (
        <div>
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

export default LibreriasUXUI