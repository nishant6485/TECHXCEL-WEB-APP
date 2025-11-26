import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechXcel</h1>
        <p>© 2025-All Rights Reserved|Developed by Nishant Agarwal</p>
      </div>
      <div>
        <h5>Follow US</h5>
        <div>
          <a href="https://www.youtube.com/@NishantsVault" target={"blank"}>
            Youtube
          </a>
          <a
            href="https://www.instagram.com/nishantagarwal6485"
            target={"blank"}
          >
            Instagram
          </a>
          <a href="https://github.com/nishant6485" target={"blank"}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
