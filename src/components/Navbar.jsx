import React from 'react'
import { Link } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCab } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-bg g-2">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/"> Infinity</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white me-5 active" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link text-white me-5" to="/login">Login</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar