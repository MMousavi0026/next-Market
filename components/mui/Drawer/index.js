import React from 'react';
import DrawerModule from "@mui/material/Drawer";
import RTLDirection from "../RTLDirection";

const Drawer = (props) => {
    return (
        <RTLDirection>
            <DrawerModule {...props}/>
        </RTLDirection>
    );
};

export default Drawer;