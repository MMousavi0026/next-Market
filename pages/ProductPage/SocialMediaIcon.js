import React from 'react';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import styles from "./Product.module.css";

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
            <props.icon/>
        </Button>
    );
};

export default SocialMediaIcon;