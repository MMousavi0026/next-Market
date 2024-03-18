import React, {useCallback, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Row from "@/components/mui/Grid/Row";
import Col from "@/components/mui/Grid/Col";
import {
    Breadcrumbs,
    FormControl,
    InputLabel,
    MenuItem,
    Pagination, PaginationItem,
    Rating,
    Select
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Product from "@/components/pages/ShopPage/Product";
import SideBox from "@/components/pages/ShopPage/SideBox";
import RangeSlider from "@/components/pages/ShopPage/RangeSlider";
import dynamic from "next/dynamic";
import {productsCategories, reviewsOfRecentProducts} from "@/data/productsData";
import styles from './shopPage.module.css'

const NavigateBeforeIcon = dynamic(() => import('@mui/icons-material/NavigateBefore'), {ssr: false})
const HomeIcon = dynamic(() => import('@mui/icons-material/Home'), {ssr: false})

const ShopPage = ({productsList, currentProducts}) => {
    const [productList] = useState(Array.isArray(productsList) ? productsList : []);
    const [currentProduct, setCurrentProducts] = useState(productsList.slice(0, 6));
    const [age, setAge] = useState('');
    const [age2, setAge2] = useState('');

    useEffect(() => {
        if (typeof productsList === "string") alert(productsList)
        if (currentProducts === "string" ) alert(currentProducts)
    }, [productsList, currentProducts]);

    const router = useRouter()
    const query = new URLSearchParams(router.query);
    const page = parseInt(query.get('page') || '1', 10);

    const breadcrumbs = [
        <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" href="/">
            <HomeIcon style={{fontSize:'18px'}}/>
        </Link>,
        <Typography fontSize={"18px"} key="2" color="text.primary">
            محصولات
        </Typography>,
    ];

    const pageHandleChange = (event) => {
        setAge(event.target.value);
    };

    const pageHandleChange2 = (event) => {
        setAge2(event.target.value);
    };

    const pageNumberRef = useRef(1)

    const onPaginationChange = useCallback((_, number)=> {
        pageNumberRef.current = number
        setCurrentProducts(productList.slice((number - 1) * 6, number * 6))
    }, [productList])

    const scroll = () => {
        window.scrollTo({
            top: 250 ,
            behavior: "smooth",
        })
    }

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col xs={12} />
            <Col xs={12} className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon sx={{fontSize: '2rem'}} />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12}/>
            <Col xs={12}>
                <Row spacing={6}>
                    <Col xs={12} lg={8}>
                        <Row rowSpacing={4}>
                            <Col xs={12} sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", flexWrap: 'wrap'}}>
                                <Typography fontSize='1.8rem'>نمایش {((pageNumberRef.current - 1) * 6) + 1} - {pageNumberRef.current * 6} از {productList.length} نتیجه</Typography>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 250 , color:"primary"}}>
                                        <InputLabel sx={{fontSize: '1.8rem', width: 'fit-content'}} id="demo-simple-select-helper-label" >تعداد محصول در هر صفحه</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="تعداد محصول در هر صفحه"
                                            onChange={pageHandleChange}
                                            fullWidth
                                            sx={{fontSize: '1.8rem'}}
                                        >
                                            <MenuItem value="">
                                                <i style={{fontSize: '1.8rem'}}>تعداد محصول در هر صفحه</i>
                                            </MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={6}>۶ محصول در هر صفحه</MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={8}>۸  محصول در هر صفحه</MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={12}>۱۲  محصول در هر صفحه</MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={16}>۱۶  محصول در هر صفحه</MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={32}>۳۲  محصول در هر صفحه</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        <InputLabel sx={{fontSize: '1.8rem'}} id="demo-simple-select-helper-label">مرتب سازی پیشفرض</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={age2}
                                            label="مرتب سازی پیشفرض"
                                            onChange={pageHandleChange2}
                                            fullWidth
                                            sx={{fontSize: '1.8rem'}}
                                        >
                                            <MenuItem sx={{fontSize: '1.8rem'}} value="">
                                                <i>مرتب سازی پیش فرض</i>
                                            </MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={10}>مرتب سازی بر اساس محبوبیت</MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={20}>مرتب سازی بر اساس امتیاز</MenuItem>
                                            <MenuItem sx={{fontSize: '1.8rem'}} value={30}>مرتب سازی بر اساس فروش</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <Row spacing={4}>
                                    {
                                        currentProduct.map((item, index) => (
                                            <Col key={index} xs={12} sm={6}>
                                                <Product {...item} href={`/shop/${item.slug}`} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                            <Col xs={12} sx={{display: "flex", justifyContent: "center"}}>
                                <Pagination
                                    count={Math.ceil(productList.length / 6)}
                                    onChange={onPaginationChange}
                                    onClick={scroll}
                                    color="primary"
                                    renderItem={(item) => (
                                        <PaginationItem
                                            component={Link}
                                            page={page}
                                            href={item.page > 0 ? `/shop?page=${item.page}` : 'shop'}
                                            {...item}
                                            sx={{fontSize: '1.8rem'}}
                                        />
                                    )}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} sx={{position:"sticky"}}>
                        <Row rowSpacing={4} flexDirection="column">
                            <Col>
                                <SideBox title="فیلتر بر اساس قیمت" >
                                    <RangeSlider />
                                </SideBox>
                            </Col>
                            <Col>
                                <SideBox title="دسته بندی محصولات">
                                    {
                                        productsCategories.map((item, index) => (
                                            <ListItem key={index} className={styles.sideBoxItemWrapper}>
                                                <Link href={item.href}>
                                                    <Typography className={styles.sideBoxItem}>{item.title}</Typography>
                                                </Link>
                                            </ListItem>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                            <Col>
                                <SideBox title="نقدهای محصولات اخیر">
                                    {
                                        reviewsOfRecentProducts.map((item, index) => (
                                            <React.Fragment key={index}>
                                                <div style={{display:"flex", flexDirection:"row", alignItems:'center', justifyContent:'space-between', width:'100%', margin:"10px 0"}}>
                                                    <Image width={90} height={90} src={item.imgSrc} alt={item.title} style={{width: "90px", borderRadius: "10px", marginLeft: '15px'}}/>
                                                    <div>
                                                        <Typography fontSize='1.8rem' variant="body1">{item.title}</Typography>
                                                        <Rating name="read-only" value={3} color="#faaf00" readOnly size='large'/>
                                                        <Typography fontSize='1.6rem' variant="body2">{item.desc}</Typography>
                                                    </div>
                                                </div>
                                                {index !== reviewsOfRecentProducts.length - 1 && <Divider/>}
                                            </React.Fragment>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} />
                </Row>
            </Col>
        </Row>
    );
};

export const getStaticProps = async () => {
    const dataList = await axios.get('https://json.xstack.ir/api/v1/products')
        .then(res => {
            return {
                productsList: (res.data.data),
            };
        })
        .catch(() => {
            return "خطایی رخ داد"
        })

    return {
        props: {
            productsList: dataList.productsList,
        },
        revalidate: 10,
    }
}

ShopPage.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default ShopPage;