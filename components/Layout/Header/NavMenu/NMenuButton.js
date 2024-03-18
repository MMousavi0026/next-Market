import React, {useState} from 'react';
import Link from "next/link";
import Menu from "@mui/material/Menu";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./NMenu.module.css";
import Popover from "@mui/material/Popover";

const NMenuButton = ({children, title, href, className, fontSize}) => {

    return (
        children ? (
            <div className={styles.dropBox}>
                <ListItem
                    sx={{width: "fit-content", cursor: "pointer", color: "white"}}
                    className={styles.menuItems}
                >
                    <Typography textAlign="center" color="white" className={styles.menuItem+" "+styles.whiteColor} fontSize={fontSize}>{title}</Typography>
                </ListItem>
                <div className={styles.dropDown + ' ' + className}>
                    {children}
                </div>
            </div>
        ) : (
            <Link style={{color: "white"}} href={href}>
                <ListItem className={styles.menuItems}>
                    <Typography textAlign="center" className={styles.menuItem} fontSize={fontSize}>{title}</Typography>
                </ListItem>
            </Link>
        )
    );
};

export default NMenuButton;