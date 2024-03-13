import React, {useState} from 'react';
import Link from "next/link";
import Menu from "@mui/material/Menu";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./NMenu.module.css";
import Popover from "@mui/material/Popover";

const NMenuButton = ({children, title, href, elementVertical, elementHorizontal, childrenVertical, childrenHorizontal}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleHoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleHoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        children ? (
            <>
                <ListItem
                    id="basic-menu"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleHoverOpen}
                    sx={{width: "fit-content", cursor: "pointer", color: "white"}}
                    className={styles.menuItems}
                >
                    <Typography textAlign="center" color="white" className={styles.menuItem+" "+styles.whiteColor} fontSize="1rem">{title}</Typography>
                </ListItem>
                <Popover
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onCloce={handleHoverClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-menu',
                    }}
                    slotProps={{paper: {className: styles.menuPaper}}}
                    // anchorOrigin={{vertical: elementVertical, horizontal: elementHorizontal,}}
                    // transformOrigin={{vertical: childrenVertical, horizontal: childrenHorizontal,}}
                    // disableScrollLock
                >
                    {children}
                </Popover>
            </>
        ) : (
            <Link
                style={{color: "white"}} href={href}
            >
                <ListItem className={styles.menuItems}>
                    <Typography textAlign="center" className={styles.menuItem} fontSize="1rem">{title}</Typography>
                </ListItem>
            </Link>
        )
    );
};

export default NMenuButton;