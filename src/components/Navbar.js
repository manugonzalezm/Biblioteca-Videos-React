import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-evenly flex-grow-1'>
                    <div className='d-flex flex-grow-1 justify-content-center'>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly flex-grow-1 align-items-center">
                        <li className="nav-item">
                            <i class="bi bi-camera-video-fill"></i>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-three-dots-vertical"></i>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-chat-fill"></i>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-bell-fill"></i>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-person-circle"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar