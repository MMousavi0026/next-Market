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
    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }
    const handleHoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleHoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        children ? (
            <div
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.dropButton}
            >
                <ListItem
                    sx={{width: "fit-content", cursor: "pointer", color: "white"}}
                    className={styles.menuItems}
                >
                    <Typography textAlign="center" color="white" className={styles.menuItem+" "+styles.whiteColor} fontSize="1rem">{title}</Typography>
                </ListItem>
                <div className={styles.dropDown}>
                    {children}
                </div>
            </div>
        ) : (
            <Link style={{color: "white"}} href={href}>
                <ListItem className={styles.menuItems}>
                    <Typography textAlign="center" className={styles.menuItem} fontSize="1rem">{title}</Typography>
                </ListItem>
            </Link>
        )
    );
};

export default NMenuButton;