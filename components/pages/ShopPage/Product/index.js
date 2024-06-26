import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {increaseCounterCart} from "@/redux/reducers/counterCart";
import {increaseCounterBeloved} from "@/redux/reducers/counterBeloved";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardContent, CardMedia, IconButton} from "@mui/material";
import ProductOption from "./ProductOption";
import dynamic from "next/dynamic";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import styles from './Product.module.css';
import Image from "next/image";

const CloseIcon = dynamic(() => import('@mui/icons-material/Close'), {ssr: false})

const Product = ({ image, name, price, href, closeIcon, }) => {

    const [, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const dispatch = useDispatch()

    return (
        <div className={styles.product}>
            {
                closeIcon ?
                    <div className={styles.closeIconWrapper}>
                        <IconButton color="error" className={styles.closeIcon+" "+styles.button}>
                            <CloseIcon sx={{fontSize: '2.6rem'}} color="error"/>
                        </IconButton>
                    </div>
                : null
            }
            <Card component={Link} href={href} sx={{width: '100%', borderRadius: 5}}>
                <CardActionArea style={{height: '100%', paddingBottom: 40, display: 'grid', alignItems: 'flex-start'}}>
                    <CardMedia
                    >
                        <Image
                            src={image}
                            alt={name}
                            width={350}
                            height={350}
                            style={{objectFit: 'cover', objectPosition: "right", minHeight: 250, width: 'auto'}}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography fontSize='2rem' gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography fontSize='1.6rem' variant="body2" color="text.secondary">
                            {price} تومان
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className={styles.productOption}>
                    <ProductOption
                        iconVertical="center"
                        iconHorizontal="right"
                        textVertical="center"
                        textHorizontal="left"
                        iconName={faHeart}
                        title='افزودن به علاقمندی ها'
                        onClick={() => dispatch(increaseCounterBeloved())}
                    />
                    <ProductOption
                        iconVertical="center"
                        iconHorizontal="right"
                        textVertical="center"
                        textHorizontal="left"
                        iconName={faCodeCompare}
                        title='افزودن به مقایسه'
                    />
                    <ProductOption
                        iconVertical="center"
                        iconHorizontal="right"
                        textVertical="center"
                        textHorizontal="left"
                        iconName={faMagnifyingGlass}
                        title='نمایش سریع'
                    />
                </div>
            </Card>
            <Button
                variant="contained"
                color="secondary"
                className={styles.button1+" "+styles.button}
                onClick={ () =>{
                    dispatch(increaseCounterCart())
                    handleClickOpen()
                }}
            >
                <FontAwesomeIcon className={styles.button1Text} style={{marginLeft: '10px'}} icon={faCartShopping}/>
                <Typography className={styles.button1Text}>افزودن به سبد خرید</Typography>
            </Button>
        </div>
    );
};

export default Product;