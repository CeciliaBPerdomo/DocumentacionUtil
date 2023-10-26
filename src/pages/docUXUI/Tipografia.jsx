import React from 'react'
import { Link } from 'react-router-dom'
// import letras from "../../img/letra.png"

function Tipografia() {
    let info = [
        {
            titulo: "Canva's",
            descripcion: "Canva's ultimate guide to font combinations",
            ruta: "https://www.canva.com/learn/the-ultimate-guide-to-font-pairing/",
            color: "success"
        },

        {
            titulo: "TypeWolf",
            descripcion: "What’s Trending in Type",
            ruta: "https://www.typewolf.com/",
            color: "success"
        },

        {
            titulo: "Styleshout",
            descripcion: "10 Excellent Font Pairing Tools for Designers",
            ruta: "https://styleshout.com/10-excellent-font-pairing-tools-for-designers/",
            color: "success"
        },

        {
            titulo: "Fonts Ninja",
            descripcion: "Speed up your design workflow!",
            ruta: "https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh?hl=en-US",
            color: "success"
        },

    ]
    return (
        <div className="container">
            {/* <div className="alert alert-success col-4 d-flex justify-content-center" role="alert">
                <img src={letras} alt="Tipografia" />
            </div>
            <br /> */}
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
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