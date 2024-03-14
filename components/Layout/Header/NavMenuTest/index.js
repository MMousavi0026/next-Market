import React from 'react';
import styles from "@/components/Layout/Header/NavMenu/NMenu.module.css";
import CardGiftCardIcon from "@mui/icons-material/CardGiftcard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const NavMenuTest = () => {
    return (
        <div className={styles.navAppBar+' '+styles.navToolbar}>
            <div>
                <ul className={styles.navList}>
                    <Link href="/">صفحه اصلی</Link>
                    <Link href="/">ورود / ثبت نام</Link>
                    <Link href="/">همه محصولات</Link>
                    <Link href="/">تخفیفات ویژه</Link>
                    <Link href="/">دسترسی سریع</Link>
                    <Link href="/">اخبار</Link>
                    <Link href="/">تماس با ما</Link>
                </ul>
            </div>
            <div>
                <Button variant="contained" className={styles.giftButton}>
                    <CardGiftCardIcon color="primary" className={styles.giftIcon}/>
                    <Typography fontSize="1rem">
                        تخففیفات روزانه
                    </Typography>
                </Button>
            </div>
        </div>
    );
};

export default NavMenuTest;