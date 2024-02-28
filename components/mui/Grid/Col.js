import React from 'react';
import RTLDirection from "../RTLDirection";
import Grid from "@mui/material/Grid";

const Col = (props) => {
    return (
        <RTLDirection>
            <Grid {...props} item/>
        </RTLDirection>
    );
};

// Col.propTypes = {
//     ...GridProps
// }


export default Col;