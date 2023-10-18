import React from 'react'

function ValidacionFormularios() {
    let formularios = [
        {
          libreria: "Formik",
          web: "https://formik.org/",
          descripcion: "Build forms in React, without the tears. Formik is the world's most popular open source form library for React and React Native.",
          git: "https://github.com/formik/formik",
          color: "success"
        },
    
        {
          libreria: "React-Hook-Form",
          web: "https://react-hook-form.com/",
          infoAdiccional: "https://blog.logrocket.com/react-hook-form-complete-guide/",
          npm: "https://www.npmjs.com/package/react-hook-form",
          descripcion: "React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.",
          git: "https://github.com/react-hook-form/react-hook-form", 
          color: "success"
        },
    ]

 const abrirLink = (direccion) => {
    window.location.replace(direccion)
  }

  return (
    <div className='container'>
      
      <br />
      <h3>Validación de Formularios</h3>
      <hr />

      <div class="container text-center">
        <div class="row">
          {formularios.map((item, id) => (
            <div class="col-6" key={id}>
              <div class={"alert alert-"+ item.color} role="alert" style={{ height: "250px" }}>
                <p className='text-start'><b>{item.libreria}</b>: {item.descripcion}</p>
                <p className='text-start'>Web/npm: <b onClick={(e) => abrirLink(item.web)}>{item.web}</b></p>
                <p className='text-start'>gitHub: <b onClick={(e) => abrirLink(item.git)}>{item.git}</b></p>
                
                {item.infoAdiccional ?
                  <p className='text-start'>Más info: <b onClick={(e) => abrirLink(item.infoAdiccional)}>{item.infoAdiccional}</b></p>
                  : null
                }

              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValidacionFormularios