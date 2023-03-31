
import styled from "../templates/ShopPs5.module.css";

const shopPs5 = (props) => {
    const {price,name,src}=props;
    // console.log(name);
    return (
        <>
        <div className={styled.container}>
            <img src={src} alt="ps5"/>
            <div className={styled.subcontainer}>
                <h3>{name}</h3>
                <span>{price} $</span>
            </div>
        </div>
        </>
    );
};

export default shopPs5;