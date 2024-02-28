import React from 'react';
import Styles from "./footer.module.css";

const SocialMediaIcon = ({imgSrc}) => {
    return (
        <div className={Styles.socialMediaIcon}>
            <img style={{width: '22px', padding: '10px'}} alt='logo' src={imgSrc}/>
        </div>
    );
};

export default SocialMediaIcon;