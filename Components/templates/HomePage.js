import React from 'react'

//styled
import styled from "../templates/HomePage.module.css";

///Components
import Navbar from '../modules/Navbar';

function HomePage() {
  return (
    <div className={styled.container}>
      <Navbar/>
    </div>
  )
}

export default HomePage