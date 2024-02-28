import React, {useMemo} from 'react';
import Link from "next/link";
import {Collapse} from "@mui/material";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import styles from "./RMenu.module.css";

const RMenuButton = ({children, title, selected, onClick, fontSize, href, Icon}) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const MenuButton = useMemo(() => {
        const Component = ({ children, haveChildren }) => {
            return (
                haveChildren ?
                    <>
                        {children}
                    </>
                    :
                    <Link
                        href={href}
                        component={ListItemButton}
                        style={{ color: 'white' }}
                    >
                        {children}
                    </Link>
            )
        };

        Component.displayName = 'MenuButton';

        return Component;
    }, [href]);

    return (
        <MenuButton style={{width:"100%", height:"100%"}} haveChildren={children}>
            <ListItemButton
                selected={selected}
                onClick={() => {
                    onClick();
                    handleClick()
                }}
            >
                {Icon && <Icon fontSize={fontSize} style={{marginLeft: "8px", color: '#546875'}}/>}
                <Typography  color="white" fontSize={fontSize}>{title}</Typography>
                {children ? (open ? <ExpandLess color="white"/> : <ExpandMore color="white"/>) : null}
            </ListItemButton>
            {
                children ?(
                    <Collapse in={open} timeout="auto" unmountOnExit classes={{wrapperInner: styles.collapse}}>
                        {children}
                    </Collapse>
                ) : null
            }
        </MenuButton>
    );
};

export default RMenuButton;