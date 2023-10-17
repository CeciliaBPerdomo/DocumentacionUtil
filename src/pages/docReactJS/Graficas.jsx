import React from 'react'

function Graficas() {
// Listado de librerias de graficas
let graficas = [
    {   libreria: "react-vis", 
        web: "https://www.npmjs.com/package/react-vis", 
        descripcion: "A collection of react components to render common data visualization charts, such as line/area/bar charts, heat maps, scatterplots, contour plots, hexagon heatmaps, pie and donut charts, sunbursts, radar charts, parallel coordinates, and tree maps.", 
        git: "https://github.com/uber-common/react-vis" },

    {   libreria: "React-vis alternatives", 
        web: "https://react.libhunt.com/react-vis-alternatives", 
        descripcion: "Based on the chart category. Alternatively, view react-vis alternatives based on common mentions on social networks and blogs.", 
        git: "https://uber.github.io/react-vis" },
    
    {   libreria: "Chart.js", 
        web: "https://www.chartjs.org/", 
        descripcion: "Simple yet flexible JavaScript charting library for the modern web", 
        git: "https://github.com/chartjs/Chart.js"}, 

    //{ libreria: "", web: "", descripcion: "", git: ""}, 
]

const abrirLink = (direccion) => {
    window.location.replace(direccion)
}

  return (
    <div className='container'>
        {/* Graficas */}
        <br />
        <h3>Gráficas</h3>
        <hr />
    
        <div class="container text-center">
                <div class="row">
                    {graficas.map((item, id) => (
                        <div class="col-6" key={id}>
                            <div class="alert alert-danger" role="alert" style={{height: "205px"}}>
                                <p className='text-start'><b>{item.libreria}</b>: {item.descripcion}</p>
                                <p className='text-start'>Web/npm: <b onClick={(e) => abrirLink(item.web)}>{item.web}</b></p>
                                <p className='text-start'>gitHub: <b onClick={(e) => abrirLink(item.git)}>{item.git}</b></p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Graficas