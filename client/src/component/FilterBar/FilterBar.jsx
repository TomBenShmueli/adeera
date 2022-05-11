import React from 'react';
import Button from "../../ui/Button/Button";
import Filter from '../../ui/Filter/Filter';
import './FilterBar.css';

const FilterBar = () => {
    const initRoomValues = [30,50]
    const minRooms=1
    const maxRooms=90
    const roomSteps=4
    return (
        <div className='container'>
            <nav className='side-bar'>
                <h1>Filters</h1>
                <div className="center">
                    <Filter
                    className='filter-rooms'
                    initValues={initRoomValues}
                    minValue = {minRooms}
                    maxValue={maxRooms}
                    steps={roomSteps}
                    />
                    <Button className='btn-google' display='Google' />
                    <Button className='btn-facebook' display='Facebook' />
                </div>
            </nav>
        </div>
    );
}

export default FilterBar;