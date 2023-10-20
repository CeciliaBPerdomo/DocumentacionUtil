import { Outlet, Link } from "react-router-dom";
import avatar from "../img/ceci.png"

const Layout = () => {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid" style={{color: "white"}}>
                    <h3>
                        <Link to="/" style={{textDecoration: "none", color: "purple"}}>         
                            <img src={avatar} alt="" style={{width: "50px"}}/> Documentación útil
                        </Link>
                    </h3>
                </div>
            </nav>
            
            <Outlet />
        </>
    )
};

export default Layout;