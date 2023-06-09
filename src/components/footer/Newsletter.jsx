import React from 'react'

import './newsletter.css'

import Subheading from '../subheading/Subheading'

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <Subheading title="Newsletter" />
        <p className="headtext__cormorant">Subscribe to Our Newsletter</p>
      </div>
    </div>
  );
}

export default Newsletter
