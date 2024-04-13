import React from "react";
import "./Contact.css";
import location from "../img/location.png";
import shape from "../img/shape.png";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// this is for label in the input field
const inputs = document.querySelectorAll(".input");

function focusFun() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFun() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFun);
  input.addEventListener("blur", blurFun);
});

function Contact() {
  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <ReactTyped
          className="text-5xl font-semibold"
          strings={["CONTACT"]}
          typeSpeed={150}
          loop
        />
      </div>
      <div className="contact-container">
        <span className="big-circle"></span>
        <img src={shape} alt="" className="square" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Lets gets in touch</h3>
            <p className="text">
              Join me in a conversation filled with technology and science,
              let's connect and explore the world together!
            </p>
            <div className="c-info">
              <div className="c-information">
                <img src={location} alt="" className="icon" />
                <p>PRPCEM Amaravati</p>
              </div>
              <div className="c-information">
                <img src={location} alt="" className="icon" />
                <p>PRPCEM Amaravati</p>
              </div>
              <div className="c-information">
                <img src={location} alt="" className="icon" />
                <p>PRPCEM Amaravati</p>
              </div>
            </div>
            {/* connect with us by social media */}
            <div className="social-media">
              <p>Connect with us</p>
              <div className="social-icon">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form action="index.html">
              <h3 className="title">Contact Us</h3>
              <div className="input-container ">
                <input type="text" className="input" name="name" />
                <label for="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" className="input" name="email" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" className="input" name="phone" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea className="input" name="message"></textarea>
                <label for="">Message</label>
                <span>Message</span>
              </div>

              <input type="submit" className="btn" value="send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
