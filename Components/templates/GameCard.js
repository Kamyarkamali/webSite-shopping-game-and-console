import React from 'react';
import styled from "../templates/GameCard.module.css";

//Component
import Card from '../modules/Card';

const gameCard = ({data}) => {
    return (
        <div className={styled.container}>
                <h2 className={styled.text}>Shopping Game And Console</h2>
            <div className={styled.subContainer}>
                {data.map((item)=>(
                    <Card key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
};

export default gameCard;


