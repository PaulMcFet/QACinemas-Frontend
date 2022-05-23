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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis at
          unde atque est ducimus nam ipsum repellat similique alias et? Cumque
          dolorem dignissimos magnam facere ullam odit optio tenetur nesciunt!
          Quam illo doloremque nesciunt itaque repudiandae, accusantium
          consequuntur asperiores sed fuga odio nisi fugit totam ipsum maiores
          accusamus sint, nostrum iusto culpa mollitia voluptates doloribus,
          ducimus modi. Amet, magni mollitia!
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
