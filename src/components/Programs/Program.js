import React from "react";
import "./Program.scss";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png'
const Program = () => {
  return (
    <div className="programs" id="program">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            <span className="c-img">   {program.image}</span>
            <span className="c-heading">{program.heading}</span>
            <span className="c-details">{program.details}</span>
            <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
