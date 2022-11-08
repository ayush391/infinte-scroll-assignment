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

const Dashboard = () => {

    const context = useContext(AppContext);

    //stores user login status
    const { userAuth, people, getPeople } = context

    useEffect(() => { getPeople() }, [])


    //check whether user is logged in or not
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
                            <Card key={index} id={index} img={person.picture.large} title={person.name.title} first={person.name.first} last={person.name.last}></Card>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )

}

export default Dashboard