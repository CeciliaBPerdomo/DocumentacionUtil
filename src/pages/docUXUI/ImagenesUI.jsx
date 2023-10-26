import React from 'react'
import { Link } from 'react-router-dom'


function ImagenesUI() {
  let info = [
    {
      titulo: "Foodies Feed",
      descripcion: "Build with the power of code — without writing any.",
      ruta: "https://www.foodiesfeed.com/",
      color: "success"
    },

    {
      titulo: "Pexels",
      descripcion: "",
      ruta: "https://www.pexels.com/es-es/",
      color: "success"
    },

    {
      titulo: "Unsplash",
      descripcion: "",
      ruta: "https://unsplash.com/es",
      color: "success"
    },

    {
      titulo: "Stock Snap",
      descripcion: "Beautiful Free Stock Photos",
      ruta: "https://stocksnap.io/",
      color: "success"
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
                  <b>{item.titulo}</b>
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

export default ImagenesUI