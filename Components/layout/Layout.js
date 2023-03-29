import React, { Children, useState } from 'react';

import HamborerMenu from "../modules/HamborerMenu";

///Link
import Link from 'next/link';
///styled 
import styled from "../layout/Layout.module.css";

const Layout = ({children}) => {

    return (
        <>
        <header className={styled.header}>
            <div className={styled.menu} >
                <HamborerMenu/>  
            </div>
            <div className={styled.text}>
                <h1>Playstation 5 game console and accessories store</h1>
            </div>
            <div className={styled.button}>
                <Link href='#'>Shopping</Link>
                <Link href='/game'>Game And Console</Link>
                <Link href='#'>Accessories</Link>
            </div>
        </header>

        <div className={styled.container}>
            {children}
        </div>


    <footer className={styled.footer}>
    <div className={styled.ditalse}>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Shopping</a></li>
                <li><a href='#'>Game</a></li>
                <li><a href='#'>About</a></li>
            </ul>
        </div>
        <div className={styled.sochial}>
            <img src={"/icon/instagram.png"} alt="sochial"/>
            <img src={"/icon/linkedin.png"} alt="sochial"/>
        </div>
        <h3 className={styled.h3}>این صفحه صرفا جهت نمونه کار توسط اینجانب طراحی شده است</h3>
    </footer>

        </>
    );
};

export default Layout;