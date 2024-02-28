import React, {useState} from 'react';
import Badge from "@mui/material/Badge";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderIcon from '@mui/icons-material/Folder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LinkIcon from '@mui/icons-material/Link';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SearchIcon from '@mui/icons-material/Search';
import {NavLink, Outlet} from 'react-router-dom';
import NavItemsOff from "./NavItemsOff";
import NavItemsAcces from "./NavItemsAcces";
import {useSelector} from "react-redux";
import {IconButton} from "@mui/material";
import Button from "@mui/material/Button";
import styles from './SiteHeader.module.css'

const SiteHeader = () => {

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header1}>
                <div className={styles.header11}>
                    <div className={styles.icons}>
                        <div className={styles.barsWrapper}>
                            <button className={styles.bars}>
                                <MenuIcon fontSize='20' className={styles.icon}/>
                            </button>
                            <div className={styles.menubarWrapper}>
                                <ul className={styles.menubar}>
                                    <li className={styles.menuLi}>
                                        <NavLink to='/products' className={styles.menuItems}>
                                            <ShoppingCartIcon fontSize={'20'} className={styles.menuItem} style={{color:"white", fontSize:"21px", marginLeft:"6px"}}/>
                                            <span className={styles.menuItem} style={{fontSize:"18px", color:"white"}}>محصولات جدید</span>
                                        </NavLink>
                                    </li>
                                    <li className={styles.menuLi} style={{borderTop: '1px solid gray'}}>
                                        <a className={styles.menuItems}>
                                            <span className={styles.menuItem} style={{fontSize:"18px", color:"white"}}>پرفروش ترین ها</span>
                                        </a>
                                    </li>
                                    <li className={styles.menuLi} style={{borderTop: '1px solid gray'}}>
                                        <a className={styles.menuItems}>
                                            <ShoppingCartIcon fontSize={'20'} style={{color:"white", fontSize:"21px", marginLeft:"6px"}}/>
                                            <span className={styles.menuItem} style={{fontSize:"18px", color:"white"}}>تخفیفات ویژه</span>
                                            <ArrowDropDownIcon fontSize={'20'} className={styles.menuItem} style={{fontSize:"21px", color:"white", marginRight:"6px"}} />
                                        </a>
                                            <div className={styles.offItemsA}>
                                                <div className={styles.offItemA} style={{textAlign: 'center', marginBottom:'10px'}}>
                                                    <img className={styles.fish} alt='fish' src="/img/s1.png"/>
                                                    <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>ماهی<br/> و آبزیان</span>
                                                    <span style={{fontSize:'14px', color:'#01e281'}}>۲۰٪ تخفیف</span>
                                                </div>
                                                <div className={styles.offItemA} style={{textAlign: 'center', marginBottom:'10px'}}>
                                                    <img className={styles.fish} alt='fish' src="/img/s2.png"/>
                                                    <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>میوه و<br/>سبزیجات</span>
                                                    <span style={{fontSize:'14px', color:'#01e281'}}>۴۰٪ تخفیف</span>
                                                </div>
                                                <div className={styles.offItemA} style={{textAlign: 'center', marginBottom:'10px'}}>
                                                    <img className={styles.fish} alt='fish' src="/img/s3.png"/>
                                                    <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>نان و<br/>غلات</span>
                                                    <span style={{fontSize:'14px', color:'#01e281'}}>۱۵٪ تخفیف</span>
                                                </div>
                                                <div className={styles.offItemA} style={{textAlign: 'center', marginBottom:'10px'}}>
                                                    <img className={styles.fish} alt='fish' src="/img/s4.png"/>
                                                    <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>لبنیات و<br/>پروتئین</span>
                                                    <span style={{fontSize:'14px', color:'#01e281'}}>۵۰٪ تخفیف</span>
                                                </div>
                                                <div className={styles.offItemA} style={{textAlign: 'center', marginBottom:'10px'}}>
                                                    <img className={styles.fish} alt='fish' src="/img/s5.png"/>
                                                    <span style={{fontSize:'20px', padding:'17px 0', color:'white'}}>گوشت<br/>و مرغ</span>
                                                    <span style={{fontSize:'14px', color:'#01e281'}}>۴۵٪ تخفیف</span>
                                                </div>
                                            </div>
                                    </li>
                                    <li className={styles.menuLi} style={{borderTop: '1px solid gray'}}>
                                        <a className={styles.menuItems+" "+styles.menuDastresti}>
                                            <span className={styles.menuItem} style={{fontSize:"18px"}}>دسترسی سریع</span>
                                            <ArrowDropDownIcon fontSize='20' className={styles.menuItem} style={{fontSize:"21px", marginRight:"6px"}} />
                                        </a>
                                            <ul className={styles.quickAccessA+" "+styles.dastresi} style={{paddingBottom:'10px', paddingTop:'10px'}}>
                                                <li className={styles.quickAccessColumnA}>
                                                    <a>
                                                        <span style={{fontSize:'1.5vw', color:'white', paddingBottom:'10px'}}>دسته بندی</span>
                                                        <ArrowDropDownIcon fontSize='20' className={styles.menuItem} style={{fontSize:"1.5vw", color:"white", marginRight:"6px"}}/>
                                                    </a>
                                                        <ul className={styles.quickAccessColumnA}>
                                                            <li className={styles.quickAccessItem}>
                                                                <FolderIcon fontSize='20' style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}/>
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>سوپر مارکت</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <FolderIcon fontSize='20' style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>مرغ و ماهی</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <LocalOfferIcon fontSize='20' style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}  />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>سبزیجات</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <FolderIcon fontSize='20' style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>لبنیات</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <FolderIcon fontSize='20' style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>نظافت و شستشو</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <FolderIcon fontSize='20' style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>برچسب ها</span>
                                                            </li>
                                                        </ul>
                                                </li>
                                                <li className={styles.quickAccessColumnA} style={{borderRight:'1px solid gray'}}>
                                                    <a>
                                                        <span style={{fontSize:'1.5vw', color:'white', paddingBottom:'10px'}}>برچسب ها</span>
                                                        <ArrowDropDownIcon fontSize={'20'} className={styles.menuItem} style={{fontSize:"1.5vw", color:"white", marginRight:"6px"}}/>
                                                    </a>
                                                        <ul className={styles.quickAccessColumnA}>
                                                            <li className={styles.quickAccessItem}>
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>پاستا</span>
                                                                <LocalOfferIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}  />
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <LocalOfferIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}  />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>سس</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <LocalOfferIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}  />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>سبزیجات</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <LocalOfferIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}  />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>گوشت استیک</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <LocalOfferIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}  />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>برگر</span>
                                                            </li>
                                                            <li className={styles.quickAccessItem}>
                                                                <LocalOfferIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}}  />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>اسپری</span>
                                                            </li>
                                                        </ul>
                                                </li>
                                                <li className={styles.quickAccessColumnA} style={{borderRight:'1px solid gray'}}>
                                                    <a>
                                                        <span style={{fontSize:'1.5vw', color:'white', paddingBottom:'10px'}}>دسترسی سریع</span>
                                                        <ArrowDropDownIcon fontSize={'20'} className={styles.menuItem} style={{fontSize:"1.5vw", color:"white", marginRight:"6px"}}/>
                                                    </a>
                                                        <ul className={styles.quickAccessColumnA}>
                                                            <div className={styles.quickAccessItem}>
                                                                <LinkIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>درباره ما</span>
                                                            </div>
                                                            <div className={styles.quickAccessItem}>
                                                                <LinkIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>سوالات متداول</span>
                                                            </div>
                                                            <div className={styles.quickAccessItem}>
                                                                <LinkIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>حساب کاربری من</span>
                                                            </div>
                                                            <div className={styles.quickAccessItem}>
                                                                <LinkIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>سفارشات</span>
                                                            </div>
                                                            <div className={styles.quickAccessItem}>
                                                                <LinkIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>دانلود ها</span>
                                                            </div>
                                                            <div className={styles.quickAccessItem}>
                                                                <LinkIcon fontSize={'20'} style={{fontSize:'1.2vw', color:'gray', marginLeft:'7px'}} />
                                                                <span style={{fontSize:'1.2vw', color:'white'}}>فراموشی رمز عبور</span>
                                                            </div>
                                                        </ul>
                                                </li>
                                            </ul>
                                    </li>
                                    <li className={styles.menuLi} style={{borderTop: '1px solid gray'}}>
                                        <a className={styles.menuItems}>
                                            <span className={styles.menuItem} style={{fontSize:"18px", color:"white"}}>اخبار</span>
                                        </a>
                                    </li>
                                    <li className={styles.menuLi} style={{borderTop: '1px solid gray', borderBottom: '1px solid gray'}}>
                                        <a className={styles.menuItems}>
                                            <span className={styles.menuItem} style={{fontSize:"18px", color:"white"}}>تماس با ما</span>
                                        </a>
                                    </li>
                                    <li className={styles.menuLi+" "+styles.menuCaption}>
                                        <section style={{display:"flex", flexDirection:"row", justifyContent:"space-around", width: "120px" }}>
                                            <section className={styles.socialMediaIconWrapper}>
                                                <img className={styles.socialMediaIcon} alt='logo' src="/img/eitaa-icon-white2.png" />
                                            </section>
                                            <section className={styles.socialMediaIconWrapper}>
                                                <img className={styles.socialMediaIcon} alt='logo' src="/img/instagram.png" />
                                            </section>
                                        </section>
                                        <section style={{color:"white", fontSize:"18px", marginTop:"20px"}}>
                                            <span>کپی رایت ۲۰۲۳</span>
                                        </section>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navMenuWrapper}>
                <nav className={styles.navMenu}>
                    <div className={styles.navbarWrapper}>
                        <ul className={styles.navbar}>
                            <li>
                                <button className={styles.navItems}>
                                    <ShoppingCartIcon fontSize='20px' style={{fontSize:"21px", marginLeft:"6px"}}/>
                                    <span style={{fontSize:"1.5vw"}}>محصولات جدید</span>
                                </button>
                            </li>
                            <li>
                                <button className={styles.navItems}>
                                    <span style={{fontSize:"1.5vw"}}>پرفروش ترین ها</span>
                                </button>
                            </li>
                            <li><NavItemsOff/></li>
                            <li><NavItemsAcces/></li>
                            <li>
                                <button className={styles.navItems}>
                                    <span style={{fontSize:"1.5vw"}}>اخبار</span>
                                </button>
                            </li>
                            <li>
                                <button className={styles.navItems}>
                                    <span style={{fontSize:"1.5vw"}}>تماس با ما</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.dayOffWrapper}>
                        <Button className={styles.dayOff} style={{fontSize:"1.5vw"}}>
                            <CardGiftcardIcon fontSize='20' className={styles.off}/>
                            تخفیفات روزانه
                        </Button>
                    </div>
                </nav>
            </div>
            <Outlet/>
        </div>
    );
};

export default SiteHeader;