import React from 'react';
import Button from "@mui/material/Button";
import styles from "../../../pages/shop/Product.module.css";

const SocialMediaIcon = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <Button className={styles.SocialMediaIcon} >
            <props.icon className={styles.icon}/>
        </Button>
    );
};

export default SocialMediaIcon;