import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h3>What is BornInGarage?</h3>
        <p>
          BornInGarage is a website where you can browse a collection of
          distinct sounds a car makes when it revs its engine. The roar of a car
          exhaust when the accelerator is pushed is a glorious experience and
          should be appreciated for all its intricacies. On this site, you'll be
          able to browse many car brands' top car models and hear their exhaust
          note, as every car sound is different and unique.
          <br></br>
          <br></br>
        </p>
        <hr />
        <h3>But like, why though?</h3>
        <p>
          Because... I wanted to make a website that people could use to hear
          the awesome sounds cars make. I don't think there's any sort of
          central place on the internet where you can just hear car noises, so I
          thought I'd fill that void. Oh, I also{" "}
          <strong>freaking love cars</strong>, so why the heck not! I get a kick
          out of listening to these revs and I hope you do too.
        </p>
        <br></br>
        <hr />
        <h3>Can I see where the images/sounds are from?</h3>
        <p>
          Absolutely! When you're hovering over a car, in the bottom right area
          you'll see two links pop up that credit the image source and the sound
          source. Click a link to be taken to a new page where that sound/image
          was sourced.
        </p>
        <br></br>
        <hr />
        <h3>Developer</h3>
        <div className="contact">
          <h4>Carlos Ramirez</h4>
          <a
            href="https://www.linkedin.com/in/carlosramirezdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.iconify.design/logos:linkedin-icon.svg"
              alt="Carlos Ramirez LinkedIn"
            />
          </a>
          <a
            href="https://github.com/chakkyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.iconify.design/akar-icons:github-fill.svg?color=white"
              alt="Carlos Ramirez Github"
            />
          </a>
          <a
            href=" https://cramirez.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.iconify.design/dashicons:portfolio.svg?color=white"
              alt="Carlos Ramirez Portfolio"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default About;
