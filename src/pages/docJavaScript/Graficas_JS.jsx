import React from 'react'
import { Link } from 'react-router-dom'

function GraficasJS() {
    let info = [
        {
            descripcion: "Ant Design Charts",
            web: "https://ant-design-charts.antgroup.com/en/",
            color: "light"
        },

        {
            descripcion: "ApexCharts",
            web: "https://apexcharts.com/",
            color: "light"
        },

        {
            descripcion: "Google Charts",
            web: "https://developers.google.com/chart?hl=es-419",
            color: "light"
        },

        {
            descripcion: "D3",
            web: "https://d3js.org/",
            color: "light"
        },

        {
            descripcion: "Frappe",
            web: "https://frappe.io/charts",
            color: "light"
        },
    ]
    return (
        <div className="container">
            
            <br />
            <h3>Gráficas</h3>
            <hr />
            
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className=' text-center'>{item.descripcion} </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <hr />
        </div>
    )
}

export default GraficasJS