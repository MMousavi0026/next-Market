import React from 'react';
import Grid, {GridProps} from "@mui/material/Grid";
import RTLDirection from "../RTLDirection";

const Row = (props) => {
    return (
        <RTLDirection>
            <Grid {...props} container />
        </RTLDirection>
    );
};

// Row.propTypes = {
//     ...GridProps
// }

export default Row;