import React, {useEffect, useState} from 'react';
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
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import styles from "./CartPage.module.css";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Link} from "react-router-dom";
import Row from "../../components/mui/Grid/Row";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import SideBox from "../../components/pages/ShopPage/SideBox";
import {StyledTableRow, StyledTableCell, } from "./index";
import axios from "axios";
import Layout from "@/components/Layout";

const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherite" to="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        صفحه تسویه حساب
    </Typography>,
];

const CheckoutPage = () => {

    const [cartProducts, setCartProducts] = useState([])
    const [sumPrice, setSumPrice] = useState([])
    const [city, setCity] = useState('تهران')

    useEffect(() => {
        const updatedSumPrice = cartProducts.map(item => 2 * item.price);
        setSumPrice(updatedSumPrice);
    }, [cartProducts]);

    const sum = sumPrice.reduce((a, c) => a + c, 0)

    useEffect(() => {
        axios.get('https://json.xstack.ir/api/v1/products')
            .then(res => {
                setCartProducts(res.data.data.slice(10, 15))
            })
    }, []);

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <Row spacing={4}>
            <Col xs={12} />
            <Col xs={12}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12} sx={{display: {xs: "none", sm: "block"}}}>
                <div className={styles.titleWrapper}>
                    <Link to="/cart-list" style={{fontSize: "25px", color: '#999999'}}>سبد خرید</Link>
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
                        <Typography fontWeight="bold">
                            کد تخفیف دارید؟ برای نوشتن کد اینجا کلیک کنید
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{display: 'flex', alignItems: 'center'}}>
                        <TextField
                            variant="outlined"
                            label="کد تخفیف"
                        />
                        <Button variant="contained" color="secondary" sx={{ml: "10px"}}>اعمال کد تخفیف</Button>
                    </AccordionDetails>
                </Accordion>
            </Col>
            <Col xs={12} sm={6}>
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
                                <InputLabel color="secondary" id="demo-simple-select-label">شهر</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={city}
                                    label="شهر"
                                    onChange={handleChange}
                                    color="secondary"
                                    fullWidth
                                >
                                    <MenuItem value={1}>قم</MenuItem>
                                    <MenuItem value={2}>اصفهان</MenuItem>
                                    <MenuItem value={3}>کرمان</MenuItem>
                                    <MenuItem value={4}>مشهد</MenuItem>
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
            <Col xs={12} sm={6}>
                <SideBox title="سفارش شما">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                        <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="left">محصول</StyledTableCell>
                                        <StyledTableCell align="left">جمع جزء</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cartProducts.map((item) => {
                                            return (
                                                <StyledTableRow>
                                                    <StyledTableCell component="th" scope="row">
                                                        <Typography>{item.name} * </Typography>
                                                        <Typography fontWeight="bold">2</Typography>
                                                    </StyledTableCell>
                                                    <StyledTableCell>{item.price * 2} تومان</StyledTableCell>
                                                </StyledTableRow>
                                            )
                                        })
                                    }
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography fontWeight="bold">جمع جزء</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell>{sum} تومان</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            <Typography fontWeight="bold">مجموع</Typography>
                                        </StyledTableCell>
                                        <StyledTableCell>{sum} تومان</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button variant="contained" color="secondary" sx={{mt: "15px"}}>ثبت سفارش</Button>
                    </div>
                </SideBox>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

CheckoutPage.getLayout = (page) => {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default CheckoutPage;