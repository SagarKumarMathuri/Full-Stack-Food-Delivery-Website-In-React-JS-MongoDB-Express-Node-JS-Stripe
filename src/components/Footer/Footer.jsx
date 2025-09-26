import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae
            esse voluptas optio maiores magni, laboriosam sint nihil perferendis
            error modi veniam adipisci minima architecto natus? At recusandae
            hic expedita?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>1234 - 5678 - 9012</li>
            <li>contact@sagar.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2023 Sagar. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
