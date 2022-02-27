import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {

    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">YourVideos</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/">Explorar</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/">Suscripciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/">Historial</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/">Favoritos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex flex-row justify-content-evenly flex-grow-1'>
                    <div className='d-flex flex-grow-1 justify-content-center'>
                        <Search className="d-flex"/>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly flex-grow-1 align-items-center">
                        <li className="nav-item">
                            <Link to="/"><i className="bi bi-house-door-fill"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><i className="bi bi-three-dots-vertical"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><i className="bi bi-chat-fill"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><i className="bi bi-bell-fill"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><i className="bi bi-person-circle"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar