import React from 'react'
import { Link } from 'react-router-dom'

function ImagenesApi() {
    let info = [
        {
            descripcion: "Cloudinary",
            web: "https://cloudinary.com/documentation",
            color: "light"
        },

        {
            descripcion: "Dall-e-Api",
            web: "https://openai.com/blog/dall-e-api-now-available-in-public-beta",
            color: "light"
        },

        {
            descripcion: "Imgur",
            web: "https://www.pexels.com/api/documentation/",
            color: "light"
        },

        {
            descripcion: "Unsplash",
            web: "https://unsplash.com/developers",
            color: "light"
        },

        {
            descripcion: "Giphy",
            web: "https://developers.giphy.com/docs/api/",
            color: "light"
        },

    ]

    return (
        <div className='container'>
            <br />
            <h3>Api's externas: 📷Imágenes</h3>
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

export default ImagenesApi