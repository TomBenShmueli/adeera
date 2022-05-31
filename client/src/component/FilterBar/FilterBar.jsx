import React from 'react';
import Filter from '../../ui/Filter/Filter';
import './FilterBar.css';
// import Stack from '@mui/material/Stack';

const FilterBar = () => {
    const initRoomValues = [3, 8];
    const minRooms = 1;
    const maxRooms = 10;
    const roomSteps = 1;
    return (
        <div className='container'>
            <nav className='side-bar'>
                <h1>Filters</h1>

                <div className="filter">
                    <h4 dir='rtl'>מספר חדרים</h4>
                    <Filter
                        initValues={initRoomValues}
                        minValue={minRooms}
                        maxValue={maxRooms}
                        steps={roomSteps}
                    />
                </div>

                <div className="filter">
                    <h4 dir='rtl'>מחיר</h4>
                    <Filter
                        initValues={initRoomValues}
                        minValue={minRooms}
                        maxValue={maxRooms}
                        steps={roomSteps}
                    />
                </div>
            </nav>
        </div>
    );
}

export default FilterBar;