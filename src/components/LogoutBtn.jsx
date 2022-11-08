import React, { useContext } from 'react'
import AppContext from '../context/appContext';



const LogoutBtn = () => {
    const context = useContext(AppContext);

    //stores user login status
    const { userAuth, setUserAuth } = context

    const logoutHandler = () => {
        if (userAuth) {
            setUserAuth(false)
        }
    }

    return (
        <button className='btn logout-btn' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn