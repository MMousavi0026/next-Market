import React, {useEffect, useState} from 'react';
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Row from "@/components/mui/Grid/Row";
import Col from "@/components/mui/Grid/Col";
import {
    Breadcrumbs, IconButton, Paper,
    styled,
    Table, TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SideBox from "@/components/pages/ShopPage/SideBox";
import Product from "@/components/pages/ShopPage/Product";
import Layout from "@/components/Layout";
import styles from "./CartPage.module.css"

const CloseIcon = dynamic(() => import('@mui/icons-material/Close'), {ssr: false})
const NavigateBeforeIcon = dynamic(() => import('@mui/icons-material/NavigateBefore'), {ssr: false})
const ArrowBackIcon = dynamic(() => import('@mui/icons-material/ArrowBack'), {ssr: false})
const HomeIcon = dynamic(() => import('@mui/icons-material/Home'), {ssr: false})

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    // },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //     border: 0,
    // },
}));

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="#999999" href="/">
        <HomeIcon sx={{fontSize: '2rem'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        سبد خرید
    </Typography>,
];

const CartPage = ({cartProducts, relatedProducts}) => {
    const [cartProduct] = useState(typeof cartProducts === "object" && cartProducts.length > 0 ? cartProducts : [])
    const [cartNumber, setCartNumber] = useState(1)
    const [relatedProduct] = useState(typeof relatedProducts === "object" && relatedProducts.length > 0 ? relatedProducts : [])
    const [sumPrice, setSumPrice] = useState([])

    useEffect(() => {
        if (typeof cartProducts === "string") alert(cartProducts)
        else if (relatedProducts === "string") alert(relatedProducts)
    }, [cartProducts, relatedProducts]);

    useEffect(() => {
        const updatedSumPrice = cartProduct.map(item => cartNumber * item.price);
        setSumPrice(updatedSumPrice);
    }, [cartProduct, cartNumber]);

    const sum = sumPrice.reduce((a, c) => a + c, 0)

    const decrementCartNumber = () => {
        if (cartNumber > 1) {
            setCartNumber(cartNumber - 1);
        }
    }

    const incrementCartNumber = () => {
        setCartNumber(cartNumber + 1)
    }

    return (
        <>
            <main>
                <Row spacing={4}>
                    <Col xs={12} />
                    <Col xs={12}>
                        <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Col>
                    <Col xs={12} sx={{ display: {xs: "none", sm: "block"} }}>
                        <div className={styles.titleWrapper}>
                            <Typography fontSize={25}>سبد خرید</Typography>
                            <ArrowBackIcon sx={{m: "0 20px"}}/>
                            <Link href="/cart-list/checkout" style={{ fontSize: "25px", color: "#999999" }}>جزئیات تسویه حساب</Link>
                            <ArrowBackIcon sx={{m: "0 20px"}}/>
                            <Typography fontSize={25} color="inherit.main">ثبت سفارش</Typography>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell> </StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.8rem'}} align="left"> </StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.8rem'}} align="left">محصول</StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.8rem'}} align="left">قیمت</StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.8rem'}} align="left">تعداد</StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.8rem'}} align="left">جمع جزء</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cartProduct.map((item, index) => {
                                            return (
                                            <StyledTableRow key={index}>
                                                <StyledTableCell component="th" scope="row">
                                                    <IconButton color="error">
                                                        <CloseIcon color="error"/>
                                                    </IconButton>
                                                </StyledTableCell>
                                                <StyledTableCell sx={{fontSize: '1.6rem'}} component={Link} href={`/shop/${item.id}`}>
                                                    <Image width={100} height={100} src={item.image} alt={item.name}/>
                                                </StyledTableCell>
                                                <StyledTableCell sx={{fontSize: '1.6rem'}} component={Link} href={`/shop/${item.slug}`}>{item.name}</StyledTableCell>
                                                <StyledTableCell>{item.price}</StyledTableCell>
                                                <StyledTableCell>
                                                    <div style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        marginBottom: "10px"
                                                    }}>
                                                        <Button sx={{fontSize: '1.6rem'}} onClick={decrementCartNumber} color="secondary">-</Button>
                                                        <div style={{
                                                            border: "rgba(128, 128, 128, 0.4) solid 1px",
                                                            padding: "5px 15px",
                                                            borderRadius: "10px",
                                                            margin: "0 5px"
                                                        }}>{cartNumber}</div>
                                                        <Button sx={{fontSize: '1.6rem'}} onClick={incrementCartNumber} color="secondary">+</Button>
                                                    </div>
                                                </StyledTableCell>
                                                <StyledTableCell sx={{fontSize: '1.6rem'}}>{cartNumber * item.price} تومان</StyledTableCell>
                                            </StyledTableRow>
                                        )})
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Row spacing={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '5px'}}>
                            <Col xs={12} sm={6}>
                                <Button variant="contained" component={Link} href='/shop' color="secondary" sx={{ width: {xs: '100%', sm: 'fit-content', fontSize: '1.6rem'} }}>ادامه خرید</Button>
                            </Col>
                            <Col xs={12} sm={6} sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', sm: 'end'} }}>
                                <TextField
                                    variant="outlined"
                                    label="کد تخفیف"
                                />
                                <Button variant="contained" color="secondary" sx={{ml: "10px", fontSize: '1.6rem'}}>اعمال کد تخفیف</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6}>
                        <SideBox title="محصولات مرتبط">
                            <Row spacing={4}>
                                {
                                    relatedProduct.map((item, index) => (
                                        <Col xs={12} sm={6} key={index}>
                                            <Product {...item} href={`/shop/${item.id}`}/>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </SideBox>
                    </Col>
                    <Col xs={12} lg={6}>
                        <SideBox title="جمع کل سبد خرید">
                            <div>
                                <Table>
                                    <TableRow>
                                        <StyledTableCell sx={{fontSize: '1.6rem'}}>جمع جزء</StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.6rem'}}>{sum} تومان</StyledTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <StyledTableCell sx={{fontSize: '1.6rem'}}>مجموع</StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.6rem'}}>{sum} تومان</StyledTableCell>
                                    </TableRow>
                                </Table>
                            </div>
                            <Button variant="contained" component={Link} href="/cart-list/checkout" color= "secondary" sx={{mt: "20px", fontSize: '1.6rem'}}>ادامه جهت تسویه حساب</Button>
                        </SideBox>
                    </Col>
                    <Col xs={12}/>
                </Row>
            </main>
        </>
    );
};

export const getServerSideProps = async () => {
    const dataList = await axios.get('https://json.xstack.ir/api/v1/products')
        .then(res => {
            return {
                cartProducts: (res.data.data.slice(0,5)),
                relatedProducts: (res.data.data.slice(10,12))
            }
        })
        .catch(() => {
            return "خطایی رخ داد!"
        })

    return {
        props: {
            cartProducts: dataList.cartProducts,
            relatedProducts: dataList.relatedProducts
        }
    }
}

CartPage.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default CartPage;