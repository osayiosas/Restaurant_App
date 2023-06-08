import React from 'react'

import {Subheading} from '../../components'

import  image  from '../../constants/image'


import './Chef.css'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding ">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={image.chef} alt="chef_img" />
    </div>

    <div className="app__wrapper_info">
      <Subheading title="Chef’s Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={image.quote} alt="quote" />

          <p className="p__opensans">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          repudiandae reprehenderit voluptate libero.
        </p>
      </div>

      <div className="app__chef-sing">
        <p>Osayi Idiaghe</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={image.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef