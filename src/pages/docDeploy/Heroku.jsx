import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../img/heroku.png"

function Heroku() {
    let info = [
        {
            descripcion: "Documentación oficial",
            web: "https://www.heroku.com/",
            color: "light"
        },

        {
            descripcion: "Tutorial: Despliegue",
            web: "https://misovirtual.virtual.uniandes.edu.co/codelabs/despliegue-heroku/index.html?index=../..index#3",
            color: "light"
        },

    ]

    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <h2>
                    <img src={logo} alt="Heroku"
                        style={{ width: "120px", marginRight: "15px" }}
                    />
                </h2>
            </div>

            <br />
            {/* Documentacion */}
            <h3>Documentación</h3>
            <hr />

            <div className="row">
                {info.map((item, id) => (
                    <div className="col-lg-3 col-sm-1 col-md-1" key={id}>
                        <div className={"alert alert-" + item.color} role="alert">
                            <Link to={item.web} style={{ textDecoration: "none", color: "black" }}>
                                <p className='text-center'>
                                    <b>{item.descripcion}</b>
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pasos */}
            <br />
            <h3>Pasos</h3>
            <hr />
            <div>
                <ol>
                    <li>Crear una cuenta en <b>www.heroku.com</b> → Recuerda que hace algún tiempo paso a ser una aplicación paga.</li>
                    <li>Instala heroku en la terminal de vs (o la herramienta que estes utilizando) → $ npm i heroku -g</li>
                    <li>Logueate desde la terminal (o cmd)</li>
                    <ul>
                        <li>$ heroku login -i</li>
                        <li>$ heroku login (te re-dirige a la pagina de heroku y no es necesario completar los datos si ya estas autenticado en la misma)</li>
                    </ul>
                    <li>Crear una nueva aplicacion → $ heroku create <i>your_application_name</i></li>
                    <li>Instala el buildpack-registry y el buildpack</li>
                    <ul>
                        <li>$ heroku plugins:install buildpack-registry</li>
                        <li>$ heroku plugins:install buildpacks</li>
                    </ul>
                    <li>Agrega Python y node.js para que puedas utilizar npm en producción</li>
                    <ul>
                        <li>$ heroku buildpacks: add --index 1 heroku/python</li>
                        <li>$ heroku buildpacks: add --index 2 heroku/nodejs</li>
                    </ul>
                    <li>Crear una base de datos</li>
                    <ul>
                        <li>https://data.heroku.com/</li>
                        <li>Selecciona: Heroku Postgres → También tiene costo (la mini es de u$s 5)</li>
                        <li>$ heroku addons:create heroku-postgresql:mini → (Según la bd que hayas elegido, el código para el cmd está en la página de heroku)</li>
                    </ul>
                    <li>Configuración de las variables de entorno</li>
                    <ul>
                        <li>$ heroku config:set FLASK_APP_KEY=”any key works”</li>
                        <li>$ heroku config:set FLASK_APP=src/app.py</li>
                        <li>$ heroku config:set FLASK_ENV=production</li>
                        <li>$ heroku config:set BASENAME=/</li>
                    </ul>
                    <li>Actualizar los cambios</li>
                    <ul>
                        <li>git add .</li>
                        <li>git commit -m “Heroku deploy”</li>
                        <li>git push heroku</li>
                    </ul>
                </ol>
            </div>

            {/* Errores */}
            <br />
            <h3>Posibles errores</h3>
            <hr />
            <div>
                <p>
                    Documentación oficial: <a href='https://devcenter.heroku.com/articles/python-support'> de Heroku de Pyhton. </a>
                </p>

                <h6 style={{ color: "red" }}>Requested runtime 'python-3.8.16' is not available for this stack (heroku-22)</h6>
                <ol>
                    <li>
                        En el archivo pipfile: python_version = "*”
                    </li>
                    <li>
                        En la terminal de vs:
                    </li>
                    <ul>
                        <li>$ python.exe -m pip install --upgrade pip</li>
                        <li>$ pipenv install</li>
                    </ul>
                </ol>

                <h6 style={{ color: "red" }}>Warning: Python 3.11.2 was not found on your system</h6>
                <ol>
                    <li>$ pip install pipenv --upgrade</li>
                    <li>$ pipenv lock</li>
                </ol>
            </div>

            <br />
            <hr />
        </div>
    )
}

export default Heroku