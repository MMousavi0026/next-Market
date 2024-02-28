import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./menuButtonAcces.module.css";
import Popover from "@mui/material/Popover";

const MenuButtonAcces = (
    {
        title,
        open,
        onOpen,
        onClose,
        MenuProps,
        children,
        ...props
    }
) => {
    const internalTarget = React.useRef(null);

    const handleButtonKeyDown = (event) => {
        if(!internalTarget.current){
            internalTarget.current = event.currentTarget;
            if(onOpen) onOpen();
        }
    };

    const handleButtonKeyUp = () => {
        if(internalTarget.current){
            internalTarget.current = null;
            if(onClose) onClose();
        }
    };

    return (
        <Button
            onMouseEnter={handleButtonKeyDown}
            onMouseLeave={handleButtonKeyUp}
            {...props}
            style={{cursor:'pointer', color:'white', marginLeft:'25px', zIndex: 1500, marginBottom:'25px'}}
        >
            <span style={{fontSize: "1.5vw"}}>{title}</span>
            <ArrowDropDownIcon style={{fontSize: 35}}/>
            <Popover
                open={open}
                anchorEl={internalTarget.current}
                onMouseLeave={handleButtonKeyUp}
                {...MenuProps}
                className={styles.offItemsWrapper}
                hideBackdrop
                slotProps={{
                    paper: {
                        className: styles.offItemsWrapper1
                    }
                }}
            >

                {children}
            </Popover>
        </Button>
    );
}

export default MenuButtonAcces;