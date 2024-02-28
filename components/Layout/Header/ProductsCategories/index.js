import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "./productsCategories.module.css";

const ProductsCategories = ({imgSrc, title, titleColor, discount, style, href}) => {
    return (
        <Button component={Link} href={href} className={styles.item} style={style}>
            <Image className={styles.fish} alt='item' src={imgSrc} width={100} height={100}/>
            <span style={{fontSize: '20px', paddingTop: '17px', color: titleColor}}>{title}</span>
            <span style={{fontSize: '14px', paddingTop: '17px', color: "#01e281"}}>{discount}</span>
        </Button>
    );
};

export default ProductsCategories;