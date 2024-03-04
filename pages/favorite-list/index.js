import React, {useEffect, useState} from 'react';
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {Breadcrumbs} from "@mui/material";
import Col from "../../components/mui/Grid/Col";
import Row from "../../components/mui/Grid/Row";
import Product from "../../components/pages/ShopPage/Product";
import axios from "axios";
import Layout from "@/components/Layout";
import styles from "./FavoritePage.module.css"

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" to="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        علاقمندی ها
    </Typography>,
];
const FavoritePage = ({dataList}) => {
    const [productsList] = useState(Array.isArray(dataList) ? dataList : [])

    useEffect(() => {
        if (typeof dataList === "string") alert(dataList)
    }, [dataList]);
    console.log(dataList)

    return (
        <Row rowSpacing={4}>
            <Col xs={12} />
            <Col xs={12}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col>
                <Row spacing={4}>
                    {
                        productsList.map((item, index) => (
                            <Col xs={12} sm={2} lg={3} key={index}>
                                <Product closeIcon {...item} href={`/shop/${item.id}`}/>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
            <Col xs={12} />
        </Row>
    );
};

export const getServerSideProps = async () => {
    const dataList = await axios.get('https://json.xstack.ir/api/v1/products')
        .then(res => {
            return(res.data.data.slice(15,20))
        })
        .catch(()  => (
            "خطایی رخ داد!"
        ))
    return {
        props: {
            dataList
        }
    }
}

FavoritePage.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default FavoritePage;