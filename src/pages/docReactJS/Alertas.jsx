import React from 'react'

export default function Alertas() {
    let alertas = [
        {
          libreria: "React-Toastify",
          web: "https://www.npmjs.com/package/react-toastify",
          descripcion: "React-Toastify allows you to add notifications to your app with ease. No more nonsense!",
          git: "https://github.com/fkhadra/react-toastify",
          color: "success"
        },
    
        {
          libreria: "Sweet Alerts2",
          web: "https://github.com/enaqx/awesome-react",
          descripcion: "A beatiful, responsive, customizable, accessible (wai-aria) replacement for JavaScripts popup boxes zero dependencias.",
          git: "https://github.com/enaqx/awesome-react", 
          color: "success"
        },
    ]

 const abrirLink = (direccion) => {
    window.location.replace(direccion)
  }

  return (
    <div className='container'>
      
      <br />
      <h3>Alertas</h3>
      <hr />

      <div class="container text-center">
        <div class="row">
          {alertas.map((item, id) => (
            <div class="col-lg-6 col-sm-1 col-md-1" key={id}>
              <div class={"alert alert-"+ item.color} role="alert" style={{ minHeight: "150px" }}>
                <p className='text-start'><b>{item.libreria}</b>
                {/* : {item.descripcion} */}
                </p>
                <p className='text-start'>Web/npm: <b onClick={(e) => abrirLink(item.web)}>{item.web}</b></p>
                <p className='text-start'>gitHub: <b onClick={(e) => abrirLink(item.git)}>{item.git}</b></p>
                
                {item.infoAdiccional ?
                  <p className='text-start'>Más info: <b onClick={(e) => abrirLink(item.infoAdiccional)}>{item.infoAdiccional}</b></p>
                  : null
                }

              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
