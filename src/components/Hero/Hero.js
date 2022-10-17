import React from "react";
import "./Hero.scss";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter"
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span> the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text ">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="text3">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end= {140} start= {100} delay= "4" preFix="+"></NumberCounter>
            </span>
            <span>expert coachs</span>
          </div>

          <div>
            <span> 
               <NumberCounter end= {978} start= {900} delay= "4" preFix="+"></NumberCounter>
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span> <NumberCounter end= {50} start= {20} delay= "4" preFix="+"></NumberCounter></span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Jion Now</button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart}></img>
          <span>Heart Rate</span>
          <span> 116 bpm</span>
        </motion.div>

        <div className="hero-img">
          <img className="hero-image" src={hero_image}></img>
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            className="hero-image_back"
            src={hero_image_back}
          ></motion.img>
        </div>

        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories}></img>
          <div className="calories-content">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
