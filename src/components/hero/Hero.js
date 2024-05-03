import React from "react";
import "./Hero.css";
import HeroImg from "../assets/images/hero.svg";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__left">
        <h2 className="hero__title">
          Making time a good time by making food the good food.
        </h2>
        <p className="hero__desc">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,А
        </p>
        <div className="hero__btns">
          <button className="btn">Order Now</button>
          <button className="btn">Food Details</button>
        </div>
      </div>
      <div className="hero__right">
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
