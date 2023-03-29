import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Link from 'next/link';
//styled
import styled from "../modules/HamborerMenu.module.css";

const HamborerMenu = () => {
    const [open,setOpen]=useState(false);
    const [close,setclose]=useState(false);
    const clickHandeler=()=>{
        setOpen(!open)
    }
    return (
        <div>
            <HamburgerMenu 
            isOpen={open}
            menuClicked={clickHandeler}
            width={30}
            height={20}
            strokeWidth={3}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
            />
            {open&&<ul>
                    <li><Link href="#">Shopping</Link></li>
                    <li><Link href="#">Game</Link></li>
                    <li><Link href="#">Accessories</Link></li>
                </ul>}
        </div>
    );
};

export default HamborerMenu;