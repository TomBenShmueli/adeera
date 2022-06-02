import React from 'react';
import { useEffect,useState } from 'react';
import Filter from '../../ui/Filter/Filter';
import './FilterBar.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Axios from 'axios';

// import Stack from '@mui/material/Stack';

const FilterBar = (city,setCity) => {
    const [cities,setCities] = useState();
    const initRoomValues = [3, 8];
    const minRooms = 1;
    const maxRooms = 10;
    const roomSteps = 1;
    const serverAPIPort = 8082;
    const host = 'http://localhost'
    const APIDomain = 'cities';
    const APIPath = `/api/${APIDomain}`;
    const APIRootPath = `${host}:${serverAPIPort}${APIPath}`;
    // useEffect( async () => {
    //     await Axios.get(APIRootPath)
    //         .then((res) => {
    //             //setCities(res.data);
    //             //setApartmentArray(res.data);
    //         });
    // }, []);

    const changeCity =()=>
    {

    }
    return (
        <div className='container'>
            <nav className='side-bar'>
                <h1>Filters</h1>
                {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    label="עיר"
                    onChange={changeCity}
                    >
                    {cities.map((city) => (
                        <MenuItem
                        key={city}
                        value={city}
                        >
                        {city}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl> */}
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