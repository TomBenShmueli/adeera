import React from 'react';
import './Stage.css';
import Apartment from "../Apartment/Apartment";
import data from "../../data"

const dummyData = data;

const Stage = () => {
    return (
        <div className='stage'>
            <div className="cards">
                {dummyData.map((apt, index) => {
                    return (
                        <Apartment key={index} image={apt.images[1]} username={apt.username} text={apt.post_text} />
                    )
                })}
            </div>
        </div>
    );
}

export default Stage;