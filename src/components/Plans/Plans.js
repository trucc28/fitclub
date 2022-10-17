import React from "react";
import "./Plans.scss";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
export const Plans = () => {
  return (
    <div className="plans-container" id="plan">

      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text"> NƠ WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            <span>{plan.icon}</span>
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick}></img>
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits </span>
            </div>
            <button className="btn">Jion Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Plans