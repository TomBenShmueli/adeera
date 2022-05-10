import React from 'react';
import Button from "../../ui/Button/Button";
import './FilterBar.css';

const FilterBar = () => {
    return (
        <div className='container'>
            <nav className='side-bar'>
                <h1>Filters</h1>
                <div className="center">
                    <Button className='btn-google' display='Google' />
                    <Button className='btn-facebook' display='Facebook' />
                </div>
            </nav>
        </div>
    );
}

export default FilterBar;