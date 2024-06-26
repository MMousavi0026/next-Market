import React from 'react';
import dynamic from "next/dynamic";
import Link from "next/link";
import Row from "@/components/mui/Grid/Row";
import Col from "@/components/mui/Grid/Col";
import Typography from "@mui/material/Typography";
import {Breadcrumbs} from "@mui/material";
import Layout from "@/components/Layout";
import Button from "@mui/material/Button";
import styles from "./404.module.css"

const NavigateBeforeIcon = dynamic(() => import('@mui/icons-material/NavigateBefore'), {ssr: false})
const HomeIcon = dynamic(() => import('@mui/icons-material/Home'), {ssr: false})

const FourHundredFour = () => {
    return (
        <>
            <main>
                <Row spacing={4}>
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