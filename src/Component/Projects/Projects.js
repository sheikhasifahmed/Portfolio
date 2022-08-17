import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../../image/laptop-work.jpg";

import hospital from "../../image/hospital.PNG";
import tour from "../../image/tour.PNG";
import swim from "../../image/swim.PNG";
import store from "../../image/store.PNG";

const Projects = () => {
  return (
    <div>
      <div className="project-banner">
        <div className="project-overlay">
          <div className="banner-text">
            <h1>
              Welcome, <br /> Here is some of my project works
            </h1>
          </div>
        </div>
      </div>
      <div className="projects-grid my-cont">
        <div className="project-div">
          <div>
            <img width="100%" height="100%" src={tour} alt="" />
          </div>

          <div className="project-text">
            <h3>Seven Heaven Tour Provider</h3>
            <p>
              MERN stack project using React.js, Node.js and Mongodb Login
              system build with firebase authentication system.
            </p>
            <a href="https://seven-heaven-tour.web.app/">
              <button>Visit Site</button>
            </a>
          </div>
        </div>
        <div className="project-div">
          <div>
            <img width="100%" height="100%" src={swim} alt="" />
          </div>

          <div className="project-text">
            <h3>Hollyday Swimmers: Swimming Academy</h3>
            <p>
              A website of a swimming academy. React Routing is used to rout
              various pages.
            </p>

            <a href="https://hollyday-swimmers.netlify.app/">
              <button>Visit Site</button>
            </a>
          </div>
        </div>
        <div className="project-div">
          <div>
            <img width="100%" height="100%" src={store} alt="" />
          </div>

          <div className="project-text">
            <h3>Click & Buy Store</h3>
            <p>
              Vanilla Js and Vanilla CSS, bootstrap are used to build this site.
              It is a online shop where people can add to cart any product and
              also see the details of any products. Prices are calculated in the
              cart automatically.
            </p>
            <a href="https://click-and-buy-store.netlify.app/">
              <button>Visit Site</button>
            </a>
          </div>
        </div>
        <div className="project-div">
          <div>
            <img width="100%" height="100%" src={hospital} alt="" />
          </div>

          <div className="project-text">
            <h3>Allsquare Hospital</h3>
            <p>
              This website build by react.js, Vanila css and bootstrap. An
              hostpital based website where patient can find the services of the
              hospital and book a schedule for treatment.
            </p>
            <a href="https://allsquare-hospital.web.app/">
              <button>Visit Site</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
