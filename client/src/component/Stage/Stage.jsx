import React, { useState, useEffect } from 'react';
import './Stage.css';
import Apartment from "../Apartment/Apartment";
// import data from "../../data.json"
// import theDummyData from "../../dummyData.json"

import ApartmentTicket from '../ApartmentTicket/ApartmentTicket';
// import { creatApartments } from '../../api';

import Axios from 'axios';

// var dummyData = theDummyData;
// const apartments = creatApartments();

const serverAPIPort = 8082;
const host = 'http://localhost'
const APIDomain = 'apartments';
const APIPath = `/api/${APIDomain}`;
const APIRootPath = `${host}:${serverAPIPort}${APIPath}`;
// const staticsPort = 3000;
// const staticsUrl = `${host}:${staticsPort}/`;


const Stage = () => {

    const [toggleApt, setToggleApt] = useState(false);
    const [userName, setUserName] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState('');
    const [postUrl, setPostUrl] = useState('')
    const [apartmentsArray, setApartmentArray] = useState(false);

    useEffect(() => {
        Axios.get(APIRootPath)
            .then((res) => {
                setApartmentArray(res.data);
            });
    }, []);


    const openApartmentInfo = (id, userName, post, image, postUrl) => {
        setUserName(userName);
        setPost(post);
        setImage(image);
        setPostUrl(postUrl);
        setToggleApt(true);
    }

    const closeApartmentInfo = (id) => {
        setToggleApt(false);
    }
    // https://www.housedecorin.com/wp-content/uploads/2021/08/1568648112267.jpeg

    // const renderApartment = () => {
    //     apartmentsArray.map((apt, index) => {
    //         return (
    //             <Apartment key={index} image={apt.images[0]} username={apt.user_name} text={apt.text} onOpen={openApartmentInfo} />
    //         )
    //     })
    // }

    return (
        <>
            {toggleApt ? <ApartmentTicket title={userName} content={post} image={image} postUrl={postUrl} onClose={closeApartmentInfo} /> : null}
            <div className='stage'>
                <div className="cards">
                    {apartmentsArray ? apartmentsArray.map((apt, index) => {
                        return (
                            <Apartment key={index} image={apt.images[0]} username={apt.user_name} text={apt.text} postUrl={apt.post_url} onOpen={openApartmentInfo} />
                        )
                    }) : <h2>Loading...</h2>}
                </div>
            </div>
        </>
    );
}

export default Stage;