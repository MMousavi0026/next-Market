import React from 'react';
import styles from "./Product.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const ProductOption = ({iconName, title, iconVertical, iconHorizontal, textVertical, textHorizontal, ...props}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div {...props}>
            <button className={styles.love} aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
                <FontAwesomeIcon className={styles.icon} icon={iconName} />
            </button>
            <Popover
                id="mouse-over-popover"
                sx={{pointerEvents: 'none'}}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{vertical: iconVertical, horizontal: iconHorizontal,}}
                transformOrigin={{vertical: textVertical, horizontal: textHorizontal,}}
                onClose={handlePopoverClose}
                disableScrollLock
                slotProps={{paper: { sx: {backgroundColor: 'secondary.main', borderRadius: "30px", boxShadow:'none', display: "flex", alignItems: "center", justifyContent: "center", mr: "10px"}}}}
            >
                <Typography variant="span" fontSize="12px" className={styles.POTitle}>{title}</Typography>
            </Popover>
        </div>
    );
};

export default ProductOption;