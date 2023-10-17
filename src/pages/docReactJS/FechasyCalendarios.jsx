import React from 'react'


function FechasyCalendarios() {
    return (
        <div className='container'>
            <br />
            <h3>Fechas</h3>
            <hr />

            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Librería</th>
                        <th scope="col">Web</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">GitHub</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Day.js</th>
                        <td>https://day.js.org/</td>
                        <td>Librería inmutable (2KB) para manejar fechas.</td>
                        <td>https://github.com/iamkun/dayjs</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

            <br />
            <h3>Calendarios</h3>
            <hr />

        </div>
    )
}

export default FechasyCalendarios