import React from 'react';
import Image from "next/image";
import Styles from "./footer.module.css";

const SocialMediaIcon = ({imgSrc}) => {
    return (
        <div className={Styles.socialMediaIcon}>
            <Image width={40} height={40} style={{padding: '10px', width: '40px', height: 'auto'}} alt='logo' src={imgSrc}/>
        </div>
    );
};

export default SocialMediaIcon;