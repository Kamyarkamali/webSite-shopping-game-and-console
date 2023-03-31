import React,{useEffect} from 'react';
import { allData } from '@/Components/data';
import { useState } from 'react';
import ShopPs5 from '@/Components/templates/shopPs5';

//Styed
import styled from "../shopPs5/index.module.css"

import ImageGallry from '@/Components/modules/ImageGallry';
import ImageGallry2 from "../../Components/modules/ImageGallry2";


const shopPs = () => {
    const [datas,setData]=useState([]);

    useEffect(()=>{
        setData(allData)
    },[])

    return (
        <>
        <div className={styled.container}>
            {datas.map((item)=>(
                <ShopPs5 key={item.id} {...item} />
            ))}
        </div>
        <div className={styled.subcontainer}>
            <ImageGallry/>
            <ImageGallry2/>
        </div>
        </>
    );
};

export default shopPs;


