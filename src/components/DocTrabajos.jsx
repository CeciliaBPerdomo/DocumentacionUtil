import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../img/compu.jpg"

function DocTrabajos() {
  let info = [
    {
      descripcion: "UpWork",
      web: "https://www.upwork.com/",
      color: "light"
    },

    {
      descripcion: "Freelancer",
      web: "https://www.freelancer.com/",
      color: "light"
    },

    {
      descripcion: "Fiverr",
      web: "https://www.fiverr.com/",
      color: "light"
    },

    {
      descripcion: "Toptal",
      web: "https://www.toptal.com/",
      color: "light"
    },

    {
      descripcion: "People per hour",
      web: "https://www.peopleperhour.com/",
      color: "light"
    },

    {
      descripcion: "Truelancer",
      web: "https://www.truelancer.com/",
      color: "light"
    },

    {
      descripcion: "Simplyhired",
      web: "https://www.simplyhired.com/",
      color: "light"
    },

    {
      descripcion: "HubStaff Talent",
      web: "https://hubstafftalent.net/",
      color: "light"
    },

    {
      descripcion: "Flex Jobs",
      web: "https://www.flexjobs.com/",
      color: "light"
    },  
    
    {
      descripcion: "ServicEscape",
      web: "https://www.servicescape.com/",
      color: "light"
    },  
    
    {
      descripcion: "Marketer Hire",
      web: "https://marketerhire.com/",
      color: "light"
    },
    
    {
      descripcion: "Guru",
      web: "https://www.guru.com/",
      color: "light"
    },
    
    {
      descripcion: "Authentic Jobs",
      web: "https://authenticjobs.com/",
      color: "light"
    },
    
    {
      descripcion: "Manfred",
      web: "https://www.getmanfred.com/helping-juniors",
      color: "light"
    },

    // {
    //   descripcion: "Manfred",
    //   web: "https://www.getmanfred.com/helping-juniors",
    //   color: "light"
    // },

    {
      descripcion: "JsRemotely",
      web: "https://jsremotely.com/?experience=None",
      color: "light"
    },
  ]

  return (
    <div className="container">
      <br />
      <div className="alert alert-light" role="alert">
        <h2>
          <img src={logo} alt="Trabajos" style={{ width: "70px", marginRight: "15px" }} />
          Trabajos
        </h2>
      </div>
      <br />

      {/* Información */}
      <h3>FreeLance</h3>
      <hr />

      <div className="row">
        {info.map((item, id) => (
          <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
            <div className={"alert alert-" + item.color} role="alert">
              <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                <p className='text-center'>
                  <b>{item.descripcion}</b>
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

export default DocTrabajos