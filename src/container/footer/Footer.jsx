import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'

import { FooterOverlay, Newsletter } from "../../components";


import {image} from '../../constants'

import './Footer.css'

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>

          <p className="p__opensans">
            Opic Estate, Dayi Gate Agbara, Ogun , OG 110112
          </p>
          <p className="p__opensans">+234-815-237-7970</p>
          <p className="p__opensans">+234-802-394-7354</p>
        </div>

        <div className="app__footer-links__logo">
          <img src={image.gericht} alt="footer_logo" />

          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>

          <img
            src={image.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />

          <div className="app__footer-links_icon">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>

          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday: </p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2023 Osaigbov. All Rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer