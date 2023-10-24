import React from 'react'

function PDF() {
    let libreriasPDF = [
        {
          libreria: "React-PDF",
          web: "https://react-pdf.org/",
          descripcion: "React renderer for creating PDF files on the browser and server",
          git: "https://github.com/diegomura/react-pdf",
          color: "success"
        },
    
        {
          libreria: "JSPDF Auto-Table",
          web: "https://www.npmjs.com/package/jspdf-autotable",
          descripcion: "This jsPDF plugin adds the ability to generate PDF tables either by parsing HTML tables or by using Javascript data directly.",
          git: "https://github.com/simonbengtsson/jsPDF-AutoTable", 
          color: "success"
        },
    ]

    const abrirLink = (direccion) => {
        window.location.replace(direccion)
    }

    return (
        <div className='container'>

            <br />
            <h3>PDF</h3>
            <hr />

            <div class="container text-center">
                <div class="row">
                    {libreriasPDF.map((item, id) => (
                        <div class="col-lg-6 col-sm-1 col-md-1" key={id}>
                            <div class={"alert alert-" + item.color} role="alert" style={{minHeight: "180px" }}>
                                <p className='text-start'><b>{item.libreria}</b>: {item.descripcion}</p>
                                <p className='text-start'>Web/npm: <b onClick={(e) => abrirLink(item.web)}>{item.web}</b></p>
                                <p className='text-start'>gitHub: <b onClick={(e) => abrirLink(item.git)}>{item.git}</b></p>
{/* 
                                {item.infoAdiccional ?
                                    <p className='text-start'>Más info: <b onClick={(e) => abrirLink(item.infoAdiccional)}>{item.infoAdiccional}</b></p>
                                    : null
                                } */}

                            </div>
                          
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default PDF