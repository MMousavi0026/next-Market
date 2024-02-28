import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";

const valuetext = (value) => {
    return `${value}C`;
}

const RangeSlider = () => {
    const [value, setValue] = React.useState([10000, 900000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: {xs: 200, sm: 300} }}>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                step={10000}
                max={1000000}
            />
            <Typography>{value[0]} تا {value[1]}</Typography>
        </Box>
    );
}

export default RangeSlider;