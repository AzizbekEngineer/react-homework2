import React from "react";
import hederLogo from "../../components/assets/images/headerLogo.svg";

const Header = () => {
  return (
    <div className="heder">
      <nav className="navbar container">
        <div className="navbar__left">
          <div className="nav__logo">
            <img src={hederLogo} alt="" />
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar__right"></div>
      </nav>
    </div>
  );
};

export default Header;
