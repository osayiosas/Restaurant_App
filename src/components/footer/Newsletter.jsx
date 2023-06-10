import React from 'react'

import './newsletter.css'

import Subheading from '../subheading/Subheading'

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <Subheading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>

        <p className="p__opensans">And never miss latest Updates!</p>
      </div>

      <div className="app__newsletter-input flex-center">
        <input type="email" placeholder="enter your email address" />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter
