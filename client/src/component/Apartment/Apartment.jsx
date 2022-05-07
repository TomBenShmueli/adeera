import React from 'react';
import Card from '../../ui/Card/Card';
import './Apartment.css';

const Apartment = () => {
    return (
        <Card className='apt-ticket' >
            <img src="../../../public/DummyPic.jpg" />
            <h3>Apt Apt</h3>
            <p>lorem imposom</p>
        </Card>
    );
}

export default Apartment;