import React from "react";
import SeeMoreLink from "../../../Components/SeeMoreLink";

function WhyShouldYouHaveACat() {
  return (
    <div className="home-article">
      <div className="left">
        <div className="title">
          <span />
          <p>Why should you have a cat?</p>
        </div>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <SeeMoreLink path="why-should-you-have-a-cat" text="read more" />
      </div>
      <div className="right">
        <div id="photo1" className="cat-photo">
          <img src="https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555991812/shape/mentalfloss/istock_80700033_small.jpg?itok=P3iCjwrf" />
        </div>
        <div id="photo3" className="cat-photo">
          <img src="https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555991808/shape/mentalfloss/istock_28625938_small_0.jpg?itok=m_cQ0h0i" />
        </div>
        <div id="photo2" className="cat-photo">
          <img src="https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555991805/shape/mentalfloss/istock_74346959_small_0.jpg?itok=CPJ4pR3s" />
        </div>
      </div>
    </div>
  );
}

export default WhyShouldYouHaveACat;
