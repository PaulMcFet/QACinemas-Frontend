import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Logo from "../../Assets/qa-company.png";
import "./footer.css";

const Footer = () => {
  return (
    <section class="footer">
      <hr className="footer-seperator" />
      <section class="social-media">
        <a
          href="https://github.com/sayedsakkaf/QACinemas-Frontend"
          target="_blank"
          rel="noopener noreferrer"
          class="git"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.qa.com/"
          target="_blank"
          rel="noopener noreferrer"
          id="qa"
        >
          <img src={Logo} alt="qa-logo" class="qa-logo" />
        </a>
        <a
          href="https://twitter.com/QA_Ltd"
          target="_blank"
          rel="noopener noreferrer"
          class="twitter"
        >
          <BsTwitter />
        </a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">Tel: 07850396398</section>
        <section className="footer-info-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          deleniti ex optio laudantium voluptas atque, consectetur consequuntur
          obcaecati! Rerum ut iure quis omnis cupiditate corrupti et impedit in
          corporis voluptatem.
        </section>
        <section className="footer-info-right">
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
