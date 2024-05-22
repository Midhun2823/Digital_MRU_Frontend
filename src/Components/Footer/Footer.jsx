import React from "react";
import LOGO from "../../assets/LOGO.png";
import Linkedin_Icon from "../../assets/Linkedin_Icon.png";
import Instagram_Icon from "../../assets/Instagram_Icon.png";

const Footer = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row bg-primary bg-opacity-75 p-4  fw-bold">
        <div className="col-md-4 p-4">
          <img src={LOGO} width="120" className="rounded mb-4" />
          <p style={{ textAlign: "justify" }}>
            Malla Reddy University is offering industry-focused specialised
            Undergraduate and Postgraduate courses with the aim of providing
            Quality Higher Education on par with International standards. It
            persistently seeks and adopts innovative methods to improve the
            quality of higher education on a consistent basis.
          </p>
          <div className="hstack">
            <img src={Linkedin_Icon} width="40" className="m-2" />
            <img src={Instagram_Icon} width="40" className="m-2" />
          </div>
        </div>
        <div className="col-md-4 p-4">
          {" "}
          <h2 className="fw-bold text-decoration-underline">Features</h2>
          <div className="mt-4">
            <p>Cafeteria</p>
            <p>Stationary</p>
            <p className="text-dark text-opacity-50">Upskill</p>
          </div>
        </div>

        <div className="col-md-4 p-4">
          <h2 className="fw-bold text-decoration-underline">Contact US</h2>
          <div className="mt-4">
            <p>+91 6300188045</p>
            <p>digitalmru@gmail.com</p>
          </div>
        </div>
        <hr />
        <p className="text-center">
          Copyright @ 2024 SSH-AN ADaptive InnovationS
        </p>
      </div>
    </div>
  );
};

export default Footer;
