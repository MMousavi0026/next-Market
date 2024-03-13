import React from 'react';
import Image from "next/image";
import SocialMediaIcon from "./SocialMediaIcon";
import FooterLink from "./FooterLink";
import Row from "../../mui/Grid/Row";
import Col from "../../mui/Grid/Col";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {InputBase, styled} from "@mui/material";
import dynamic from "next/dynamic";
import EitaaPic from "@/public/img/eitaa-icon-white2.png";
import InstagramPic from "@/public/img/instagram.png";
import BalePic from "@/public/img/bale-icon.png";
import styles from './footer.module.css'
import {Instagram} from "@mui/icons-material";

const DraftsIcon = dynamic(() => import("@mui/icons-material/Drafts"), {ssr: false})

const Footer = () => {

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '20vw',
                '&:focus': {
                    width: '23vw',
                },
            },
            [theme.breakpoints.up('xl')]: {
                width: '15vw',
                '&:focus': {
                    width: '20vw',
                },
            },
        },
    }));

    return (
        <Row className={styles.footerWrapper}>
            <Row className={styles.floatBox}>
                <Col xs={12} md={6} className={styles.floatBoxItem}>
                    <div>
                        <Typography  fontSize='2rem' color="white.main">در</Typography>
                        <Typography  fontSize='2rem' color="#01e281"> خبرنامه ویژه </Typography>
                        <Typography  fontSize='2rem' color="white.main">ما عضو شوید</Typography>
                    </div>
                </Col>
                <Col xs={12} md={6} className={styles.inputWrapper}>
                    <div className={styles.search}>
                        <StyledInputBase
                            placeholder="ایمیل خود را وارد کنید"
                            inputProps={{'aria-label': 'search'}}
                        />
                        <Button variant="contained" color="secondary" className={styles.button1 +" "+ styles.searchIcon}>
                            <div className={styles.button1Text}>
                                <DraftsIcon color="primary" fontSize='20px' style={{marginLeft: '8px'}}/>
                            </div>
                            <Typography  fontSize='20px' className={styles.button1Text}>عضویت</Typography>
                        </Button>
                    </div>
                </Col>
            </Row>
            <div className={styles.footerItemsWrapper}>
                <Row sx={{height:'80px'}}/>
                <Row spacing={4} className={styles.footerItems}>
                    <Col xs={12} md={4} className={styles.footerItemWrapper}>
                        <div className={styles.footerItem}>
                            <div className={styles.descriptionWrapper}>
                                <Image width={300} height={300} src="/img/logo-sm.png" alt="logo" className={styles.img}/>
                                <Typography className={styles.description} >سوپرمارکت شکلی از خواربارفروشی ولی بزرگتر از آن است که مشتری خودش محصولات را از قفسه برمی‌دارد یا به اصطلاح سلف سرویس است.</Typography>
                                <div className={styles.socialMediaIcons}>
                                    <SocialMediaIcon imgSrc={EitaaPic}/>
                                    <SocialMediaIcon imgSrc={InstagramPic}/>
                                    <SocialMediaIcon imgSrc={BalePic}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className={styles.footerItemWrapper}>
                        <div className={styles.footerItem}>
                            <div className={styles.linksWrapper}>
                                <Typography  className={styles.linksTitle}>لینک های مفید</Typography>
                                <div className={styles.links}>
                                    <FooterLink title="مرکز پشتیبانی"/>
                                    <FooterLink title="مرکز پشتیبانی"/>
                                    <FooterLink title="مرکز پشتیبانی"/>
                                    <FooterLink title="مرکز پشتیبانی"/>
                                    <FooterLink title="مرکز پشتیبانی"/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className={styles.footerItemWrapper}>
                        <div className={styles.footerItem}>
                            <div className={styles.cooperationWrapper}>
                                <div className={styles.cooperationTitles}>
                                    <Typography varianr="span" fontSize='22px' textAlign='center' color='white.main'>آیا علاقمند به داشتن </Typography>
                                    <Typography varianr="span" fontSize='22px' textAlign='center' color='#01e281'>سوپر مارکت هستید؟</Typography>
                                </div>
                                <Typography varianr="span" fontSize='17px' textAlign='center' color='inherit.main' lineHeight='35px'>
                                    اندازه سوپرمارکت‌ها معمولاً از خواربارفروشیهای سنتی بزرگترند و محصولات بیشتری می‌فروشند.
                                </Typography>
                                <Button className={styles.button2}>
                                    <Typography varianr="span" fontSize='16px' className={styles.button2Text}>فروشنده شوید</Typography>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row sx={{height:"32px"}}/>
                <Row sx={{height:"32px"}}/>
                <Row spacing={3} className={styles.caption}>
                    <Col xs={12} md={6} className={styles.captionRWrapper}>
                        <div className={styles.captionR}>
                            <Typography component="div" className={styles.captionTitle}>© کپی رایت ۲۰۲۳ طراحی توسط ماهان موسوی</Typography>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={styles.captionLWrapper}>
                        <div className={styles.captionL}>
                            <Image width={250} height={250} className={styles.img} src="/img/f1.png" alt=""/>
                        </div>
                    </Col>
                </Row>
            </div>
        </Row>
    );
};

export default Footer;