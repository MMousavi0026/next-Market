import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "./productsCategories.module.css";
import Typography from "@mui/material/Typography";

const ProductsCategories = ({imgSrc, title, titleColor, discount, style, href}) => {
    return (
        <Button component={Link} href={href} className={styles.item} sx={style}>
            <Image className={styles.fish} alt='item' src={imgSrc} width={100} height={100}/>
            <Typography fontSize='2.2rem' color={titleColor} className={'pt-10'}>{title}</Typography>
            <Typography fontSize='1.8rem' color='secondary' className={'pt-10'}>{discount}</Typography>
        </Button>
    );
};

export default ProductsCategories;