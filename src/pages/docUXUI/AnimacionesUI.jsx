import React from 'react'
import { Link } from 'react-router-dom'


function AnimacionesUI() {
  let info = [
    {
      titulo: "10 Principles of Animation",
      descripcion: "Build with the power of code — without writing any.",
      ruta: "https://uxplanet.org/10-principles-of-animation-in-material-design-53b870e74629?gi=12dbbcd78cee",
      color: "danger"
    },

    {
      titulo: "Practical Techniques On Designing Animation",
      descripcion: "",
      ruta: "https://www.smashingmagazine.com/2015/06/practical-techniques-on-designing-animation/",
      color: "danger"
    },

    {
      titulo: "9 types of animatios",
      descripcion: "Animation plays a key role in interface design if it’s targeted at users and the task is to provide them with a quality interaction experience.",
      ruta: "https://lvivity.com/types-of-animations-for-mobile-apps",
      color: "danger"
    },

    {
      titulo: "Fffuel",
      descripcion: "fffuel is a collection of color tools and free SVG generators for gradients, patterns, textures, shapes & backgrounds.",
      ruta: "https://fffuel.co/",
      color: "danger"
    },

  ]
  return (
    <div className="container">
      <div className="row ">
        {info.map((item, id) => (
          <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
            <div className={"alert alert-" + item.color} role="alert" style={{ height: "75px", color: "black" }}>
              <Link to={item.ruta} style={{ textDecoration: "none", color: "black" }}>
                <p className='align-middle text-center'>
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

export default AnimacionesUI