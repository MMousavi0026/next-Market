import React, {useEffect, useState} from 'react';
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Breadcrumbs,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {StyledTableRow, StyledTableCell, } from "./index";
import SideBox from "../../components/pages/ShopPage/SideBox";
import Layout from "@/components/Layout";
import styles from "./CartPage.module.css";

const NavigateBeforeIcon = dynamic(() => import('@mui/icons-material/NavigateBefore'), {ssr: false})
const ArrowBackIcon = dynamic(() => import('@mui/icons-material/ArrowBack'), {ssr: false})
const HomeIcon = dynamic(() => import('@mui/icons-material/Home'), {ssr: false})
const ExpandMoreIcon = dynamic(() => import('@mui/icons-material/ExpandMore'), {ssr: false})

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherite" href="/">
        <HomeIcon sx={{fontSize: '2rem'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        صفحه تسویه حساب
    </Typography>,
];

const Checkout = ({dataList}) => {
    const [cartProducts] = useState(Array.isArray(dataList) ? dataList : [])
    const [sumPrice, setSumPrice] = useState([])
    const [city, setCity] = useState('تهران')

    useEffect(() => {
        if (typeof dataList === "string") alert(dataList)
    }, [dataList]);

    useEffect(() => {
        const updatedSumPrice = cartProducts.map(item => 2 * item.price);
        setSumPrice(updatedSumPrice);
    }, [cartProducts]);

    const sum = sumPrice.reduce((a, c) => a + c, 0)

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <Row spacing={4}>
            <Col xs={12} />
            <Col xs={12}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="1.8rem" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12} sx={{display: {xs: "none", sm: "block"}}}>
                <div className={styles.titleWrapper}>
                    <Link href="/cart-list" style={{fontSize: "25px", color: '#999999'}}>سبد خرید</Link>
                    <ArrowBackIcon sx={{m: "0 20px"}}/>
                    <Typography fontSize={25}>جزئیات تسویه حساب</Typography>
                    <ArrowBackIcon sx={{m: "0 20px"}}/>
                    <Typography fontSize={25} color="inherit.main">ثبت سفارش</Typography>
                </div>
            </Col>
            <Col xs={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography fontSize='1.8rem' fontWeight="bold">
                            کد تخفیف دارید؟ برای نوشتن کد اینجا کلیک کنید
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{display: 'flex', alignItems: 'center'}}>
                        <TextField
                            variant="outlined"
                            label="کد تخفیف"
                            sx={{
                                "& .MuiInputLabel-formControl": {
                                    fontSize: '1.4rem'
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    fontSize: '1.4rem'
                                },
                            }}
                        />
                        <Button variant="contained" color="secondary" sx={{ml: "10px", fontSize: '1.6rem'}}>اعمال کد تخفیف</Button>
                    </AccordionDetails>
                </Accordion>
            </Col>
            <Col xs={12} md={6}>
                <SideBox title="جزئیات صورتحساب">
                    <Row spacing={3}>
                        <Col xs={12} sm={6}>
                            <TextField type="text" label="نام" variant="outlined" color="secondary" fullWidth required/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <TextField type="text" label="نام خانوادگی" variant="outlined" color="secondary" fullWidth required/>
                        </Col>
                        <Col xs={12}>
                            <TextField type="text" label="نام شرکت (اختیاری)" variant="outlined" color="secondary" fullWidth />
                        </Col>
                        <Col xs={12}>
                            <FormControl style={{ width:"100%" }}>
                                <InputLabel sx={{fontSize: '1.6rem'}} color="secondary" id="demo-simple-select-label">شهر</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={city}
                                    label="شهر"
                                    onChange={handleChange}
                                    color="secondary"
                                    fullWidth
                                    sx={{fontSize: '1.6rem'}}
                                >
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={1}>قم</MenuItem>
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={2}>اصفهان</MenuItem>
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={3}>کرمان</MenuItem>
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={4}>مشهد</MenuItem>
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xs={12}>
                            <TextField type="text" label="آدرس" variant="outlined" color="secondary" fullWidth required />
                        </Col>
                        <Col xs={12}>
                            <TextField type="text" label="کد پستی" variant="outlined" color="secondary" fullWidth required />
                        </Col>
                        <Col xs={12}>
                            <TextField type="tel" label="تلفن" variant="outlined" color="secondary" fullWidth required />
                        </Col>
                        <Col xs={12}>
                            <TextField type="email" label="ایمیل" variant="outlined" color="secondary" fullWidth required />
                        </Col>
                        <Col xs={12}>
                            <TextField type="email" label="توضیحات تکمیلی" variant="outlined" color="secondary" fullWidth />
                        </Col>
                    </Row>
                </SideBox>
            </Col>
            <Col xs={12} md={6}>
                <SideBox title="سفارش شما">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                        <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{fontSize: '1.8rem'}} align="left">محصول</StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.8rem'}} align="left">جمع جزء</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cartProducts.map((item, index) => {
                                            return (
                                                <StyledTableRow key={index}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <Typography sx={{fontSize: '1.4rem'}} >{item.name} * </Typography>
                                                        <Typography sx={{fontSize: '1.4rem'}}  fontWeight="bold">2</Typography>
                                                    </StyledTableCell>
                                                    <StyledTableCell sx={{fontSize: '1.6rem'}} >{item.price * 2} تومان</StyledTableCell>
                                                </StyledTableRow>
                                            )
                                        })
                                    }
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography sx={{fontSize: '1.6rem'}} fontWeight="bold">جمع جزء</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.6rem'}}>{sum} تومان</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography sx={{fontSize: '1.6rem'}} fontWeight="bold">مجموع</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell sx={{fontSize: '1.6rem'}}>{sum} تومان</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button variant="contained" color="secondary" sx={{mt: "15px", fontSize: '1.6rem'}}>ثبت سفارش</Button>
                    </div>
                </SideBox>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

export const getServerSideProps = async () => {
    const dataList = await axios.get('https://json.xstack.ir/api/v1/products')
        .then(res => {
            return (res.data.data.slice(10, 15))
        })
        .catch(() => {
            return "خظایی رخ داد!"
        })
    return {
        props: {
            dataList
        },
    }
}

Checkout.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default Checkout;