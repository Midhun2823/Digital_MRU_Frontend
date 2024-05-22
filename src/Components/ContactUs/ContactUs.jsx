import React from "react";
import { Tilt } from "react-tilt";
import LinkTree_Icon from "../../assets/LinkTree_Icon.png";
import Github_Icon from "../../assets/Github_Icon.png";
import Linkedin_Icon from "../../assets/Linkedin_Icon.png";
import Call_Icon from "../../assets/Call_Icon.png";
import Whatsapp_Icon from "../../assets/Whatsapp_Icon.png";

const ContactUs = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div>
      <div className="text-center border m-5 p-5">Some Contacting details</div>
      <div>
        <h1 className="text-center text-decoration-underline">Developed By</h1>
        <div className="row">
          <div className="col-md-6 p-5">
            <Tilt
              options={defaultOptions}
              style={{ height: "100%", width: "100%" }}
            >
              {" "}
              <div class="card text-center border border-dark border-2">
                <div class="card-header">
                  <h4 className="fs-2 fw-bold">Midhun Naga Sai M</h4>
                </div>
                <div class="card-body">
                  <p class="card-title fw-bold">MRUH (B.Tech CSE 3rd Year)</p>
                  <p class="card-text lead">
                    Java | MERN | DSA | Python | Android | Angular | HTML | CSS
                    | Bootstrap | JavaScript | Jetpack Compose
                  </p>
                  <span>
                    <img width="32" src={Call_Icon} />{" "}
                    <img width="36" src={Whatsapp_Icon} />
                    +91 6300188045
                  </span>
                </div>
                <div class="card-footer text-body-secondary">
                  <a
                    href="https://www.linkedin.com/in/midhunnagasai/"
                    className="card-link"
                  >
                    <img src={Linkedin_Icon} alt="LinkedIn" width="60" />
                  </a>
                  <a href="https://github.com/Midhun2823" className="card-link">
                    <img src={Github_Icon} alt="Github" width="60" />
                  </a>
                  <a
                    href="https://linktr.ee/midhunnagasai"
                    className="card-link"
                  >
                    <img
                      className="rounded rounded-2"
                      src={LinkTree_Icon}
                      alt="LinkTree"
                      width="60"
                    />
                  </a>
                </div>
              </div>
            </Tilt>
          </div>
          <div className="col-md-6 p-5">
            <Tilt
              options={defaultOptions}
              style={{ height: "100%", width: "100%" }}
            >
              <div class="card text-center border border-dark border-2">
                <div class="card-header">
                  <h4 className="fs-2 fw-bold">Harsha Sree M</h4>
                </div>
                <div class="card-body">
                  <p class="card-title fw-bold">MRUH (B.Tech CSE 1st Year)</p>
                  <p class="card-text lead">
                    MERN | Python | Java | HTML | CSS | Bootstrap | JavaScript |
                    DSA
                  </p>
                  <span>
                    <img width="32" src={Call_Icon} />{" "}
                    <img width="36" src={Whatsapp_Icon} />
                    +91 6300188045
                  </span>
                </div>
                <div class="card-footer text-body-secondary">
                  <a
                    href="https://www.linkedin.com/in/harsha-sree-03257b282/"
                    className="card-link"
                  >
                    <img src={Linkedin_Icon} alt="LinkedIn" width="60" />
                  </a>
                  <a className="card-link">
                    <img src={Github_Icon} alt="Github" width="60" />
                  </a>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
