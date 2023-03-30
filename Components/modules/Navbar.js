import React from 'react';
import Slider from 'react-slick';
import style from "../modules/Navbar.module.css";
import Link from 'next/link';
import { Grid } from '@mui/material';


const Navbar = () => {
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaypeed:300,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        
    }
    return (
        <div className={style.container}>
            <h1>Your Liked</h1>
          <Link href={'/game'}>
        <Slider {...settings} className={style.slider}>
           <div className={style.sliderflex}>
            <img src='/images/1.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/2.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/3.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/4.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/5.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/6.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/7.jpg' alt='image'/>
           </div>
           <div>
            <img src='/images/8.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/9.jpg' alt='image'/>
           </div>
           <div className={style.sliderflex}>
            <img src='/images/9.jpg' alt='image'/>
           </div>
          </Slider>
          </Link>
        </div>
    );
};

export default Navbar;