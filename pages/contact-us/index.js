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
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Col from "../../components/mui/Grid/Col";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from "@mui/material/Button";
import Layout from "@/components/Layout";

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
            <Col xs={12} width="100%" className={styles.breadcrumbs}>
                <Breadcrumbs separator={<NavigateBeforeIcon fontSize="16px" />} aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Col>
            <Col xs={12} width="100%">
                <Row spacing={4}>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <EmailIcon className={styles.icon} color="white.main"/>
                            <Typography className={styles.featureTitle} variant="h5" marginTop="10px">پشتیبانی</Typography>
                            <Link href="mailto:support@yoursite.com" sx={{cursor:"pointer", textDecoration:"none"}}>support@yoursite.com</Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <CallIcon className={styles.icon} color="white.main"/>
                            <Typography className={styles.featureTitle} variant="h5" marginTop="10px">تلفن تماس</Typography>
                            <Link href="tel:009822334455" sx={{textDecoration:"none"}}>۹۸۲۲۳۳۴۴۵۵+</Link>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <div className={styles.feature} style={{cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <LocationOnIcon className={styles.icon} color="white.main"/>
                            <Typography className={styles.featureTitle} variant="h5" marginTop="10px">آدرس</Typography>
                            <Typography sx={{cursor:"pointer", textDecoration:"none"}}>تهران، خیابان آزادی</Typography>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={10} sx={{mt: "32px", ml: "24px"}}>
                <Row spacing={3} style={{backgroundColor:"#122d40", borderRadius:"30px", padding:"0 0 32px 32px", boxShadow:'0 10px 15px 0 rgba(0, 0, 0, 0.4)'}}>
                    <Col xs={12}>
                        <div>
                            <Typography variant="h4" textAlign="center" color="white.main" marginBottom={5} >با ما در ارتباط باشید</Typography>
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
                                            borderWidth: "2px"
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "white.main",
                                        },
                                        "& .MuiSelect-icon": {
                                            color: "white.main"
                                        },
                                        "& .MuiInputLabel-outlined": {
                                            color: "white.main !important"
                                        },
                                    }}
                                >
                                    <MenuItem value={10}>فروش</MenuItem>
                                    <MenuItem value={20}>مشتری داری</MenuItem>
                                    <MenuItem value={30}>پشتیبانی</MenuItem>
                                    <MenuItem value={30}>سایر</MenuItem>
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