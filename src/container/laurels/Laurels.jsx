import React from "react";
import { Subheading } from "../../components";

import { image, data } from "../../constants";

import "./laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards">
    <img src={imgUrl} alt="" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorent" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorent" style={{ color: "#aaaa" }}>
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <Subheading title={"Awards & recognition"} />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={image.laurels} alt="lurels" />
      </div>
    </div>
  );
};

export default Laurels;
