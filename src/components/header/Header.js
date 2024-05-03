import React from "react";
import hederLogo from "../../components/assets/images/headerLogo.svg";
import "./Header.css";
const NAV__LIST = ["Home", "About us", "Menu", "Features", "Contact us"];

const Header = () => {
  return (
    <div className="heder">
      <nav className="navbar container">
        <div className="navbar__left">
          <div className="nav__logo">
            <img src={hederLogo} alt="" />
          </div>
          <ul className="nav__list">
            {NAV__LIST.map((item, indx) => {
              return (
                <li className="nav__item" key={indx}>
                  <a href="#">
                    <span>{item}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar__right">
          <button className="heder__btn btn">Booking Now</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
