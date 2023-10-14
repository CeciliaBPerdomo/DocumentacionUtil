import reactBlanco from "../img/reactBlanco.png"
const DocReactJs = () => {
    return (
        <div className="container">
            <br />
            <div className="alert alert-light" role="alert">
                <img src={reactBlanco} alt="React" style={{ width: "140px" }} />
            </div>
            <br />

            <h3>Documentación oficial</h3>
            <hr />
            <div className="card text-bg-light mb-3" style={{ width: "540px" }}>
                <div className="card-header">React.dev</div>
                <div className="card-body">
                    <h5 className="card-title">https://es.react.dev/</h5>
                    <p className="card-text">React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. </p>
                    <p className="card-text">Crea tus propios componentes de React como Thumbnail, LikeButton, y Video. </p>
                    <p className="card-text">Luego combínalos para formar pantallas, páginas y aplicaciones.</p>
                    <hr />
                    <button className="btn btn-outline-dark float-end">
                        Ir a la web
                    </button>
                </div>
            </div>

            <br />
            <h3>Librerias</h3>
            <hr />

            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div className="alert alert-light" role="alert">
                            Fechas y calendarios
                        </div>
                    </div>
                    <div class="col">
                    <div className="alert alert-light" role="alert">
                            Graficas
                        </div>
                    </div>
                    <div class="col">
                    <div className="alert alert-light" role="alert">
                            Librerias UI
                        </div>
                    </div>
                    <div class="col">
                    <div className="alert alert-light" role="alert">
                            Alertas
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div className="alert alert-light" role="alert">
                            Validacion de formularios
                        </div>
                    </div>
                    <div class="col">
                    <div className="alert alert-light" role="alert">
                           Animaciones
                        </div>
                    </div>
                    <div class="col">
                    <div className="alert alert-light" role="alert">
                            PDF
                        </div>
                    </div>
                    <div class="col">
                    {/* <div className="alert alert-light" role="alert">
                            Alertas
                        </div> */}
                    </div>
                </div>
            </div>
            <br/>
        </div>


    );
};

export default DocReactJs;