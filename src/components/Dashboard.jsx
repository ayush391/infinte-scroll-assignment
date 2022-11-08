import React, { useContext, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import AppContext from '../context/appContext';



// import './style/home.css'
import Card from './Card';
import CardSkeleton from './CardSkeleton';

const Dashboard = () => {

    const context = useContext(AppContext);

    //stores user login status
    const { people, getPeople } = context

    useEffect(() => { getPeople() })


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