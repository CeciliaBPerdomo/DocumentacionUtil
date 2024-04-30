import React from 'react'
import DocumentacionOficial from '../pages/docNext/DocumentacionOficial'
import LibreriasUXUI from '../pages/docNext/LibreriasUXUINext'

function Next() {
    return (
        <div className='container'>

            <br />
            <div className="alert alert-light" role="alert">
                <h3>
                    {/* <img src={logo} alt="Apis externas" style={{ width: "90px", marginRight: "10px" }} /> */}
                    Next.js
                </h3>
            </div>
            <br />

            <br />
            <h3>Documentación oficial</h3>
            <hr />
            <DocumentacionOficial />

            <br />
            <h3>Librerías UX/UI</h3>
            <hr />
            <LibreriasUXUI />

        </div>
    )
}

export default Next