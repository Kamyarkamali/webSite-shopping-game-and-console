//Styled
import styled from "../modules/Logo.module.css";
import Link from "next/link";

const Logo = () => {
    return (
        <div className={styled.container}>
            <div className={styled.subcontainer}>
                <Link href={"/shopPs5"}>
                <img src={"/icon/ps5.jpg"} alt="ps5"/>
                <span className={styled.span}>See All Console</span>
                </Link>
                <h1>Buy PS5 Consoles and Bundles Direct from PlayStation - Now in Stock</h1>
            </div>
        </div>
    );
};

export default Logo;