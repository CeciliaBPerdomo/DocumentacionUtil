import React from 'react'
import { Link } from 'react-router-dom'


function ComidaApis() {
    let info = [
        {
            descripcion: "Spoonacular",
            web: "https://spoonacular.com/food-api",
            color: "light"
        },

        {
            descripcion: "Open Food Facts",
            web: "https://world.openfoodfacts.org/data",
            color: "light"
        },

        {
            descripcion: "The Meal db",
            web: "https://themealdb.com/api.php",
            color: "light"
        },

     
    ]

    let bebidas = [
        {
            descripcion: "Cocktail",
            web: "https://thecocktaildb.com/api.php",
            color: "success"
        },
    ]

    return (
        <div className='container'>
            <br />
            <h3>Api's externas: 🍎Comidas</h3>
            <hr />
            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>
                                    {item.descripcion}
                                    </b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            {/* Bebidas */}
            <br />
            <h3>Api's externas: 🍾Bebidas</h3>
            <hr />
            <div className="row">
                {bebidas.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>
                                    {item.descripcion}
                                    </b>
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

export default ComidaApis