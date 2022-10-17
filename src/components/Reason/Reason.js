import React from "react";
import "./Reason.scss";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import { Button } from "react-bootstrap";
const Reason = () => {
  return (
    <div className="reasons" id="reason">
      <div className="left-r  ">
        <img src={image1}></img>
        <img src={image2}></img>
        <img src={image3}></img>
        <img src={image4}></img>
      </div>

      <div className="right-r">
         <span className="some-reasons">Some Reasons</span>
         <div>
          <span className="stroke-text">Why </span>
          <span>Choose us</span>
         </div>

         <div className="details-r">
          <div>
            <img src={tick}></img>
            <span >over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick}></img>
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick}></img>
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick}></img>
            <span>reliable partners</span>
          </div>
         </div>
         <span className="our-partners">OUR PARTNERS</span>

         <div className="partners">
          <img src={nb}></img>
          <img src={adidas}></img>
          <img src={nike}></img>

         </div>
      </div>
    </div>
  );
};
export default Reason;
