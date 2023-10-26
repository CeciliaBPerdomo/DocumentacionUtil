import React from 'react'
import { Link } from 'react-router-dom'

function DOCFoundation() {
  return (
    <div className="container">
    <br />
    <h3>Documentación oficial</h3>
    <hr />

    <div className='row'>
        <div className="col-lg-3 col-sm-1 col-md-1">
            <div className='alert alert-light' role="alert">
                <Link to="https://get.foundation/" style={{ textDecoration: "none", color: "black" }}>
                    <p className='text-center'>Documentación oficial</p>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default DOCFoundation