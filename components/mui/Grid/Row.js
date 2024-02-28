import React from 'react';
import Grid from "@mui/material/Grid";
import RTLDirection from "../RTLDirection";

const Row = (props) => {
    return (
        <RTLDirection>
            <Grid {...props} container />
        </RTLDirection>
    );
};

export default Row;