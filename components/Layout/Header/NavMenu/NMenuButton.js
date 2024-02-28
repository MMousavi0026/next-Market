import React, {useState} from 'react';
import Link from "next/link";
import Menu from "@mui/material/Menu";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import styles from "./NMenu.module.css";

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
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onMouseEnter={handleHoverOpen}
                    sx={{width: "fit-content", cursor: "pointer", color: "white"}}
                    className={styles.menuItems}
                >
                    <Typography textAlign="center" color="white" className={styles.menuItem+" "+styles.whiteColor} fontSize="1rem">{title}</Typography>
                </ListItem>
                <Menu
                    id="basic-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    anchorEl={anchorEl}
                    onMouseLeave={handleHoverClose}
                    anchorOrigin={{vertical: elementVertical, horizontal: elementHorizontal,}}
                    transformOrigin={{vertical: childrenVertical, horizontal: childrenHorizontal,}}
                    // disableScrollLock
                    slotProps={{paper: {className: styles.menuPaper}}}
                >
                    {children}
                </Menu>
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