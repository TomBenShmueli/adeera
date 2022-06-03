import React, { useState } from 'react'
import './Filter.css';
import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';


const Filter = (props) => {
  console.log(props)
  const [value, setValue] = useState(props.initValues);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <Box sx={{ width: 225 }}>
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      min={props.minValue}
      max={props.maxValue}
      steps={props.steps}
      color="primary"
    />
    // </Box>
  )
}

export default Filter