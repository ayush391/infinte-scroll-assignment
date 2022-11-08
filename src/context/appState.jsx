import React, { useState } from 'react'
import AppContext from './appContext'

import Axios from 'axios';

const AppState = (props) => {

    const [userAuth, setUserAuth] = useState(false);
    const [people, setPeople] = useState([]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const baseUrl = 'https://randomuser.me/api/?inc=id,name,picture&results='
    const getPeople = async (numOfResults = 12) => {
        if (userAuth) {
            await sleep(1000);
            const response = await Axios(baseUrl + numOfResults.toString())
            const updatedPeople = people.concat(response.data.results);
            setPeople(updatedPeople);
        }
    }




    return (
        <AppContext.Provider value={{ userAuth, setUserAuth, people, getPeople }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState