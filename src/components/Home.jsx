import React, { useContext, useEffect } from 'react'
import AppContext from '../context/appContext';

import LoginBtn from './LoginBtn';
import Dashboard from './Dashboard';

const Home = () => {

    const context = useContext(AppContext);

    //stores user login status
    const { userAuth } = context


    //check whether user is logged in or not
    if (!userAuth) {
        return (
            <div className='container'>
                <div className='login-form'>
                    <h5 className='login-form-heading'>Please login to view this page</h5><LoginBtn></LoginBtn>
                </div>
            </div>
        )
    }

    else {
        return (
            <Dashboard></Dashboard>
        )
    }

}

export default Home