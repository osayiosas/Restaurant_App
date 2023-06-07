import React from "react";

import "./AboutUS.css";

import image from "../../constants/image";

const Aboutus = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center ">
      <img src={image.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={image.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque id
          soluta cum adipisci nobis non, nam in. Praesentium, sunt vero!
        </p>

        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content-knife flex__center">
        <img src={image.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={image.spoon} alt="about_spoon" className="spoon_img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque id
          soluta cum adipisci nobis non, nam in. Praesentium, sunt vero!
        </p>

        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default Aboutus;
