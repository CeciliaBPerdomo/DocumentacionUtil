import React from 'react'
import ReactPlayer from 'react-player'

function ReactPythonDocOficial() {
    let info = [
        {
            nombre: "ReactPy",
            descripcion: "ReactPy is a library for building user interfaces in Python without Javascript. ReactPy interfaces are made from components which look and behave similarly to those found in ReactJS. Designed with simplicity in mind, ReactPy can be used by those without web development experience while also being powerful enough to grow with your ambitions.",
            web: "https://reactpy.dev/docs/index.html"
        },

        {
            nombre: "Package React.py",
            descripcion: "ReactPy is a library for building user interfaces in Python without Javascript. ReactPy interfaces are made from components that look and behave similar to those found in ReactJS. Designed with simplicity in mind, ReactPy can be used by those without web development experience while also being powerful enough to grow with your ambitions.",
            web: "https://pypi.org/project/reactpy/"
        },

        // {
        //     nombre: "",
        //     descripcion: "",
        //     web: ""
        // },
    ]

    const abrirLink = (direccion) => {
        window.location.replace(direccion)
    }


    return (
        <div className='container'>
            {/* Fechas */}
            <br />
            <h3>Documentación oficial: React.py</h3>
            <hr />

            <div class="container text-center">
                <div class="row">
                    {info.map((item, id) => (
                        <div class="col-lg-6 col-sm-1 col-md-1" key={id}>
                            <div class="alert alert-success" role="alert" style={{ minHeight: "200px" }}>
                                <p className='text-start'><b>{item.nombre}</b>: {item.descripcion}</p>
                                <p className='text-start'>Web/npm: <b onClick={(e) => abrirLink(item.web)}>{item.web}</b></p>
                            </div>
                          
                        </div>
                    ))}
                </div>
            </div>

            <br />
            <h3>Video tutorial</h3>
            <hr />

            <ReactPlayer
                url='https://www.youtube.com/watch?v=EE3wnE0nb4U&t=206s'
                className='react-player'
                playing
                width='49%'
                //height='100%'
            />
            <br />

        </div>
    )
}

export default ReactPythonDocOficial