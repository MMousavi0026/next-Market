import React from 'react';
import Styles from "./footer.module.css";
import Image from "next/image";

const SocialMediaIcon = ({imgSrc}) => {
    return (
        <div className={Styles.socialMediaIcon}>
            <Image width={22} height={22} style={{padding: '10px'}} alt='logo' src={imgSrc}/>
        </div>
    );
};

export default SocialMediaIcon;