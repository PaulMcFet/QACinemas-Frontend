import React from "react";
import { BsAlignMiddle, BsGithub, BsTwitter } from "react-icons/bs";
import Logo from "../../Assets/qa-company.png";
import "./footer.css";

const Footer = () => {
  return (
    <section class="footer">
      <hr className="footer-seperator" />
      <section className="social-media">
        <a
          href="https://github.com/sayedsakkaf/QACinemas-Frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="git"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.qa.com/"
          target="_blank"
          rel="noopener noreferrer"
          id="qa"
        >
          <img src={Logo} alt="qa-logo" className="qa-logo" />
        </a>
        <a
          href="https://twitter.com/QA_Ltd"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <BsTwitter />
        </a>
      </section>
      <section className="text-center footer-info">
        <section className="footer-info-start">Tel: 07850396398</section>
        <section className="footer-info-center">
        This Website is a Work In Progress and any content on this site is likely to change over the process of creation. 
        </section>
        <section className="footer-info-end">
          <ul>
            <li>One</li>
            <li>Two</li>
          </ul>
        </section>
      </section>
      <section className="footer-info-bottom">
        <section className="footer-copy">
          @QACinemas Limited 1995 to 2022. All rights reserved - International
          House, 1 St Katharine’s Way, London, E1W 1UN
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  );
};

export default Footer;
