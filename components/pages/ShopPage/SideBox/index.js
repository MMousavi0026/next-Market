import React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import styles from "./SideBox.module.css";

const SideBox = ({title, children, ...props}) => {
    return (
        <Box className={styles.boxWrapper} {...props}>
            <div className={styles.titleWrapper}>
                <Typography variant="h6" textAlign="center">{title}</Typography>
            </div>
            <List>
                {children}
            </List>
        </Box>
    );
};

export default SideBox;