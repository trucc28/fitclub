import React from "react";
import { useState } from "react";
import "./Testimonials.scss";
import { testimonialsData } from "../../data/testimonialsData";
import LeftArrows from "../../assets/leftArrow.png";
import RightArrows from "../../assets/rightArrow.png";

export default function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
 
  return (
    <div className="testimonials" id="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>

        <span>
          <span>{testimonialsData[selected].name}</span> -{" "}
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img className="testimonials-image" src={testimonialsData[selected].image}></img>
        <div className="arrows">
          <img
          onClick={()=> {
            selected === 0 
            ? setSelected(tLength -1)
            : setSelected((prev)=> prev -1);
          }}
          src={LeftArrows}></img>

          <img
          onClick={()=> {
            selected === tLength - 1
            ? setSelected(0)
            : setSelected((prev)=> prev +1);
          }}
          src={RightArrows}></img>
        </div>
      </div>
    </div>
  );
} 
