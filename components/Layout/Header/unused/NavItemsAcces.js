import React, {useState} from 'react';
import styles from "./SiteHeader.module.css";
import MenuButtonAcces from "./MenuButtonAcces";
import FolderIcon from "@mui/icons-material/Folder";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LinkIcon from "@mui/icons-material/Link";

const NavItemsAcces = () => {
    const [open, setOpen] = useState(false);

    return (
        <section>
            <MenuButtonAcces
                open={open}
                title="دسترسی سریع"
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                <div className={styles.quickAccess}>
                    <div className={styles.quickAccessColumn}>
                        <div style={{height:'fit-content'}}>
                            <span style={{fontSize: '1.5vw', color: '#01e281', paddingBottom: '10px'}}>دسته بندی</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <FolderIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>سوپر مارکت</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <FolderIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>مرغ و ماهی</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LocalOfferIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>سبزیجات</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <FolderIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>لبنیات</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <FolderIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>نظافت و شستشو</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <FolderIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>برچسب ها</span>
                        </div>
                    </div>
                    <div className={styles.quickAccessColumn} style={{borderRight: '1px solid gray'}}>
                        <div>
                            <span style={{fontSize: '1.5vw', color: '#01e281', paddingBottom: '10px'}}>برچسب ها</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LocalOfferIcon fontSize={'20'}
                                            style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>پاستا</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LocalOfferIcon fontSize={'20'}
                                            style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>سس</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LocalOfferIcon fontSize={'20'}
                                            style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>سبزیجات</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LocalOfferIcon fontSize={'20'}
                                            style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>گوشت استیک</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LocalOfferIcon fontSize={'20'}
                                            style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>برگر</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LocalOfferIcon fontSize={'20'}
                                            style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>اسپری</span>
                        </div>
                    </div>
                    <div className={styles.quickAccessColumn} style={{borderRight: '1px solid gray'}}>
                        <div>
                            <span
                                style={{fontSize: '1.5vw', color: '#01e281', paddingBottom: '10px'}}>دسترسی سریع</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LinkIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>درباره ما</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LinkIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>سوالات متداول</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LinkIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>حساب کاربری من</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LinkIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>سفارشات</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LinkIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>دانلود ها</span>
                        </div>
                        <div className={styles.quickAccessItem}>
                            <LinkIcon fontSize={'20'} style={{fontSize: '1.2vw', color: 'gray', marginLeft: '7px'}}/>
                            <span style={{fontSize: '1.2vw', color: 'white'}}>فراموشی رمز عبور</span>
                        </div>
                    </div>
                </div>
            </MenuButtonAcces>
        </section>
    );
};

export default NavItemsAcces;