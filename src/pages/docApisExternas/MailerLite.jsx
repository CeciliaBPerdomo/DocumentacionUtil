import React from 'react'
import { Link } from 'react-router-dom'
import mailerFetch from "../../img/mailer_fetch.png"


function MailerLite() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://www.mailerlite.com/es",
            color: "light"
        },

        {
            descripcion: "Developers",
            web: "https://developers.mailerlite.com/docs/subscribers.html#list-all-subscribers",
            color: "light"
        },

        {
            descripcion: "Crear grupos y segmentos",
            web: "https://miracomohacerlo.com/crear-grupos-segmentos-mailerlite-organizar-contactos-nuevos/",
            color: "light"
        },
    ]

    return (
        <div className='container'>
            <br />
            <h3>MailerLite</h3>
            <hr />

            <br />
            <h3>Documentación oficial</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    {item.descripcion}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            <br />
            <h3>Pasos</h3>
            <hr />
            <ul>
                <ol>1. Crear cuenta (registrarse)</ol>
                <ol>2. Crear un grupo (Dashboard → Subscribers → Groups)</ol>
                <ol>3. El numero de grupo lo saque de la barra de direcciones (url)</ol>
                <ol>4. Crear un api token (Dashboard → Integrations → API Tokens)</ol>
                <ol>5. Fetch:</ol>
                <br/>
                <ol style={{marginLeft: "50px"}}>
                    <img src={mailerFetch} alt="Mailter Fetch"/>
                </ol>
            </ul>

            <ul>
                <ol>Mailerlite = api token</ol>
                <ol>MailGroup = numero del grupo</ol>
            </ul>
            <hr />
        </div>
    )
}

export default MailerLite