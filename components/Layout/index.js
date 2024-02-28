import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import style from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={style.Layout}>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;