import React from 'react'

import image from '../../constants/image';

const Subheading = ({title}) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={image.spoon} alt="spoon" className='spoon.img' />
  </div>
);

export default Subheading