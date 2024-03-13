import React from 'react';
import {useSelector} from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {AppBar, IconButton, InputBase, styled, Toolbar} from "@mui/material";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Drawer from "../../mui/Drawer";
import Row from "../../mui/Grid/Row";
import Col from "../../mui/Grid/Col";
import ResponsiveMenu from "./ResponsiveMenu/";
import NavMenu from "./NavMenu";
import styles from "./Header.module.css";
import dynamic from "next/dynamic";

const SearchIcon = dynamic(() => import("@mui/icons-material/Search"), {ssr: false})
const PhoneInTalkIcon = dynamic(() => import("@mui/icons-material/PhoneInTalk"), {ssr: false})
const ShoppingCartIcon = dynamic(() => import("@mui/icons-material/ShoppingCart"), {ssr: false})
const FavoriteIcon = dynamic(() => import("@mui/icons-material/Favorite"), {ssr: false})
const PersonIcon = dynamic(() => import("@mui/icons-material/Person"), {ssr: false})
const MenuIcon = dynamic(() => import("@mui/icons-material/Menu"), {ssr: false})

const Header = () => {
    const counterCart = useSelector(x => x.counterCart)
    const counterBeloved = useSelector(x => x.counterBeloved)

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(open)
    };

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '27vw',
                '&:focus': {
                    width: '30vw',
                },
            },
            [theme.breakpoints.up('xl')]: {
                width: '15vw',
                '&:focus': {
                    width: '20vw',
                },
            },
        },
    }));

    return (
        <>
            <AppBar position="sticky" color="primary" className={styles.appBar}>
                <Toolbar className={styles.toolbarWrapper}>
                    <Row columnSpacing={1} className={styles.toolbar}>
                        <Col xs={4} sm={3} lg={3}>
                            <Link href="/"  className={styles.logoWrapper}>
                                <Image className={styles.logo+" "+styles.img} alt='logo' src="/img/logo-sm.png" width={300} height={300} />
                            </Link>
                        </Col>
                        <Col>
                            <div className={styles.search}>
                                <StyledInputBase
                                    placeholder="دنبال چه محصولی هستید؟"
                                    inputProps={{'aria-label': 'search'}}
                                />
                                <IconButton className={styles.searchIcon}>
                                    <SearchIcon fontSize='20' fontWeight="bold" className={styles.icon}/>
                                </IconButton>
                            </div>
                        </Col>
                        <Col sx={2} lg={4} className={styles.iconsWrapper}>
                            <div className={styles.icons}>
                                <Link href="tel:0098922334455" className={styles.call} >
                                    <IconButton className={styles.iconButton}>
                                        <PhoneInTalkIcon fontSize='20' className={styles.icon + " " + styles.callIcon}/>
                                    </IconButton>
                                    <div className={styles.callTitle}>
                                        <Typography fontSize=".6rem" color="#e6e6e6" textAlign='left' marginBottom='0' >شماره تماس</Typography>
                                        <Typography fontSize="1rem" color="white.main" fontWeight='bold'>۰۹۲۲۳۳۴۴۵۵</Typography>
                                    </div>
                                </Link>
                                <IconButton component={Link} href="/cart-list" className={styles.iconButton}>
                                    <Badge badgeContent={counterCart} color="error" sx={{'& span': {fontSize: 15}}}>
                                        <ShoppingCartIcon fontSize="20" className={styles.icon}/>
                                    </Badge>
                                </IconButton>
                                <IconButton component={Link} href="/favorite-list" className={styles.favorite}>
                                    <Badge badgeContent={counterBeloved} color="error" sx={{'& span': {fontSize: 15}}}>
                                        <FavoriteIcon fontSize='20' className={styles.icon}/>
                                    </Badge>
                                </IconButton>
                                <IconButton component={Link} href="/login" className={styles.person}>
                                    <PersonIcon fontSize='20' className={styles.icon}/>
                                </IconButton>
                                <IconButton onClick={toggleDrawer(true)} className={styles.menu}>
                                    <MenuIcon fontSize='20' className={styles.icon}/>
                                </IconButton>
                                <Drawer
                                    open={open}
                                    anchor="right"
                                    onClose={toggleDrawer(false)}
                                    PaperProps={{className: styles.drawerPaperProps}}
                                >
                                    <ResponsiveMenu/>
                                </Drawer>
                            </div>
                        </Col>
                    </Row>
                </Toolbar>
            </AppBar>
            <NavMenu/>
        </>
    );
};

export default Header;