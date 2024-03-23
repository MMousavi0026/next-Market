import React, {useEffect, useState} from 'react';
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Row from "@/components/mui/Grid/Row";
import Col from "@/components/mui/Grid/Col";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeFeatures from "@/components/pages/homePage/HomeFeatures";
import ProductsCategories from "@/components/Layout/Header/ProductsCategories";
import Product from "@/components/pages/ShopPage/Product";
import NewsSlider from "@/components/pages/homePage/NewsSlider";
import homeBoxPic from '@/public/img/homeBox1.png';
import googlePlayPic from "@/public/img/googleplay.png";
import appStorePic from "@/public/img/appStore.png";
import mobileAppPic from "@/public/img/mobile.png";
import {productsCategories} from "@/data/productsData";
import styles from "@/pages/HomePage.module.css";

const HomePage = ({mainData}) => {
    const [data] = useState(typeof mainData === "object" && mainData?.length > 0 ? mainData : [])

    useEffect(() => {
        if(typeof mainData === "string") alert(mainData)
    }, [mainData]);

    return (
        <Row spacing={6}>
            <Col xs={12} sx={{maxWidth: '100%'}}>
                <div className={styles.box1Wrapper}>
                    <Row spacing={4} className={styles.box1}>
                        <Col xs={12} lg={6} className={styles.box1Right}>
                            <div className={styles.box1Title}>
                                <Typography variant="h3" textAlign="center" marginTop="35px" color='secondary' fontSize='5rem'>
                                    سوپر مارکت اکسترا
                                </Typography>
                                <Typography variant="h4" textAlign="center" margin="30px 0" fontSize='4rem'>
                                    تازه تر از همه جا
                                </Typography>
                                <Typography variant="body1" textAlign="center" color="#535353" fontSize='2rem'>
                                    سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است.
                                </Typography>
                            </div>
                            <div className={styles.box1Item1Buttons}>
                                <Button component={Link} href="#" variant="contained" className={styles.button1}>
                                    <Typography fontSize="2rem" color="white.main" className={styles.button1Text}>
                                        ۲۵٪ تخفیف ویژه
                                    </Typography>
                                </Button>
                                <Button component={Link} href="/shop" variant="outlined" className={styles.button2}>
                                    <Typography fontSize="2rem" color="#122d40" className={styles.button1Text}>
                                        مشاهده محصولات
                                    </Typography>
                                </Button>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{paddingTop: '80px', display: 'flex', justifyContent: 'center'}} className={styles.box1Title}>
                                <Image width={400} height={400} src={homeBoxPic} alt="shopping" className={styles.homeBoxManImg}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col xs={12} sx={{maxWidth: '100%'}}>
                <HomeFeatures/>
            </Col>
            <Col xs={12} sx={{maxWidth: '100%'}}>
                <Row spacing={4} width='100%'>
                    <Col xs={12} lg={8}>
                        <Row spacing={4} className={styles.someOffer}>
                            <Col xs={12} lg={6} height="50%">
                                <Link href="/shop" className={styles.box2Column1Item1}>
                                    <Typography
                                        fontSize='2.2rem'
                                        color='white.main'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        paddingTop="15px"
                                    >
                                        تخفیف ۵۰٪
                                    </Typography>
                                    <Typography
                                        fontSize='3.6rem'
                                        color='white.main'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        paddingTop="15px"
                                    >
                                        سس ها
                                    </Typography>
                                </Link>
                            </Col>
                            <Col xs={12} lg={6} height="50%">
                                <Link href='/shop' className={styles.box2Column1Item2}>
                                    <Typography
                                        fontSize='2.2rem'
                                        color='secondary'
                                        display="block"
                                        textAlign='right'
                                        margin='0 15px 0 0'
                                        paddingTop="15px"
                                    >
                                        تخفیف ۵۰٪
                                    </Typography>
                                    <Typography
                                        fontSize='3.6rem'
                                        color='primary'
                                        display="block"
                                        textAlign='right'
                                        margin='0 15px 0 0'
                                        paddingTop="15px"
                                    >
                                        تنقلات
                                    </Typography>
                                </Link>
                            </Col>
                            <Col xs={12} height="50%">
                                <Link href='/shop' className={styles.box2Column1Item3}>
                                    <Typography
                                        fontSize='2.2rem'
                                        color='secondary'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        paddingTop="15px"
                                    >
                                        تخفیف ویژه ۵۰٪
                                    </Typography>
                                    <Typography
                                        fontSize='3.6rem'
                                        color='white.main'
                                        display="block"
                                        textAlign='left'
                                        margin='0 0 0 15px'
                                        padding="15px 0"
                                    >
                                        روی تمامی میوه ها
                                    </Typography>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Link href='/shop' className={styles.box2Column2}>
                            <Typography
                                fontSize='2.2rem'
                                color='white.main'
                                display="block"
                                textAlign='left'
                                margin='0 0 0 15px'
                                paddingTop="15px"
                            >
                                تخفیف ۵۰٪
                            </Typography>
                            <Typography
                                fontSize='3.6rem'
                                color='white.main'
                                display="block"
                                textAlign='left'
                                margin='0 0 0 15px'
                                paddingTop="15px"
                            >
                                سبزیجات تازه و با کیفیت
                            </Typography>
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} sx={{maxWidth: '100%'}}>
                <div className={styles.box3}>
                    <div>
                        <Typography fontSize='3.8rem' width='100%' color="black">دسته بندی</Typography>
                        <Typography fontSize='3.8rem' width="100%" color='secondary'> محصولات ما</Typography>
                    </div>
                    <Row spacing={4} marginTop="0">
                        {productsCategories.map((item, index) => (
                            <Col item xs={12} sm={4} lg={2} key={index}>
                                <ProductsCategories titleColor={"black"} {...item}/>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
            <Col xs={12} sx={{maxWidth: '100%', marginBottom: '20px'}}>
                <Row className={styles.box4}>
                    <div className={styles.box4Title}>
                        <div>
                            <Typography fontSize='3.8rem' width="100%" color="black">پرفروش ترین</Typography>
                            <Typography fontSize='3.8rem' width="100%" color="secondary"> محصولات</Typography>
                        </div>
                        <Button component={Link} href="/shop" variant="contained" color="secondary" className={styles.button4}>
                            <Typography fontSize='1.8rem' color="primary" className={styles.button4Text}>همه محصولات</Typography>
                        </Button>
                    </div>
                    <Row spacing={4} width="100%">
                        {data.map((productDataItem, index) => (
                            <Col xs={12} sm={6} lg={3} key={index}>
                                <Product {...productDataItem} href={`/shop/${productDataItem.slug}`}/>
                            </Col>
                        ))}
                    </Row>
                </Row>
            </Col>
            <Col xs={12} sx={{maxWidth: '100%'}}>
                <Row className={styles.box5}>
                    <Col xs={12} md={6} className={styles.box5Col1}>
                        <div className={styles.box5Text}>
                            <Typography
                                variant="h1"
                                fontSize='3.6rem'
                                color='white.main'
                                display="block"
                                textAlign='center'
                                margin="40px 0 0 0"
                                opacity='95%'
                            >
                                سوپر مارکت اکسترا
                            </Typography>
                            <Typography
                                fontSize='3.4rem'
                                color='white.main'
                                display="block"
                                textAlign='center'
                                margin='20px 0 30px 0'
                                paddingTop="15px"
                                opacity='95%'
                            >
                                سفارش با موبایل
                            </Typography>
                            <Typography className={styles.box5Text1} fontSize='2rem' textAlign='center' color="white.main">
                                سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه
                                برمی‌دارد.
                            </Typography>
                        </div>
                        <div className={styles.box5Buttons}>
                            <Link href="/" className={styles.box5Button1+' '+styles.downloadImg}>
                                <Image width={100} height={100} className={styles.googleplayImg} src={googlePlayPic} alt=""/>
                            </Link>
                            <Link href="/" className={styles.downloadImg}>
                                <Image width={100} height={100} className={styles.appStoreImg} src={appStorePic} alt=""/>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={styles.box5Button}>
                        <Link href="/" className={styles.box5ImgWrapper}>
                            <Image src={mobileAppPic} width={100} height={100} layout="responsive" alt="" className={styles.box5Img}/>
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className={styles.box6}>
                <div className={styles.box6Title}>
                    <div>
                        <Typography fontSize='3.8rem' color="black">جدید ترین</Typography>
                        <Typography fontSize='3.8rem' color="#01e281"> اخبار و مقالات</Typography>
                    </div>
                </div>
                <div style={{maxWidth: "100%"}}>
                    {/*<NewsSlider/>*/}
                </div>
            </Col>
        </Row>
    );
};

export const getStaticProps = async () => {
    const productsList = await axios.get('https://json.xstack.ir/api/v1/products')
        .then(res => {
            return(res.data.data.slice(20, 24))
        })
        .catch(() => {
            return "خطایی رخ داد"
        })

    return {
        props: {
            mainData: productsList
        },
        revalidate: 10,
    }
}

HomePage.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default HomePage;