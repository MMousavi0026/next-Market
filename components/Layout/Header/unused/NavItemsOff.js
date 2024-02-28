import React, {useState} from 'react';
import styles from "./SiteHeader.module.css";
import productsCategories from "../productsCategories/productsCategories";
import MenuButtonOff from "./MenuButtonOff";

const NavItemsOff = () => {
    const [open, setOpen] = useState(false);

    const data = [
        {imgSrc:"/img/s1.png", title:"ماهی و آبزیان", titleColor:'white'},
        {imgSrc:"/img/s2.png", title:"میوه و سبزیجات", titleColor:'white'},
        {imgSrc:"/img/s3.png", title:"نان و غلات", titleColor:'white'},
        {imgSrc:"/img/s4.png", title:"لبنیات و پروتئین", titleColor:'white'},
        {imgSrc:"/img/s5.png", title:"شوینده و نظافتی", titleColor:'white'},
        {imgSrc:"/img/s6.png", title:"گوشت و استیک", titleColor:'white'},
    ]

    return (
        <section>
            <MenuButtonOff
                open={open}
                title="تخفیفات ویژه"
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                <div className={styles.offItems}>
                    {
                        data.map((item) => <productsCategories {...item}>۲۰٪ تخفیف</productsCategories>)}
                </div>
            </MenuButtonOff>
        </section>
    );
};

export default NavItemsOff;