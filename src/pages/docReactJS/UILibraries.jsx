import React from 'react'

function UILibraries() {
  let libraries = [
    {
      libreria: "Chakra",
      web: "https://chakra-ui.com",
      descripcion: "Create accessible React apps with speed. Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
      git: "https://github.com/chakra-ui/chakra-ui/",
      infoAdiccional: "https://infinum.com/handbook/frontend/react/chakra-ui",
      color: "success"
    },

    {
      libreria: "Awesome React Components",
      web: "https://github.com/enaqx/awesome-react",
      descripcion: "This is a list of AWESOME components. Nope, it's NOT a comprehensive list of every React component under the sun.",
      git: "https://github.com/brillout/awesome-react-components", 
      color: "success"
    },

    {
      libreria: "React Joyride",
      web: "https://docs.react-joyride.com/",
      descripcion: "It uses react-floater for positioning and styling. And you can use your own components too.",
      git: "https://github.com/gilbarbara/react-joyride",
      color: "primary"
    },

    { 
      libreria: "MUI",
      web: "https://mui.com/core/", 
      descripcion: "Ready to use components free forever. Get a growing list of React components and utilities, ready-to-use, free forever, and with accessibility always in mind. We've built the foundational UI blocks for your design system so you don't have to.", 
      git: "https://github.com/mui/material-ui",
      color: "primary"
    }, 

    { 
      libreria: "RBD",
      web: "https://react-beautiful-dnd.netlify.app/?path=/story/single-vertical-list--basic", 
      descripcion: "Beautiful and accessible drag and drop for lists with React.", 
      git: "https://github.com/atlassian/react-beautiful-dnd",
      color: "danger"
    }, 

    { 
      libreria: "TanStack Query",
      web: "https://tanstack.com/query/latest", 
      descripcion: "Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte Toss out that granular state management, manual refetching and endless bowls of async-spaghetti code. TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.", 
      git: "https://github.com/tanstack/query",
      color: "danger"
    }, 

    // { 
    //   libreria: "",
    //   web: "", 
    //   descripcion: "", 
    //   git: ""
    // }, 

    // { 
    //   libreria: "",
    //   web: "", 
    //   descripcion: "", 
    //   git: ""
    // }, 
  ]

  const abrirLink = (direccion) => {
    window.location.replace(direccion)
  }

  return (
    <div className='container'>
      
      <br />
      <h3>Librerías UI</h3>
      <hr />

      <div class="container text-center">
        <div class="row">
          {libraries.map((item, id) => (
            <div class="col-lg-3 col-sm-1 col-md-1" key={id}>
              <div class="alert alert-light" role="alert">
                <p className='text-center'><b onClick={(e) => abrirLink(item.web)}>{item.libreria}</b>
                {/* : {item.descripcion} */}
                </p>
                {/* <p className='text-start'>Web/npm: <b onClick={(e) => abrirLink(item.web)}>{item.web}</b></p>
                <p className='text-start'>gitHub: <b onClick={(e) => abrirLink(item.git)}>{item.git}</b></p>
                
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

export default UILibraries