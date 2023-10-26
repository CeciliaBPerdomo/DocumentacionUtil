import React from 'react'

function ReactRouterDocOficial() {
    let info = [
        {
            nombre: "React Router",
            descripcion: "React Router enables client side routing. Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information. This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.",
            web: "https://reactrouter.com/en/main"
        },

        {
            nombre: "React Router - w3Schools",
            descripcion: "Create React App doesn't include page routing. React Router is the most popular solution.",
            web: "https://www.w3schools.com/react/react_router.asp"
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
            <h3>Documentación oficial: React Router</h3>
            <hr />

            <div class="text-center">
                <div class="row">
                    {info.map((item, id) => (
                        <div class="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div class="alert alert-success" role="alert">
                                <p className='text-center'><b onClick={(e) => abrirLink(item.web)}>{item.nombre}</b>
                                {/* : {item.descripcion} */}
                                </p>
                                {/* <p className='text-start'>Web/npm: <b }>{item.web}</b></p> */}
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

            <br />
        </div>
    )
}

export default ReactRouterDocOficial