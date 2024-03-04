import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import Link from "next/link";
import Row from "@/components/mui/Grid/Row";
import Col from "@/components/mui/Grid/Col";
import {Breadcrumbs, Chip, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SideBox from "@/components/pages/ShopPage/SideBox";
import {tags} from "@/data/tags";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import HomeIcon from "@mui/icons-material/Home";
import styles from "@/pages/news/NewsPage.module.css";
import Layout from "@/components/Layout";
import Image from "next/image";

const TheNewsPage = ({dataList}) => {
    const [thisNewsData] = useState(Array.isArray(dataList) ? dataList : [])
    const router = useRouter();

    useEffect(() => {
        if (typeof dataList === "string") alert(dataList)
    }, [dataList]);

    const thisNews = thisNewsData.find(item => item.id == router.query.id)??{}

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
                                <Image src={thisNews?.imgSrc} alt={thisNews?.title} width={100} height={100} layout="responsive" style={{borderRadius:"20px"}}/>
                                <Typography fontSize={25} fontWeight="bold">{thisNews?.title}</Typography>
                                <Typography fontSize={20} display="block" margin="10px 0" >{thisNews?.body}</Typography>
                            </Col>
                            <Col xs={12} className={styles.bottomItemWrapper} >
                                <div className={styles.bottomItem}>
                                    <AccessTimeIcon color="secondary" fontSize="15px" className={styles.icon}/>
                                    <Chip label={thisNews?.created_at} variant="outlined" onClick={handleClick} sx={{fontSize:"15px", ml:"7px", py: '20px', borderRadius: '30px'}} />
                                </div>
                                <div className={styles.bottomItem}>
                                    <RemoveRedEyeIcon color="secondary" fontSize="15px" className={styles.icon}/>
                                    <Chip label={`${thisNews?.view} نفر`} variant="outlined" onClick={handleClick} sx={{fontSize:"15px", ml:"7px", py: '20px', borderRadius: '30px'}} />
                                </div>
                                <div className={styles.bottomItem}>
                                    <LocalOfferIcon color="secondary" fontSize="15px" className={styles.icon}/>
                                    <Chip label={thisNews?.slug} variant="outlined" onClick={handleClick} sx={{fontSize:"15px", ml:"7px", py: '20px', borderRadius: '30px'}} />
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
                                        <Image src="/img/ads.jpg" width={100} height={100} layout="responsive" alt="تبلیغات" style={{borderRadius:"20px", marginTop:'15px'}}/>
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

export const getServerSideProps = async () => {
    const dataList = await  axios.get('https://json.xstack.ir/api/v1/posts')
        .then(res => {
            return(res.data.data)
        })
        .catch(() => (
            "خطایی رخ داد!"
        ))
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