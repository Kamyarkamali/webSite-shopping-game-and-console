import React from 'react';
import styled from "../templates/GameCard.module.css";

const gameCard = ({data}) => {
    console.log(data);
    return (
        <div className={styled.container}>
            <div className={styled.subContainer}>
                <h2 className={styled.text}>Shopping Game And Console</h2>
            </div>
        </div>
    );
};

export default gameCard;


