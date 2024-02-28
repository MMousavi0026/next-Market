import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import {Breadcrumbs, Pagination, TextField} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinkIcon from '@mui/icons-material/Link';
import Box from "@mui/material/Box";
import SideBox from "@/components/pages/ShopPage/SideBox";
import Layout from "@/components/Layout";
import {tags} from "@/data/tags";
import styles from "./NewsPage.module.css";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        محصولات
    </Typography>,
];

const NewsPage = () => {
    const [dataList, setData] = useState([]);
    const [newsList, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://json.xstack.ir/api/v1/posts')
            .then(res => {
                setData(res.data.data)
                setNews(res.data.data.slice(0, 4))
            })
    }, []);

    const pageNumberRef = useRef(1)

    const onPaginationChange = useCallback((_, number)=> {
        pageNumberRef.current = number
        setNews(dataList.slice((number - 1) * 4, number * 4))
    }, [newsList])

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col xs={12}/>
            <Col xs={12} className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12}/>
            <Col xs={12}>
                <Row columnSpacing={4} sx={{display: "flex", justifyContent: "center"}}>
                    <Col xs={12} lg={8}>
                        <Row spacing={4}>
                            {
                                newsList.map((item, index) => (
                                    <Col xs={12} sm={6} key={index}>
                                        <div className={styles.newsItem}>
                                            <Button sx={{borderRadius:"20px", mb:"10px"}}>
                                                <Image src={item.image} alt={item.title} width={100} height={100} layout="responsive" style={{borderRadius:"20px"}} />
                                            </Button>
                                            <Link fontSize={25} href={`/news/${item.id}`} className={styles.newsItemTitle}>{item.title}</Link>
                                            <Typography fontSize={15} display="block" color="text.secondary" margin="10px 0">{item.date}</Typography>
                                            <Typography fontSize={17} display="block" color="text.primary" className={styles.newsItemDesc}>{item.desc}</Typography>
                                            <Button component={Link} to={`/news/${item.id}`} variant="contained" color="secondary" sx={{mt:"20px"}}>
                                                <LinkIcon color="primary" sx={{mr: '5px'}}/>
                                                <Typography>ادامه مطلب</Typography>
                                            </Button>
                                        </div>
                                    </Col>
                                ))
                            }
                            <Col xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                <Pagination count={Math.ceil(dataList.length / 4)} color="primary" onChange={onPaginationChange} />
                            </Col>
                            <Col xs={12}/>
                        </Row>
                    </Col>
                    <Col xs={10} lg={4} >
                        <Row rowSpacing={4}>
                            <Col xs={12}>
                                <SideBox title="جستجو">
                                    <Box sx={{display:"flex", alignItems:"center", flexDirection: {xs: "column", sm: "row"} }}>
                                        <TextField
                                            label="جستجو"
                                            type="text"
                                            sx={{ mr: {xs: 0, sm: 2.5}, mb: {xs: 2, sm: 0}, backgroundColor:"white.main"}}
                                            color="secondary"
                                        />
                                        <Button variant="contained" color="secondary">جستجو</Button>
                                    </Box>
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="برچسبها">
                                    {
                                        tags.map((item, index) => (
                                            <Link href="#">
                                                <Button variant="contained" color="white" sx={{ml:'10px', mb:'10px'}}>{item}</Button>
                                            </Link>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="تبلیغات ساده">
                                    <Link href="#" >
                                        <Image src="/img/ads.jpg" alt="تبلیغات" width={100} height={100} layout="responsive" style={{borderRadius:"20px", marginTop:'15px'}}/>
                                    </Link>
                                </SideBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

NewsPage.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default NewsPage;