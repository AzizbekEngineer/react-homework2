import React from "react";
import "./Service.css";
import ServiceImg from "../assets/images/service1.svg";
const SERVICEDATA = [
  {
    id: "1",
    title: "Quality Food",
    desc: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: ServiceImg,
  },
  {
    id: "2",
    title: "Food Delivery",
    desc: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: ServiceImg,
  },
  {
    id: "3",
    title: "Quality Food",
    desc: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
    img: ServiceImg,
  },
];

const Service = () => {
  return (
    <section className="service container">
      <h3 className="service__name">Features</h3>
      <h2 className="service__title">Food with a New Passion</h2>
      <div className="service__cards">
        {SERVICEDATA.map((service) => {
          return (
            <div className="service__card" key={service.id}>
              <div className="service__img">
                <img src={service.img} alt="" />
              </div>
              <h3 className="service__card__title">{service.title}</h3>
              <p className="service__desc">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
