import styled from "../modules/Card.module.css";

import Link from "next/link";

const Card = (props) => {
    const {id,price,discount,name}=props
    return (
        <div className={styled.container}>
            <img src={`/images/${id}.jpg`} alt="image"/>
            <div className={styled.detalse}>
            <h4>{name}</h4>
            <div className={styled.price}>
                {/* <img src="https://static.vecteezy.com/system/resources/previews/004/334/345/original/cost-reduction-icon-free-vector.jpg" alt="image"/> */}
                {discount ? (<span className={styled.discont}>{(price*(100-discount)/100)} $</span>) : (<span>{price} $</span>)}
                {discount ? <div className={styled.bgg}>{discount} %</div> : null}
            </div>
            </div>
            <Link className={styled.link} href={`/game/${id}`}>SeeDetailse</Link>
        </div>
    );
};

export default Card;