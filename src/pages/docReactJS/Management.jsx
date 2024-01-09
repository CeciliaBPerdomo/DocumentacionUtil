import React from 'react'
import { Link } from 'react-router-dom'

function Management() {
    let info = [
        {
            descripcion: "Zustand",
            web: "https://docs.pmnd.rs/zustand/getting-started/introduction",
            color: "success"
        },

        {
            descripcion: "Jotai",
            web: "https://jotai.org/",
            color: "success"
        },

        {
            descripcion: "TanStack",
            web: "https://tanstack.com/query/v3/",
            color: "success"
        },
    ]
    return (
        <div className='container'>
            <br />
            <h3>State Management</h3>
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
        </div>
    )
}

export default Management