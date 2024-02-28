import React, {useEffect, useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderIcon from '@mui/icons-material/Folder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Col from "../../components/mui/Grid/Col";
import {Breadcrumbs, Chip, TextField} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Row from "../../components/mui/Grid/Row";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import SideBox from "../../components/pages/ShopPage/SideBox";
import {tags} from "../../data/tags";
import HomeIcon from "@mui/icons-material/Home";
import styles from "../NewsPage/NewsPage.module.css";
import {useParams} from "react-router-dom";
import axios from "axios";

const TheNewsPage = () => {
    const [thisNewsData, setThisNews] = useState([])
    const params = useParams();

    useEffect(() => {
        axios.get('https://json.xstack.ir/api/v1/posts')
            .then(res => {
                setThisNews(res.data.data)
            })
    }, []);

    const thisNews = thisNewsData.find(item => item.id == params.newsId)??{}

    const breadcrumbs = [
        <Typography component={Link} style={{display: 'flex'}} underline="hover" key="1" color="inherit" to="/">
            <HomeIcon style={{fontSize:'18px'}}/>
        </Typography>,
        <Typography component={Link} fontSize={"18px"} underline="hover" key="2" color="inherit.main" to="/news">
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
                                <img src={thisNews?.imgSrc} alt={thisNews?.title} width="100%" style={{borderRadius:"20px"}}/>
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
                                            <Link to="#">
                                                <Button variant="contained" color="white" sx={{ml:'10px', mb:'10px'}}>{item}</Button>
                                            </Link>
                                        ))
                                    }
                                </SideBox>
                            </Col>
                            <Col xs={12}>
                                <SideBox title="تبلیغات ساده">
                                    <Link to="#" >
                                        <img src="/img/ads.jpg" width="100%" alt="تبلیغات" style={{borderRadius:"20px", marginTop:'15px'}}/>
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

export default TheNewsPage;