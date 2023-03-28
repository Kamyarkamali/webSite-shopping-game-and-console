import React, { Children } from 'react';

///Link
import Link from 'next/link';
///styled 
import styled from "../layout/Layout.module.css";

const Layout = ({Children}) => {
    return (
        <>
        <header className={styled.header}>
            <div className={styled.text}>
                <h1>Playstation 5 game console and accessories store</h1>
            </div>
            <div className={styled.button}>
                <Link href='#'>Shopping</Link>
                <Link href='#'>Game</Link>
                <Link href='#'>Accessories</Link>
            </div>
        </header>

        <div className={styled.container}>
            {Children}
        </div>

        </>
    );
};

export default Layout;