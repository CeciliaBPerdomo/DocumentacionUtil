import React from 'react'

// Listado de libreriras de fechas
let librerias = [
    { libreria: "Day.js", web: "https://day.js.org", descripcion: "Librería inmutable (2KB) para manejar fechas.", git: "https://github.com/iamkun/dayjs" },
    { libreria: "date-fns", web: "https://date-fns.org", descripcion: "Moderna librería de fechas", git: "https://github.com/date-fns/date-fns" },
    { libreria: "Luxon", web: "https://www.npmjs.com/package/luxon", descripcion: "Librería moderna y potente para fechas.", git: "https://github.com/moment/luxon" },
    { libreria: "js-joda", web: "https://www.npmjs.com/package/js-joda", descripcion: "Librería inmutable de fechas para JS.", git: "https://js-joda.github.io/js-joda" },
    { libreria: "Date-js", web: "http://www.datejs.com", descripcion: "Librería alternativa para trabajar con fechas", git: "https://github.com/datejs/Datejs" },
    { libreria: "fecha", web: "https://www.npmjs.com/package/fecha", descripcion: "Librería ligera para formatear y parsear fechas.", git: "https://github.com/taylorhakes/fecha" },
    { libreria: "moment.js", web: "https://momentjs.com", descripcion: "Parse, validate, manipulate,and display dates and times in JavaScript", git: "https://github.com/moment/moment" },
    // { libreria: "", web: "", descripcion: "", git: ""}, 
]

// Listado de librerias de calendarios
let calendarios = [
    { libreria: "react-big-calendar", web: "https://www.npmjs.com/package//react-big-calendar", descripcion: "An events calendar component built for React and made for modern browsers (read: not IE) and uses flexbox over the classic tables-caption approach.", git: "https://github.com/jquense/react-big-calendar" },
    { libreria: "JavaScript Calendar", web: "https://fullcalendar.io/", descripcion: "FullCalendar provides a highly performant React component that accepts JSX for rendering nested content", git: "https://github.com/fullcalendar/fullcalendar" },
    //{ libreria: "", web: "", descripcion: "", git: ""}, 
]

function FechasyCalendarios() {
    const abrirLink = (direccion) => {
        window.location.replace(direccion)
    }

    return (
        <div className='container'>
            {/* Fechas */}
            <br />
            <h3>Fechas</h3>
            <hr />

            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Librería</th>
                        <th scope="col">Web / npm</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">GitHub</th>
                    </tr>
                </thead>
                <tbody>
                    {librerias.map((item, id) => (
                        <tr key={id}>
                            <th scope="row" >{item.libreria}</th>
                            <td onClick={() => abrirLink(item.web)}>{item.web}</td>
                            <td>{item.descripcion}</td>
                            <td onClick={() => abrirLink(item.git)}>{item.git}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Calendarios */}
            <br />
            <h3>Calendarios</h3>
            <hr />

            <div class="text-center">
                <div class="row">
                    {calendarios.map((item, id) => (
                        <div class="col-lg-3 col-sm-1 col-md-1" key={id}>
                            <div class="alert alert-light" role="alert">
                                <p className='text-center'><b onClick={(e) => abrirLink(item.web)}>{item.libreria}</b>
                                {/* : {item.descripcion} */}
                                </p>
                                {/* <p className='text-start'>Web/npm: <b >{item.web}</b></p>
                                <p className='text-start'>gitHub: <b onClick={(e) => abrirLink(item.git)}>{item.git}</b></p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FechasyCalendarios