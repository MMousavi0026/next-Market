import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import {Breadcrumbs, Pagination, PaginationItem, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SideBox from "@/components/pages/ShopPage/SideBox";
import {tags} from "@/data/tags";
import styles from "./NewsPage.module.css";

const NavigateBeforeIcon = dynamic(() => import('@mui/icons-material/NavigateBefore'), {ssr: false})
const HomeIcon = dynamic(() => import('@mui/icons-material/Home'), {ssr: false})
const LinkIcon = dynamic(() => import('@mui/icons-material/Link'), {ssr: false})


const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        اخبار
    </Typography>,
];

const NewsPage = ({mainData}) => {
    const [dataList] = useState(Array.isArray(mainData) ? mainData : []);
    const [newsList, setNews] = useState(dataList.slice(0, 4));

    useEffect(() => {
        if (mainData === "string") alert(mainData)
    }, [mainData]);

    const router = useRouter()
    const query = new URLSearchParams(router.query);
    const page = parseInt(query.get('page') || '1', 10);

    const pageNumberRef = useRef(1)

    const onPaginationChange = useCallback((_, number)=> {
        pageNumberRef.current = number
        setNews(dataList.slice((number - 1) * 4, number * 4))
    }, [dataList])

    const scroll = () => {
        window.scrollTo({
            top: 250 ,
            behavior: "smooth",
        })
    }

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
                                            <Link fontSize={25} href={`/news/${item.slug}`} className={styles.newsItemTitle}>{item.title}</Link>
                                            <Typography fontSize={15} display="block" color="text.secondary" margin="10px 0">{item.date}</Typography>
                                            <Typography fontSize={17} display="block" color="text.primary" className={styles.newsItemDesc}>{item.desc}</Typography>
                                            <Button component={Link} href={`/news/${item.slug}`} variant="contained" color="secondary" sx={{mt:"20px"}}>
                                                <LinkIcon color="primary" sx={{mr: '5px'}}/>
                                                <Typography>ادامه مطلب</Typography>
                                            </Button>
                                        </div>
                                    </Col>
                                ))
                            }
                            <Col xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                <Pagination
                                    count={Math.ceil(dataList.length / 4)}
                                    color="primary"
                                    onChange={onPaginationChange}
                                    onClick={scroll}
                                    renderItem={(item) => (
                                        <PaginationItem
                                            component={Link}
                                            page={page}
                                            href={item.page > 0 ? `/news?page=${item.page}` : '/news'}
                                            {...item}
                                        />
                                    )}
                                />
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
                                            <Link href="#" key={index}>
                                                <Button variant="contained" color="white" sx={{ml:'10px', mb:'10px'}}>{item}</Button>
                                            </Link>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="تبلیغات ساده">
                                    <Link href="#" >
                                        <Image src="/img/ads.jpg" alt="تبلیغات" width={300} height={300} style={{borderRadius:"20px", marginTop:'15px', width: '100%', height: 'auto'}}/>
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

export const getStaticProps = async () => {
    const dataList = await axios.get('https://json.xstack.ir/api/v1/posts')
        .then(res => {
            return(res.data.data)
        })
        .catch(() => (
            "خطایی رخ داد!"
        ))
    return {
        props: {
            mainData: dataList
        },
        revalidate: 10,
    }
}

NewsPage.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default NewsPage;