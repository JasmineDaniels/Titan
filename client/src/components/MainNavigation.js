//import Nav from "./Nav";
import '../css/nav.css'
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";

export default function MainNavigation() {



    return (
        <div>
            <Nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to={"/"}><span className='create'>CREATE</span><span className='name'> Jasmine Daniels</span></Link>

                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item ">
                                <Link className="nav-link main-link" to={"/skills"}>SKILLS</Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link main-link" to={"/projects"}>PROJECTS</Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="nav-link main-link" to={"/contact"}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </div>
    )
}