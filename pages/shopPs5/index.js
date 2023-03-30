import React,{useEffect} from 'react';
import { allData } from '@/Components/data';
import { useState } from 'react';
import ShopPs5 from '@/Components/templates/shopPs5';

const shopPs = () => {
    const [datas,setData]=useState([]);

    useEffect(()=>{
        setData(allData)
    },[])

    return (
        <div>
            {datas.map(item=> <img src={item.src}/>)}
        </div>
    );
};

export default shopPs;


