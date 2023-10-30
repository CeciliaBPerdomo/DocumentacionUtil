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

    {
      libreria: "un/hidden Password",
      web: "https://melvingeorge.me/blog/show-or-hide-password-ability-reactjs",
      descripcion: "How to make a show or hide password toggle button in Reactjs?",
      git: "https://github.com/",
      color: "danger"
    },

    {
      libreria: "Encriptar password",
      web: "https://www.npmjs.com/package/bcrypt",
      descripcion: "How to make a show or hide password toggle button in Reactjs?",
      git: "https://www.npmjs.com/package/bcrypt",
      color: "danger"
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
            <div class="col-lg-3 col-sm-1 col-md-1" key={id}>
              <div class="alert alert-light" role="alert">
                <p className='text-center'>
                  <b onClick={(e) => abrirLink(item.web)}>{item.libreria}</b>
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValidacionFormularios