import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer role="contentinfo">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/chakkyy"
        >
          Carlos Ramirez
        </a>
        <br></br>
        <span>Copyright © 2021</span>
      </footer>
    );
  }
}

export default Footer;
