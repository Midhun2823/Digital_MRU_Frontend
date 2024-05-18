import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className='text-center border m-5 p-5'>Some Contacting details</div>
      <div>
        <h1 className="text-center">Developed By</h1>
        <div className="row">
          <div className="col-md-6">
            <h4>Midhun Naga Sai M</h4>
            <p>MRUH (B.Tech CSE 3rd Year)</p>
            <p className="lead ">
              Java | MERN | DSA | Python | Android | Angular | HTML | CSS |
              Bootstrap | JavaScript | Jetpack Compose
            </p>
            <p>+91 6300188045</p>
            <a
              href="https://www.linkedin.com/in/midhunnagasai/"
              className="card-link"
            >
              <img src="" alt="LinkedIn" width="60" />
            </a>
            <a href="https://github.com/Midhun2823" className="card-link">
              <img src="" alt="Github" width="100" />
            </a>
          </div>
          <div className="col-md-6">
            <h4>Harsha Sree M</h4>
            <p>MRUH (B.Tech CSE 1st Year)</p>
            <p className="lead ">
              MERN | Python | Java | HTML | CSS | Bootstrap | JavaScript | DSA
            </p>
            <p>+91 6300188045</p>
            <a
              href="https://www.linkedin.com/in/harsha-sree-03257b282/"
              className="card-link"
            >
              <img src="" alt="LinkedIn" width="60" />
            </a>
            <a className="card-link">
              <img src="" alt="Github" width="100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs
