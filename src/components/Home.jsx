import React, { useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import AppContext from '../context/appContext';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


// import './style/home.css'
import Card from './Card';
import CardSkeleton from './CardSkeleton';
import LoginBtn from './LoginBtn';
import Dashboard from './Dashboard';

const Home = () => {

    const context = useContext(AppContext);

    //stores user login status
    const { userAuth, setUserAuth, people, getPeople } = context

    useEffect(() => { getPeople() }, [])


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