import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Varun
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footersocials">
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" rel="noreferrer" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" rel="noreferrer" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Varun .All rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
