import React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./MenuButtonOff.module.css";

const MenuButtonOff = (
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
            <ShoppingBasketIcon style={{fontSize: 21, marginLeft: "6px"}}/>
            <span style={{fontSize: "1.5vw"}}>{title}</span>
            <ArrowDropDownIcon style={{fontSize: 35}}/>
            <Popover
                open={open}
                anchorEl={internalTarget.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onMouseLeave={handleButtonKeyUp}
                className={styles.offItemsWrapper}
                hideBackdrop
                {...MenuProps}
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

export default MenuButtonOff;