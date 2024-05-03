import React from "react";
import AboutImg from "../assets/images/about.svg";
import "./About.css";

const About = () => {
  return (
    <section className="about container">
      <div className="about__left">
        <img src={AboutImg} alt="" />
      </div>
      <div className="about__right">
        <h4 className="about__name">About us</h4>
        <h2 className="about__title">
          Food Stalls with Persons but to Product marketing plane catlogues etc
          to.
        </h2>
        <p className="about__desc">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also equipment make
          your marketing plane Effective.
        </p>
        <button className="btn">Read More</button>
      </div>
    </section>
  );
};

export default About;
