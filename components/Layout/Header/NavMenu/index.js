import React, {useCallback} from 'react';
import {AppBar, Toolbar} from "@mui/material";
import Link from "next/link";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardGiftCardIcon from "@mui/icons-material/CardGiftcard";
import Col from "../../../mui/Grid/Col";
import Row from "../../../mui/Grid/Row";
import ProductsCategories from "../ProductsCategories";
import NMenuButton from "./NMenuButton";
import menuData from "../../../../data/menuData";
import styles from "./NMenu.module.css";

const NavMenu = () => {
    const processElements = useCallback((data) => (
        data.map((item, index) => (
            <NMenuButton key={index} fontSize="1.2rem"{...item} className={item.type === 'list' && styles.listItemChild}>
                {
                    item.children?.length && (
                        item.type === "button" ?
                            <Row spacing={2} sx={{padding: "10px"}}>
                                {
                                    item.children.map((discountDataItem, index) => (
                                        <Col xs={2} key={index}>
                                            <ProductsCategories
                                                titleColor="white"
                                                discount="۲۰٪ تخفیف"
                                                {...discountDataItem}
                                            />
                                        </Col>
                                    ))
                                }
                            </Row>
                            : item.type === "list" ?
                            <div className={"flex flex-row text-white p-4"}>
                                {
                                    item.children.map((item, index) => (
                                        <div key={index} style={{width: '33%'}} className={"text-white w-4/12 p-3"}>
                                            <Typography href={`/shop/${item.href}`} className={'text-lg text-secondary font-bold'}>{item.title}</Typography>
                                            <div className={"flex flex-col pt-4"}>
                                                {
                                                    item.children.map((item, index) => (
                                                        <Link className={"text-white p-1 hover:text-secondary transition-colors: duration-300"} href={`/shop/${item.href}`} key={index}>{item.title}</Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <Row spacing={3} sx={{padding: "10px 24px"}}>
                                <Col xs={12} className={styles.NMenuList}>
                                    {
                                        item.children?.length ?
                                            processElements(item.children) : null
                                    }
                                </Col>
                            </Row>
                    )
                }
            </NMenuButton>
        ))
    ), [])

    return (
        <AppBar position="static" color="tertiary" className={styles.navAppBar}>
            <Toolbar className={styles.navToolbar}>
                <List component="nav" aria-label="main mailbox folders" className={styles.navList}>
                    {
                        processElements(menuData)
                    }
                </List>
                <Button variant="contained" className={styles.giftButton}>
                    <CardGiftCardIcon color="primary" className={styles.giftIcon}/>
                    <Typography fontSize="1rem">
                        تخففیفات روزانه
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavMenu;