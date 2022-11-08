import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import AppContext from '../context/appContext'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCab } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const context = useContext(AppContext);

    const { userAuth } = context

    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-bg g-2">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/home"> Infinity</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white me-5 active" aria-current="page" to="/home">Dashboard</Link>
                            {userAuth ? <LogoutBtn ></LogoutBtn> : <LoginBtn></LoginBtn>}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar