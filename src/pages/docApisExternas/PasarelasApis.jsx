import React from 'react'
import { Link } from 'react-router-dom'

function PasarelasApis() {
    let info = [
        {
            descripcion: "Mercado Pago",
            web: "https://www.mercadopago.com.uy/developers/es/docs",
            color: "light"
        },

        {
            descripcion: "Paypal",
            web: "https://developer.paypal.com/docs/api/payments/v2/",
            color: "light"
        },

        {
            descripcion: "Stripe",
            web: "https://stripe.com/docs/api",
            color: "light"
        },
        
        {
            descripcion: "Foreign exchange rates",
            web: "https://fixer.io/",
            color: "light"
        },

        {
            descripcion: "Coinbase cloud",
            web: "https://docs.cloud.coinbase.com/exchange/docs/welcome",
            color: "light"
        },

    ]
    
    return (
        <div className='container'>
            <br />
            <h3>Api's externas: Pasarelas de pagos</h3>
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

export default PasarelasApis