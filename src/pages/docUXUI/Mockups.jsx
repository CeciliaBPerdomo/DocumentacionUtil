import React from 'react'
import { Link } from 'react-router-dom'

function Mockups() {
    let info = [
        {
            titulo: "Previewed",
            descripcion: "The simplest way to create device mockups. All in your browser.",
            ruta: "https://previewed.app/",
            color: "warning"
        },

        {
            titulo: "Jitter",
            descripcion: "Motion design, made simple.",
            ruta: "https://jitter.video/",
            color: "warning"
        },

        {
            titulo: "MockRocket",
            descripcion: "Create device mockups & products videos.",
            ruta: "https://mockrocket.io/",
            color: "warning"
        },

        {
            titulo: "All Free Mockups",
            descripcion: "Magazines & Books, iPhone, iPad, MacBook, iMac, Packaging, Signs, Vehicles, Apparel, Food and Beverages, Cosmetics and more!",
            ruta: "https://www.mockupworld.co/all-mockups/",
            color: "warning"
        },
    ]

  return (
    <div className="container">
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert" style={{ color: "black" }}>
                            <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.titulo} </b>
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
export default Mockups