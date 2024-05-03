import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

import "./Product.css";
const PRODUCTS = [
  {
    id: 1,
    title: "Vegie Muffen",
    price: 16,
    desc: "There are many things are needed to start the Fast Food Business.",
    hp: 4,
    url: "https://cravingtasty.com/wp-content/uploads/2017/11/chicken-tabaka-recipe-14.jpg",
  },
  {
    id: 2,
    title: "Salads",
    price: 12,
    desc: "There are many things are needed to start the Fast Food Business.",
    hp: 5,
    url: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/healthy-cobb-salad-steps-sq-026.jpg",
  },
  {
    id: 3,
    title: "Burger",
    price: 10,
    desc: "There are many things are needed to start the Fast Food Business.",
    hp: 3,
    url: "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
  },
  {
    id: 4,
    title: "Delmonico Steak dish",
    price: 14,
    desc: "There are many things are needed to start the Fast Food Business.",
    hp: 5,
    url: "https://ik.imagekit.io/munchery/blog/tr:w-768/make-the-famous-delmonico-steak-at-home.jpeg",
  },
  {
    id: 5,
    title: "Egg Masala",
    price: 9,
    desc: "There are many things are needed to start the Fast Food Business.",
    hp: 3,
    url: "https://i0.wp.com/www.happyandharried.com/wp-content/uploads/2016/03/Egg-Masala-with-Red-Peppers-Green-Peas.jpg",
  },
  {
    id: 6,
    title: "Peach Melba dish",
    price: 15,
    desc: "There are many things are needed to start the Fast Food Business.",
    hp: 4,
    url: "https://tuchefonline.com/wp-content/uploads/2023/11/94128_640x428.jpg",
  },
];

const Product = () => {
  return (
    <section className="products container">
      <h4 className="product__name">MENU</h4>
      <h2 className="product__title">Food Full of treaty Love</h2>
      <p className="product__desc">
        There are many things are needed to start the Fast Food Business. You
        need not only Just Food Stalls with Persons but also specialized
        equipment, Skills to manage Customers,
      </p>
      <div className="product__cards">
        {PRODUCTS.map((product) => {
          return (
            <div className="product__card" key={product.title}>
              <div className="product__card__img">
                <img src={product.url} alt="" />
              </div>
              <div className="product__card__info">
                <h3>{product.title}</h3>
                <h3>{product.price}$</h3>
              </div>
              <p className="product__card__desc">{product.desc}</p>
              <div className="product__card__star">
                <FaStar className="solid" />
                <FaStar className="solid" />
                <FaStar className="solid" />
                <FaStar className="solid" />
                <FaStar className="solid" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
