//import Nav from "./Nav";
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";

export default function MainNavigation() {



    return (
        <div>
            <Nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-5" to={"/"}>createJD</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item ">
                                <Link className="nav-link" to={"/skills"}>Skills</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link" to={"/projects"}>Projects</Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link" to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </div>
    )
}