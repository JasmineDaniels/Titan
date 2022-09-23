

export default function Nav ({ currentPage, handlePageChange }){
    // const styles = {width: "280px", height: "720px"}
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
                            <a className={currentPage === 'About' ? "nav-link active" : "nav-link"} aria-current="page" href="#About"
                            onClick={() => handlePageChange('About')}>About</a>
                        </li>

                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">Skills</a>
                        </li>

                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Project 1</a></li>
                                <li><a className="dropdown-item" href="/">Project 2</a></li>
                                <li><a className="dropdown-item" href="/">Project 3</a></li>
                                <li><a className="dropdown-item" href="/">Project 4</a></li>
                                <li><a className="dropdown-item" href="/">Project 5</a></li>
                                <li><a className="dropdown-item" href="/">Project 6</a></li>
                            </ul>
                        </li>

                        <li className="nav-item ">
                            <a href="/" className="nav-link disabled">Contact</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}
    // eslint-disable-next-line
    {/* <aside className="flex-shrink-0 p-3 bg-white" style={styles}>
            <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg className="bi me-2" width="30" height="24"></svg>
            <span className="fs-5 fw-semibold">Collapsible</span>
            </a>
            <ul className="list-unstyled ps-0">
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                Home
                </button>
                <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="/" className="link-dark rounded">Overview</a></li>
                    <li><a href="/" className="link-dark rounded">Updates</a></li>
                    <li><a href="/" className="link-dark rounded">Reports</a></li>
                </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Dashboard
                </button>
                <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="/" className="link-dark rounded">Overview</a></li>
                    <li><a href="/" className="link-dark rounded">Weekly</a></li>
                    <li><a href="/" className="link-dark rounded">Monthly</a></li>
                    <li><a href="/" className="link-dark rounded">Annually</a></li>
                </ul>
                </div>
            </li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Orders
                </button>
                <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="/" className="link-dark rounded">New</a></li>
                    <li><a href="/" className="link-dark rounded">Processed</a></li>
                    <li><a href="/" className="link-dark rounded">Shipped</a></li>
                    <li><a href="/" className="link-dark rounded">Returned</a></li>
                </ul>
                </div>
            </li>
            <li className="border-top my-3"></li>
            <li className="mb-1">
                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                Account
                </button>
                <div className="collapse" id="account-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="/" className="link-dark rounded">New...</a></li>
                    <li><a href="/" className="link-dark rounded">Profile</a></li>
                    <li><a href="/" className="link-dark rounded">Settings</a></li>
                    <li><a href="/" className="link-dark rounded">Sign out</a></li>
                </ul>
                </div>
            </li>
            </ul>
        </aside> */}
    
