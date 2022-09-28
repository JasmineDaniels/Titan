

export default function Nav ({ currentPage, handlePageChange }){
    
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">createJD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className={currentPage === 'About' ? "nav-link active" : "nav-link"} 
                            aria-current="page" 
                            href="#About"
                            onClick={() => handlePageChange('About')}>About</a>
                        </li>

                        <li className="nav-item mx-3">
                            <a className={currentPage === 'Skills' ? "nav-link active" : "nav-link"} 
                            href="#Skills"
                            onClick={() => handlePageChange('Skills')}>Skills</a>
                        </li>

                        <li className="nav-item mx-3">
                            <a className={currentPage === 'Projects' ? "nav-link active" : "nav-link"} 
                            href="#Projects"  
                            onClick={() => handlePageChange('Projects')}>Projects</a>
                        </li>

                        <li className="nav-item ">
                            <a href="#Contact" 
                            className={currentPage === 'Contact' ? "nav-link active" : "nav-link"}
                            onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
    
