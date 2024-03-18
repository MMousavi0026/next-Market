import React from 'react';
import styles from "./ContectUs.module.css";
import Row from "../../components/mui/Grid/Row";
import {
    Breadcrumbs,
    FormControl,
    FormGroup,
    FormLabel,
    InputLabel,
    MenuItem,
    paperClasses, Select,
    TextField
} from "@mui/material";
import Col from "../../components/mui/Grid/Col";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

const NavigateBeforeIcon = dynamic(() => import('@mui/icons-material/NavigateBefore'), {ssr: false})
const HomeIcon = dynamic(() => import('@mui/icons-material/Home'), {ssr: false})
const EmailIcon = dynamic(() => import('@mui/icons-material/Email'), {ssr: false})
const CallIcon = dynamic(() => import('@mui/icons-material/Call'), {ssr: false})
const LocationOnIcon = dynamic(() => import('@mui/icons-material/LocationOn'), {ssr: false})


const breadcrumbs = [
    <Link style={{display: 'flex'}} underline="hover" key="1" color="inherit" to="/">
        <HomeIcon style={{fontSize:'18px'}}/>
    </Link>,
    <Typography fontSize={"18px"} key="2" color="text.primary">
        تماس با ما
    </Typography>,
];

const ContactUsPage = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Row rowSpacing={4} className={styles.wrapper}>
            <Col xs={12} />
            <Col xs={12} width="100%" className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon sx={{fontSize: '2rem'}} />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12} width="100%">
                <Row spacing={4}>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <EmailIcon fontSize='40' className={styles.icon} color="white.main"/>
                            <Typography fontSize='2.4rem' className={styles.featureTitle} variant="h5" marginTop="10px">پشتیبانی</Typography>
                            <Link href="mailto:support@yoursite.com" sx={{cursor:"pointer", textDecoration:"none", fontSize: '1.4rem'}}>support@yoursite.com</Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <CallIcon fontSize='40' className={styles.icon} color="white.main"/>
                            <Typography fontSize='2.4rem' className={styles.featureTitle} variant="h5" marginTop="10px">تلفن تماس</Typography>
                            <Link href="tel:009822334455" sx={{textDecoration:"none", fontSize: '1.4rem'}}>۹۸۲۲۳۳۴۴۵۵+</Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <LocationOnIcon fontSize='40' className={styles.icon} color="white.main"/>
                            <Typography fontSize='2.4rem' className={styles.featureTitle} variant="h5" marginTop="10px">آدرس</Typography>
                            <Typography fontSize='1.6rem' sx={{cursor:"pointer", textDecoration:"none"}}>تهران، خیابان آزادی</Typography>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={10} sx={{mt: "32px", ml: "24px"}}>
                <Row spacing={3} style={{backgroundColor:"#122d40", borderRadius:"30px", padding:"0 0 32px 32px", boxShadow:'0 10px 15px 0 rgba(0, 0, 0, 0.4)'}}>
                    <Col xs={12}>
                        <div>
                            <Typography fontSize='3rem' variant="h4" textAlign="center" color="white.main" marginBottom={5} >با ما در ارتباط باشید</Typography>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="نام"
                            type="text"
                            variant="outlined"
                            color="white"
                            focused
                            sx={{ width: "100%",
                                "& .MuiInputBase-input": {
                                    color: "white.main",
                                    fontSize: '1.6rem'
                                },
                                "& .MuiInputLabel-formControl": {
                                    fontSize: '1.6rem'
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    fontSize: '1.6rem'
                                },
                            }}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="ایمیل"
                            type="text"
                            variant="outlined"
                            color="white"
                            focused
                            sx={{ width: "100%",
                                "& .MuiInputBase-input": {
                                    color: "white.main",
                                    fontSize: '1.6rem'
                                },
                                "& .MuiInputLabel-formControl": {
                                    fontSize: '1.6rem'
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    fontSize: '1.6rem'
                                },
                            }}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="موضوع"
                            type="text"
                            variant="outlined"
                            color="white"
                            focused
                            sx={{ width: "100%",
                                "& .MuiInputBase-input": {
                                    color: "white.main",
                                    fontSize: '1.6rem'
                                },
                                "& .MuiInputLabel-formControl": {
                                    fontSize: '1.6rem'
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    fontSize: '1.6rem'
                                },
                            }}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width:'100%'}}>
                            <FormControl style={{ width:"100%" }}>
                                <InputLabel color="white" id="demo-simple-select-label" sx={{color: "white.main"}}>دپارتمان</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="دپارتمان"
                                    onChange={handleChange}
                                    color="white"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white.main",
                                            borderWidth: "2px",
                                            fontSize: '1.6rem'
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "white.main",
                                            fontSize: '1.6rem'
                                        },
                                        "& .MuiSelect-icon": {
                                            color: "white.main",
                                            fontSize: '1.6rem',
                                        },
                                        "& .MuiInputLabel-outlined": {
                                            color: "white.main !important",
                                            fontSize: '1.6rem',
                                        },
                                        "& .MuiInputLabel-formControl": {
                                            fontSize: '1.6rem'
                                        },
                                    }}
                                >
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={10}>فروش</MenuItem>
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={20}>مشتری داری</MenuItem>
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={30}>پشتیبانی</MenuItem>
                                    <MenuItem sx={{fontSize: '1.6rem'}} value={30}>سایر</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <TextField
                            required
                            id="outlined-required"
                            label="دیدگاه شما"
                            variant="outlined"
                            color="white"
                            fullWidth
                            multiline
                            focused
                            rows={4}
                            sx={{
                                "& .MuiInputBase-input": {
                                    color: "white.main",
                                    fontSize: '1.6rem'
                                },
                                "& .MuiInputLabel-formControl": {
                                    fontSize: '1.6rem'
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    fontSize: '1.6rem'
                                },
                            }}
                        />
                    </Col>
                    <Col xs={12}>
                        <Button variant="contained" color="secondary" sx={{padding:"10px 30px"}} >
                            <Typography fontSize={20}>ارسال</Typography>
                        </Button>
                    </Col>
                </Row>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", width:'100%', marginBottom:"20px"}}>
                </div>
            </Col>
            <Col xs={12}/>
        </Row>
    );
};

ContactUsPage.getLayout = function (page) {
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default ContactUsPage;