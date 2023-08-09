import React, { useContext, useState } from "react";
import Hero from "./hero/Hero";
import "./Home.css";
import Category from "./category/Category";
import Stocks from "./stocks/Stocks";
import Interest from "./interest/Interest";
import Top from "./top/Top";
import Apple from "./apple/Apple";
import About from "./about/About";
import Modal from "../../components/modal/Modal";
import { Context } from "../../context/ThemeContext";

function Home() {

  const {isOpened, setIsOpened} = useContext(Context)
  
  return (
    <div className="home">
      <Hero />
      <Category />
      <Stocks />
      <Interest />
      <Top/>
      <Apple/>
      <About/>
    </div>
  );
}

export default Home;
