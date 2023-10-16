import React from "react";
import "./AboutusStyle.css";
import Bottom1 from "./Bottom";
import Footer1 from "./Footer";
import NewNavbar from "./Navbar";
function Aboutus() {
  return (
    <>
    <NewNavbar />
      <div className="image-aboutus-banner" style={{ marginTop: 70 }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About CDAC Leave Management System</h1>
              <p className="image-aboutus-para"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container paddingTB60">
        <div className="row">
          {/* Blog Post Content Column */}
          <div className="col-lg-8">
            <hr />
            <h2 style={{ color: "#657c96" }}>
              Welcome to the CDAC Leave Management System! We are a team of
              dedicated developers who have created this system to simplify and
              streamline the leave management process.
            </h2>
            <hr />

            {/* Preview Image */}
            <img
              className="img-responsive"
              src="http://mobilebusinessinsights.com/wp-content/uploads/2016/03/IBM_MobileFirst_SXSWBlog_0321_v2.jpg"
              alt=""
            />

            <hr />
            <h2 style={{ textAlign: "center" }}>Our Team</h2>
            <div className="row">
              <div className="col-6 col-sm-4">
                <div className="card">
                  <img
                    src={require("./shreyas.png")}
                    alt="Jane"
                    style={{ width: "100%" }}
                  />
                  <div className="container text-center">
                    <h2>Shreyas Jadav</h2>
                    <p className="title">Back-end Developer</p>
                    <p>
                      Pursuing post graduation diploma in advanced Computing
                      from MET Mumbai
                    </p>
                    <p>shreyas@gmail.com</p>
                    <p>
                      <button className="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-4">
                <div className="card">
                  <img
                    src={require("./shubham.png")}
                    alt="Mike"
                    style={{ width: "100%", height: "20%" }}
                  />
                  <div className="container text-center">
                    <h2>Shubham Chavan</h2>
                    <p className="title">Front-end Developer</p>
                    <p>
                      Pursuing post graduation diploma in advanced Computing
                      from MET Mumbai
                    </p>
                    <p>shubham@gmail.com</p>
                    <p>
                      <button className="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-4">
                <div className="card ">
                  <img
                    src={require("./soham.png")}
                    alt="John"
                    style={{ width: "100%", height: "20%" }}
                  />
                  <div className="container text-center">
                    <h2>Soham Walke</h2>
                    <p className="title "> Database Administrator</p>
                    <p>
                      Pursuing post graduation diploma in advanced Computing
                      from MET Mumbai
                    </p>
                    <p>soham@gmail.com</p>
                    <p>
                      <button className="button">Contact</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>

          {/* Blog Sidebar Widgets Column */}
          <div style={{ marginTop: "30px" }} className="col-md-3">
            {/* Blog Search Well */}

            {/* Blog Categories Well */}
            <div className="well">
              <h3>Our Vision, Mission & Values</h3>
              <div className="row">
                <div className="col-lg-12">
                  <p>
                    C-DAC has a well defined and understood vision, which
                    C-DACians strive to achieve
                  </p>
                  <a
                    href="https://www.cdac.in/index.aspx?id=VisionMission"
                    onClick=""
                  >
                    <button type="button" className="btn btn-primary">
                      Know More
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Side Widget Well */}
            <div className="well bgcolor-skyblue" style={{ marginTop: 50 }}>
              <h4>About CDAC</h4>
              <p>
                Centre for Development of Advanced Computing (C-DAC) is the
                premier R&D organization of the Ministry of Electronics and
                Information Technology (MeitY) for carrying out R&D in IT,
                Electronics and associated areas. Different areas of C-DAC had
                originated at different times, many of which came out as a
                result of identification of opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <Bottom1/>
    </>
  );
}
export default Aboutus;
