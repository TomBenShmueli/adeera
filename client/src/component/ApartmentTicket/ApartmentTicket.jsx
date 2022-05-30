import React from 'react';
import Dialog from '../../ui/Dialog/Dialog';
import Slideshow from '../../ui/Slideshow/Slideshow';
import Button from '@mui/material/Button';
import './ApartmentTicket.css';


const ApartmentTicket = (props) => {

    const closeAptInfo = () => {
        props.onClose(props.key);
    }

    return (
        <Dialog className="modal">
            <div dir='rtl' className="grid-container">
                <div className="grid-item1">
                    <h2>{props.title}</h2>
                    <div className="content">
                        <p>{props.content}</p>
                    </div>
                </div>
                <div className="grid-item2">
                    <img src={props.image} className="images" />
                    <div className="flex-container">
                        <Button variant="contained">massnger</Button>
                        <Button variant="contained" color="success">WhatsApp</Button>
                        <Button variant="contained" color="secondary" >Phone Call</Button>
                    </div>
                </div>
                {/* <Slideshow /> */}
                <footer className="actions grid-item2">
                    <Button onClick={closeAptInfo}>סגור</Button>
                </footer>
            </div>
        </Dialog>
    );
}

export default ApartmentTicket;