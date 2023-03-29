///Styled
import Link from "next/link";
import Navbar from "../modules/Navbar";
import styled from "../templates/Detailse.module.css";

const Detailse = (props) => {
    console.log(props);
    const {id,name,price,discount,introduction,details}=props;
    return (
        <div className={styled.container}>
            <h2>Detailse</h2>
            <div className={styled.linkk}>
            <Link href={'/'}><h3>Go To Home</h3></Link>
            </div>
            <div className={styled.subContainer}>
            <div className={styled.banner}>
                <img src={`/images/${id}.jpg`} alt="images"/>
            </div>
            <h4 className={styled.name}>{name}</h4>
            {details ? <span className={styled.price}>{(price*(100-discount)/100 )} $</span> : <span className={styled.price}>{price} $</span>}
            {discount ? <h4 className={styled.discount}>{discount} % OFF</h4> : null}
            </div>
            <div className={styled.platform}>
               <ul>
                {details.map((item,index)=>(
                    <li key={index}>
                        <p>{Object.keys(item)[0]}:</p>
                        <span>{Object.values(item)[0]}</span>
                    </li>
                ))}
               </ul>
            </div>
            <div className={styled.prodction}>
            <p>{introduction}</p>
            </div>
            <Navbar/>
        </div>
    );
};

export default Detailse;