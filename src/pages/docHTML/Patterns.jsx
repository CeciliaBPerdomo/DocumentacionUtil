import React from 'react'
import { Link } from 'react-router-dom'

function Patterns() {
    let patterns = [
        {
            "descripcion": "HTMLrev",
            "web": "https://htmlrev.com/"
        },
    ]
  return (
    <div className="container text-center">
    <div className="row">
        {patterns.map((item, id) => (
            <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                <div className="alert alert-success" role="alert" style={{color: "black"}}>
                    <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                      <p>  {item.descripcion} </p>
                    </Link>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Patterns