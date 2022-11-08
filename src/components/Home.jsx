import React, { useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import AppContext from '../context/appContext';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


// import './style/home.css'
import Card from './Card';
import CardSkeleton from './CardSkeleton';

const Home = () => {

    const context = useContext(AppContext);

    //stores user login status
    const { userAuth, setUserAuth, people, getPeople } = context

    useEffect(() => { getPeople() }, [])


    //check whether user is logged in or not
    if (userAuth) {
        return (
            <div className='container'>
                <InfiniteScroll
                    dataLength={people.length}
                    next={getPeople}
                    hasMore={true}
                    loader={<CardSkeleton />}

                >
                    <div className='row justify-content-center'>

                        {people.map((person, index) => {
                            return (
                                <Card id={index} img={person.picture.large} title={person.name.title} first={person.name.first} last={person.name.last}></Card>
                            )
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }

    else {
        return (
            <div className='container'>
                <h2>Please Login First</h2><Link to='/login' className='btn btn-danger'>Go to Login</Link>
            </div>
        )
    }

}

export default Home