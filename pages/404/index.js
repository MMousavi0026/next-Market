import React from 'react';
import Row from "@/components/mui/Grid/Row";
import Col from "@/components/mui/Grid/Col";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {Breadcrumbs} from "@mui/material";
import Layout from "@/components/Layout";
import Button from "@mui/material/Button";
import styles from "./404.module.css"

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="#999999" href="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        سبد خرید
    </Typography>,
];

const FourHundredFour = () => {
    return (
        <>
            <main>
                <Row spacing={4}>
                    <Col xs={12}>
                        <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Col>
                    <Col xs={12}/>
                    <Col xs={12} className={styles.item}>
                        <Typography fontSize={300} fontWeight="bold" color="secondary" lineHeight="1">۴۰۴</Typography>
                    </Col>
                    <Col xs={12} className={styles.item}>
                        <Typography fontSize={35}>آدرس غلط وارد کردید</Typography>
                    </Col>
                    <Col xs={12}/>
                    <Col xs={12} className={styles.item}>
                        <Button variant="contained" color="secondary" component={Link} href="/" className={styles.button}>
                            <Typography fontSize={30}>صفحه اصلی</Typography>
                        </Button>
                    </Col>
                    <Col xs={12}/>
                </Row>
            </main>
        </>
    );
};

FourHundredFour.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default FourHundredFour;