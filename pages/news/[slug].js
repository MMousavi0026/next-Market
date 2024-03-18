import React, {useEffect, useState} from 'react';
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Row from "@/components/mui/Grid/Row";
import Col from "@/components/mui/Grid/Col";
import {Breadcrumbs, Chip, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SideBox from "@/components/pages/ShopPage/SideBox";
import {tags} from "@/data/tags";
import styles from "@/pages/news/NewsPage.module.css";

const AccessTimeIcon = dynamic(() => import('@mui/icons-material/AccessTime'), {ssr: false})
const LocalOfferIcon = dynamic(() => import('@mui/icons-material/LocalOffer'), {ssr: false})
const RemoveRedEyeIcon = dynamic(() => import('@mui/icons-material/RemoveRedEye'), {ssr: false})
const NavigateBeforeIcon = dynamic(() => import('@mui/icons-material/NavigateBefore'), {ssr: false})
const HomeIcon = dynamic(() => import('@mui/icons-material/Home'), {ssr: false})


const TheNewsPage = ({dataList}) => {
    const [thisNewsData] = useState(Array.isArray(dataList) ? dataList[0] : [])

    useEffect(() => {
        if (typeof dataList === "string") alert(dataList)
    }, [dataList]);

    const breadcrumbs = [
        <Typography component={Link} style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
            <HomeIcon style={{fontSize:'18px'}}/>
        </Typography>,
        <Typography component={Link} fontSize={"18px"} underline="hover" key="2" color="inherit.main" href="/news">
            اخبار و مقالات
        </Typography>,
    ];

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

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
                <Row columnSpacing={4}>
                    <Col xs={12} lg={8}>
                        <Row rowSpacing={4}>
                            <Col xs={12}>
                                <Image src={thisNewsData.imgSrc} alt={thisNewsData.title} width={300} height={300} style={{width: '100%', height: 'auto', borderRadius:"20px"}}/>
                                <Typography fontSize='2rem' fontWeight="bold">{thisNewsData?.title}</Typography>
                                <Typography fontSize='1.6rem' display="block" margin="10px 0" >{thisNewsData?.body}</Typography>
                            </Col>
                            <Col xs={12} className={styles.bottomItemWrapper} >
                                <div className={styles.bottomItem}>
                                    <AccessTimeIcon color="secondary" className={styles.icon}/>
                                    <Chip label={thisNewsData?.created_at} variant="outlined" onClick={handleClick} sx={{fontSize:"13px", ml:"7px", py: '20px', borderRadius: '30px'}} />
                                </div>
                                <div className={styles.bottomItem}>
                                    <RemoveRedEyeIcon color="secondary" className={styles.icon}/>
                                    <Chip label={`${thisNewsData?.view} نفر`} variant="outlined" onClick={handleClick} sx={{fontSize:"13px", ml:"7px", py: '20px', borderRadius: '30px'}} />
                                </div>
                                <div className={styles.bottomItem}>
                                    <LocalOfferIcon color="secondary" className={styles.icon}/>
                                    <Chip label={thisNewsData?.slug} variant="outlined" onClick={handleClick} sx={{fontSize:"13px", ml:"7px", py: '20px', borderRadius: '30px'}} />
                                </div>
                            </Col>
                            <Col xs={12}/>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Row rowSpacing={4}>
                            <Col xs={12}>
                                <SideBox title="جستجو">
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <TextField
                                            label="جستجو"
                                            type="text"
                                            sx={{mr:2.5, backgroundColor:"white.main"}}
                                            color="secondary"
                                        />
                                        <Button variant="contained" color="secondary">جستجو</Button>
                                    </div>
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="برچسب ها">
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
                                        <Image src="/img/ads.jpg" width={200} height={200} alt="تبلیغات" style={{width: '100%', height: 'auto', borderRadius:"20px", marginTop:'15px'}}/>
                                    </Link>
                                </SideBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} />
        </Row>
    );
};

export const getStaticPaths = async () => {
    const data = await axios.get('https://json.xstack.ir/api/v1/posts')
        .then(res => {
            return (res.data.data)
        })

    const paths = data.map((item) => ({
        params: {slug: item.slug},
    }))

    return {paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
    const dataList = await axios.get('https://json.xstack.ir/api/v1/post/' + params.slug)
        .then(res => {
            return(res.data)
        })
        .catch(() => (
            "خطایی رخ داد!"
        ))
    console.log(dataList)
    return {
        props: {
            dataList
        }
    }
}

TheNewsPage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default TheNewsPage;