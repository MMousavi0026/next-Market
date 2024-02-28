import React from 'react';
import Styles from "./footer.module.css";
import LinkIcon from "@mui/icons-material/Link";

const FooterLink = ({title}) => {
    return (
        <div className={Styles.footerLink}>
            <LinkIcon fontSize='20px' className={Styles.linkIcon}/>
            <span className={Styles.footerLinkText}>{title}</span>
        </div>
    );
};

export default FooterLink;