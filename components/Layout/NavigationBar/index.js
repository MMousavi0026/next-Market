import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import DraftsIcon from '@mui/icons-material/Drafts';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {NavLink, Outlet} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from './AppBar.module.css';

const NavigationBar = () => {

    const [value, setValue] = React.useState("خانه");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{md:{display:"flex"},lg:{width: '100vw', backgroundColor:'primary', display:'none'}}} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="خانه"
                icon={<RestoreIcon />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>


        // <div style={{zIndex:'1'}}>
        //     <nav className={styles.wrapper}>
        //         <NavLink to="/" className={styles.item}>
        //             <HomeIcon className={styles.icon} />
        //             <span className={styles.text}>خانه</span>
        //         </NavLink>
        //         <NavLink to="/products" className={styles.item}>
        //             <ShoppingBasketIcon className={styles.icon}/>
        //             <span className={styles.text}>محصولات</span>
        //         </NavLink>
        //         <NavLink to="#" className={styles.item}>
        //             <HelpIcon className={styles.icon}/>
        //             <span className={styles.text}>سوالات</span>
        //         </NavLink>
        //         <NavLink to="#" className={styles.item}>
        //             <DraftsIcon className={styles.icon} />
        //             <span className={styles.text}>تماس با ما</span>
        //         </NavLink>
        //     </nav>
        //     <Outlet/>
        // </div>
    );
};

export default NavigationBar;