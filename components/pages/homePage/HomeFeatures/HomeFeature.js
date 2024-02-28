import React from 'react';
import Image from "next/image";
import styles from "./HomeFeatures.module.css";


const HomeFeature = ({imageSrc, title, description}) => {
    return (
        <div className={styles.floatBoxItem}>
            <Image src={imageSrc} alt={title} className={styles.floatBoxItemImg} width={100} height={100}/>
            <div>
                <span className={styles.title}>{title}</span>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    );
};

export default HomeFeature;