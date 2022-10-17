import React from "react";
import "./Footer.scss";
import Github from "../../assets/github.png"
import Intagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"


export default function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-Links">
        <img src={Github} ></img>
        <img src={Intagram} ></img>
        <img src={LinkedIn} ></img>
        </div>
      </div>
      <div className="logo-f">
      <img src={Logo} ></img>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
}
