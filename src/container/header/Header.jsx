import React from "react";

import "./Header.css";

import { Subheading } from "../../components";

import image from '../../constants/image'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <Subheading title="chase the new flavour" />
      <h1 className="app__header-h1">The key to fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Chase the new Flavour #Gericht The key to Fine dining #Bar Sit tellus
        lobortis sed senectus vivamus molestie. Condimentum volutpat morbi
        facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        Explore Menu 01 02 03 04 Scroll
      </p>

      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={image.welcome} alt="header_image" />
    </div>
  </div>
);

export default Header;
