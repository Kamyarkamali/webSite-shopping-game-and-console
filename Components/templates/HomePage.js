import React from 'react'

//styled
import styled from "../templates/HomePage.module.css";

///Components
import Navbar from '../modules/Navbar';
import Logo from '../modules/Logo';

function HomePage() {
  return (
    <div className={styled.container}>
      <Navbar/>
      <Logo/>
    </div>
  )
}

export default HomePage