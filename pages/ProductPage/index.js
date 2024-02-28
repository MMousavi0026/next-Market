import React, {useEffect, useState} from 'react';
import Row from "../../components/mui/Grid/Row";
import Col from "../../components/mui/Grid/Col";
import ProductOption from "../../components/pages/ShopPage/Product/ProductOption";
import Typography from "@mui/material/Typography";
import {Checkbox, FormControlLabel, Rating, Tab, Tabs, TextField} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faCodeCompare, faHeart} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useDispatch} from "react-redux";
import {increaseCartByAmount} from "../../redux/reducers/counterCart";
import Divider from "@mui/material/Divider";
import styles from "./Product.module.css"
import SocialMediaIcon from "./SocialMediaIcon";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import SideBox from "../../components/pages/ShopPage/SideBox";
import Product from "../../components/pages/ShopPage/Product";
import {shopFeatures} from "../../data/shopFeatures";
import {useParams} from "react-router-dom";
import {increaseCounterBeloved} from "../../redux/reducers/counterBeloved";
import axios from "axios";

const CustomTabPanel = ({children, value, index, ...other}) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#122d40",
                    borderRadius: "15px"
                }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductPage = () => {

    const [numRate, setNumRate] = useState(0)
    const [someProductsList, setProductsList] = useState([])
    const [cartNumber, setCartNumber] = useState(1)
    const params = useParams();

    useEffect(() => {
        axios.get('https://json.xstack.ir/api/v1/products')
            .then(res => {
                setProductsList(res.data.data);
            })
    }, []);

    const thisProduct = someProductsList.find(item => item.id == params.productId)??{}

    const socialMediaIcon = [
        {icon: FacebookOutlinedIcon, title: "اشتراک گذاری در فیسبوک"},
        {icon: WhatsAppIcon, title: "اشتراک گذاری در واتساپ"},
        {icon: XIcon, title: "اشتراک گذاری در ایکس"},
        {icon: PinterestIcon, title: "اشتراک گذاری در پینترست"},
        {icon: EmailIcon, title: "اشتراک گذاری در ایمیل"},
        {icon: ContentCopyIcon, title: "کپی لینک کوتاه"},
    ]

    const dispatch = useDispatch()

    const decrementCartNumber = () => {
        if (cartNumber > 1) {
            setCartNumber(cartNumber - 1);
        }
    }
    const incrementCartNumber = () => {
        setCartNumber(cartNumber + 1)
    }

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Row rowSpacing={4} className={styles.pageWrapper}>
            <Col xs={12} height="50px"/>
            <Col xs={12}>
                <Row columnSpacing={4}>
                    <Col md={5.5}>
                        <div>
                            <img
                                width="100%"
                                src={thisProduct.image}
                                alt={thisProduct.name}
                                className={styles.productImg}
                            />
                        </div>
                    </Col>
                    <Col md={6.5}>
                        <Row rowSpacing={3}>
                            <Col xs={12}>
                                <Typography gutterBottom fontWeight="bold" variant="h4">{thisProduct.name}</Typography>
                            </Col>
                            <Col xs={12}>
                                <Rating name="read-only" value={3} readOnly/>
                            </Col>
                            <Col xs={12}>
                                <Typography fontWeight="bold" variant="h6" color="secondary">
                                    {thisProduct.price} تومان
                                </Typography>
                            </Col>
                            <Col xs={12}>
                                <Typography variant="body1" color="gray">
                                    {thisProduct.description}
                                </Typography>
                            </Col>
                            <Col xs={12} style={{display: "flex", alignItems: "flex-start", flexDirection: "column"}}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: "10px"
                                }}>
                                    <Button onClick={decrementCartNumber} color="secondary">-</Button>
                                    <div style={{
                                        border: "rgba(128, 128, 128, 0.4) solid 1px",
                                        padding: "5px 15px",
                                        borderRadius: "10px",
                                        margin: "0 5px"
                                    }}>{cartNumber}</div>
                                    <Button onClick={incrementCartNumber} color="secondary">+</Button>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        className={styles.cartShoppingButton}
                                        onClick={() => dispatch(increaseCartByAmount(cartNumber))}
                                        sx={{mr: '10px'}}
                                    >
                                        <FontAwesomeIcon style={{marginLeft: '10px'}} icon={faCartShopping}/>
                                        <Typography>افزودن به سبد خرید</Typography>
                                    </Button>
                                    <ProductOption
                                        iconVertical="top"
                                        iconHorizontal="center"
                                        textVertical="bottom"
                                        textHorizontal="center"
                                        iconName={faHeart}
                                        title='افزودن به علاقمندی ها'
                                        onClick={() => dispatch(increaseCounterBeloved())}
                                        style={{marginLeft: "10px"}}
                                    />
                                    <ProductOption
                                        iconVertical="top"
                                        iconHorizontal="center"
                                        textVertical="bottom"
                                        textHorizontal="center"
                                        iconName={faCodeCompare}
                                        title='افزودن به مقایسه'
                                    />
                                </div>
                            </Col>
                            <Col>
                                <Divider/>
                            </Col>
                            <Col style={{display: 'flex', flexDirection: "column"}}>
                                <div style={{display: 'flex', flexDirection: "row"}}>
                                    <Typography variant="body2"> تگ:&nbsp;</Typography>
                                    <Typography variant="body2"
                                                sx={{color: "rgba(128, 128, 128, 0.8)"}}>{thisProduct?.tag}</Typography>
                                </div>
                                <div style={{display: 'flex', flexDirection: "row", marginTop: "5px"}}>
                                    <Typography variant="body2"> دسته بندی:&nbsp;</Typography>
                                    <Typography variant="body2"
                                                sx={{color: "rgba(128, 128, 128, 0.8)"}}>{thisProduct?.category_id}</Typography>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <Divider/>
                            </Col>
                            <Col xs={12} style={{display: 'flex', flexDirection: "column"}}>
                                {
                                    shopFeatures.map((item) => (
                                        <Typography variant="body2" sx={{color: "rgba(128, 128, 128, 1)", mt: "5px"}}>
                                            &#10003; {item.title} {item.description}
                                        </Typography>
                                    ))
                                }
                            </Col>
                            <Col xs={12} sx={{display: "flex", alignItems: "center", justifyContent: "start"}}>
                                <div style={{
                                    width: "100%",
                                    backgroundColor: "#f1f2f6",
                                    borderRadius: "10rem",
                                    display: 'flex',
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    padding: "5px 15px",
                                    flexWrap: "wrap",
                                }}>
                                    <Typography style={{margin: "0 15px"}}>اشتراک گذاری:</Typography>
                                    {
                                        socialMediaIcon.map((item) => (
                                            <SocialMediaIcon icon={item.icon}/>
                                        ))
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <Box width="95%">
                    <Box width="100%" sx={{justifyContent: "center"}}>
                        <Tabs width="100%" value={value} classes={{scroller: styles.tabs}} onChange={handleChange}>
                            <Tab label="توضیحات" {...a11yProps(0)} />
                            <Tab label="نظرات" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Typography color="white.main">
                            سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه
                            برمی‌دارد یا به اصطلاح سلف سرویس است. در حدود ۷۵ تا ۹۰ درصد کالاهای این مغازه‌ها محصولات
                            غذایی هستند. اندازه سوپرمارکت‌ها معمولاً از خواربارفروشیهای سنتی بزرگترند و محصولات بیشتری
                            می‌فروشند ولی از هایپرمارکت‌ها و سوپرسنترها کوچکترند.
                        </Typography>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Row rowSpacing={4} style={{width: "100%", display: 'flex', alignItems: "start"}}>
                            <Col xs={12}>
                                <Typography variant="h4" color="white.main">۱ دیدگاه برای اسپری چند منظوره</Typography>
                            </Col>
                            <Col xs={12}>
                                <div style={{
                                    backgroundColor: "white",
                                    width: "97%",
                                    borderRadius: "10px",
                                    padding: "10px",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        <img src="/img/4001b4cb302a45af47747d07c1208745.png" alt="user"
                                             style={{borderRadius: "50%"}}/>
                                        <div style={{marginRight: "10px"}}>
                                            <Typography variant="h6" display="block">آناهیتا خسروی</Typography>
                                            <Typography
                                                variant="caption"
                                                padding="0 5px"
                                                sx={{
                                                    backgroundColor: "rgba(167,167,167,.15)",
                                                    borderRadius: "7px",
                                                    ml: "10px"
                                                }}
                                            >
                                                ۲۷ دی ۱۴۰۲
                                            </Typography>
                                            <div style={{marginTop: "10px"}}>
                                                <Rating value={3} readOnly/>
                                            </div>
                                        </div>
                                    </div>
                                    <Typography variant="body1" color="rgb(128, 128, 128)"
                                                sx={{mt: "10px", mb: "15px"}}>
                                        بسیار عالی، از حمایت صمیمانه و بهترین محصول شما بسیار متشکرم.
                                    </Typography>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <Typography color="white.main">دیدگاه خود را بنویسید </Typography>
                                <Typography color="white.main">نشانی ایمیل شما منتشر نخواهد شد</Typography>
                            </Col>
                            <Col xs={12}>
                                <Row spacing={4} sx={{width: "100%", display: "flex",}}>
                                    <Col xs={12}>
                                        <Typography color="white.main">امتیاز شما *</Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={numRate}
                                            onChange={(event, newValue) => {
                                                setNumRate(newValue);
                                            }}
                                            sx={{
                                                width: "fit-content",
                                                "& .MuiRating-iconEmpty": {
                                                    color: "white.main"
                                                }
                                            }}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="دیدگاه شما"
                                            color="white"
                                            focused
                                            fullWidth
                                            multiline
                                            rows={4}
                                            sx={{
                                                marginTop: "20px",
                                                "& .MuiInputBase-input": {
                                                    color: "white.main",
                                                },
                                            }}
                                        />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="نام"
                                            color="white"
                                            focused
                                            fullWidth
                                            sx={{
                                                "& .MuiInputBase-input": {
                                                    color: "white.main",
                                                },
                                            }}
                                        />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="ایمیل"
                                            color="white"
                                            focused
                                            fullWidth
                                            sx={{
                                                "& .MuiInputBase-input": {
                                                    color: "white.main",
                                                },
                                            }}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <FormControlLabel
                                            required
                                            control={<Checkbox color="secondary"/>}
                                            label="ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی می‌نویسم."
                                            color="secondary"
                                            sx={{
                                                color: "white.main",
                                                "& .muirtl-i4bv87-MuiSvgIcon-root": {
                                                    color: "white.main"
                                                }
                                            }}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <Button sx={{width: "fit-content", padding: "10px 40px"}} variant="contained"
                                                color="secondary">ثبت</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CustomTabPanel>
                </Box>
            </Col>
            <Col xs={12}>
                <SideBox title="محصولات مرتبط">
                    <Row spacing={4}>
                        {
                            someProductsList.slice(0, 3).map((item) => (
                                <Col xs={12} md={4}>
                                    <Product {...item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </SideBox>
            </Col>
            <Col xs={12}>
                <SideBox title="محصولات پرفروش">
                    <Row spacing={4}>
                        {
                            someProductsList.slice(0, 3).map((item) => (
                                <Col xs={12} md={4}>
                                    <Product {...item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </SideBox>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

export default ProductPage;