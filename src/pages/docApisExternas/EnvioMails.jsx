import React from 'react'
import { Link } from 'react-router-dom'

function EnvioMails() {
    let info = [
        {
            descripcion: "Las 8 mejores apis",
            web: "https://geekflare.com/es/transactional-email-api/",
            color: "light"
        },

        {
            descripcion: "Servicios de envio masivo",
            web: "https://www.mailgun.com/es/soluciones/casos-de-uso/email-marketing/servicios-envio-masivo-email-marketing/servicios-gratuitos-envio-masivo-email-marketing/",
            color: "light"
        },

        {
            descripcion: "MailerLite",
            web: "/mailerLite",
            color: "light"
        },

        {
            descripcion: "Flask Mail",
            web: "https://pythonhosted.org/Flask-Mail/",
            color: "light"
        },

        {
            descripcion: "MailTrap",
            web: "https://mailtrap.io/",
            color: "light"
        },

        {
            descripcion: "SendGrid",
            web: "https://sendgrid.com/",
            color: "light"
        },

    ]

    return (
        <div className='container'>
            <br />
            <h3>Api's externas: Envio de mails</h3>
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
            <hr />
        </div>
    )
}

export default EnvioMails