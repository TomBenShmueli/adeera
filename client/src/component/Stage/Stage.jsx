import React, { useState } from 'react';
import './Stage.css';
import Apartment from "../Apartment/Apartment";
import data from "../../data.json"
import ApartmentTicket from '../ApartmentTicket/ApartmentTicket';

import Axios from 'axios';

const serverAPIPort = 8082;
const host = 'http://localhost'
const APIDomain = 'apartments';
const APIPath = `/api/${APIDomain}`;
const APIRootPath = `${host}:${serverAPIPort}${APIPath}`;
const staticsPort = 3000;
const staticsUrl = `${host}:${staticsPort}/`;

Axios.get(APIRootPath)
    .then(res => console.log(res))

const dummyData = data;

const Stage = () => {

    const [toggleApt, setToggleApt] = useState(false);
    const [userName, setUserName] = useState('')
    const [post, setPost] = useState('')


    const openApartmentInfo = (id, userName, post) => {
        setToggleApt(true);
        setUserName(userName);
        setPost(post);
    }

    const closeApartmentInfo = (id) => {
        setToggleApt(false);
    }

    return (
        <>
            {toggleApt ? <ApartmentTicket title={userName} content={post} image='https://www.housedecorin.com/wp-content/uploads/2021/08/1568648112267.jpeg' onClose={closeApartmentInfo} /> : null}
            <div className='stage'>
                <div className="cards">
                    {dummyData.map((apt, index) => {
                        return (
                            <>
                                <Apartment key={index} image={apt.images[0]} username={apt.username} text={apt.post_text} onOpen={openApartmentInfo} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Stage;