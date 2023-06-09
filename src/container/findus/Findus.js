import React from 'react'

import { Subheading } from "../../components";

import { image } from "../../constants";

const Findus = () => (
  <div className="app__bg app__wrapper section__padding " id="contact">
    <div className="app__wrapper_info">
      <Subheading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">
          Opic Estate, Dayi Gate Agbara, Ogun , OG 110112
        </p>
        <p
          className="headtext__cormorant"
          style={{ color: "#dcca87", margin: "2rem o" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <button type="button" className="custom__button" style={{marginTop: '2rem'}}>
        View More
      </button>

    </div>

    <div className="app__wrapper_img">
      <img src={image.findus} alt="findus" />
    </div>
  </div>
);

export default Findus