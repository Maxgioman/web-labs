import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css-styles/styles.css";
import "./css-styles/individual-styles.css";
import {
  faHeadset,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./footer";
import Header from "./header";
import BackToTop from "react-back-to-top";

class MainPage extends Component {
  render() {
    let elem;
    let link;
    if (window.localStorage.getItem("username")) {
      elem = [window.localStorage.getItem("username")];
      if (window.localStorage.getItem("isCompany") === "1")
        link = {
          [elem[0]]: "/company-office/" + window.localStorage.getItem("userId"),
        };
      else
        link = {
          [elem[0]]:
            "/customer-office/" + window.localStorage.getItem("userId"),
        };
    } else {
      elem = ["|Sign In|", "|Sign Up|"];
      link = { "|Sign In|": "/sign-in", "|Sign Up|": "/sign-up" };
    }
    return (
      <div>
        <Header
          elements_href={["INFO", "WHY WE?", "ABOUT US", "CONTACTS"]}
          elements_link={elem}
          hrefs={{
            INFO: "#sec2",
            "WHY WE?": "#sec3",
            "ABOUT US": "#sec4",
            CONTACTS: "#sec5",
          }}
          links={link}
        />
        <section id="block1-sec1" className="section background-responsive">
          <div className="container col-12 flex-row-center flex-lg-column">
            <div className="col-6 flex-center">
              <div id="login-btn" className="col-7 flex-center">
                <Link to={"/sign-in"} className="auth-btn">
                  LOGIN
                </Link>
              </div>
            </div>
            <div className="col-6 flex-center">
              <div id="register-btn" className="col-7 flex-center">
                <Link to={"/sign-up"} className="auth-btn">
                  REGISTER
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="sec2"
          className="section lg-section-height-2x xxs-section-height-1x"
        >
          <div className="container col-11 flex-row-center flex-lg-column">
            <div className="flex-center col-5 col-lg-9 col-md-11 col-sm-11">
              <img
                id="img-sec2-block1"
                src={require("./css-styles/images/img-sec2-block1.png")}
              />
            </div>
            <div className="col-7 col-lg-9 col-md-11 col-sm-11">
              <div id="text-block" className="flex-center">
                <p id="text1-1" className="text text-title">
                  {" "}
                  Something about{" "}
                </p>
                <br />
                <p id="text1-2" className="text">
                  {" "}
                  As it is known, nothing lasts forever. Old stuff anywhere - in
                  your house, outside of it, in the garden - needs to be
                  renovated.
                </p>
                <br />
                <p id="text1-3" className="text">
                  {" "}
                  So, we decided to help ordinary people find companies ready to
                  do the renovation on their terms. Only You choose who to
                  trust. Watch reviews, history of work done and do yours!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="sec3"
          className="section background-responsive lg-section-height-1_5x
          sm-section-height-2x xxs-section-height-1x"
        >
          <div
            id="block1-sec3"
            className="container col-9 col-md-11 col-sm-12 flex-center background-transparent"
          >
            <div
              id="text-sec3"
              className="text-block col-19 flex-column-start text-box-black p-5"
            >
              <p id="text2-1" className="text text-title text-sec3-font-size">
                {" "}
                Opportunities{" "}
              </p>
              <br />
              <p id="text2-2" className="text text-bold text-sec3-font-size">
                Here, in <strong>Restavratsia</strong> project You can:
              </p>
              <br />
              <p id="text2-3" className="text text-bold text-sec3-font-size">
                - Create an order to renovate your stuff
              </p>
              <br />
              <p id="text2-4" className="text text-bold text-sec3-font-size">
                - Choose executor of an order
              </p>
              <br />
              <p id="text2-5" className="text text-bold text-sec3-font-size">
                - Find new client (as company)
              </p>
              <br />
              <p id="text2-6" className="text text-bold text-sec3-font-size">
                - Make old things new again!
              </p>
            </div>
          </div>
        </section>
        <section
          id="sec4"
          className="section sm-section-height-2x lg-section-height-2x xxs-section-height-1x"
        >
          <div className="container flex-row-center col-10 col-md-11 col-sm-12 flex-lg-column">
            <div className="col-7 flex-center height-inherit col-sm-12 col-lg-11">
              <div
                id="sec4-text"
                className="col-11 text-block text-box-black flex-column-start"
              >
                <p className="text pb-4">We are a group of delelopers, </p>
                <p className="text pb-4">who recently started this project</p>
                <p className="text pb-4">It's already 5-member crew:</p>
                <p className="text pb-4">
                  <strong>Maxym Pulyk</strong>, front-end dev(it's me)
                </p>
                <p className="text pb-4">
                  <strong>Adrian Vorobel</strong>, front-end dev
                </p>
                <p className="text pb-4">
                  <strong>Mykhailo Muzyka</strong>, back-end dev
                </p>
                <p className="text pb-4">
                  <strong>Oleksiy Kachmar</strong>, back-end dev, team lead
                </p>
                <p className="text pb-4">
                  <strong>Andriy Yarchak</strong>, visual designer
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="sec5"
          className="section sm-section-height-1_25x xxs-section-height-1x background-responsive"
        >
          <div className="container col-12 col-sm-12 flex-end-center">
            <div className="col-6 col-lg-12 col-sm-12 padding-lg-top padding-xl-top padding-md-top">
              <div className="elem-fit">
                <img
                  className="elem-fit"
                  src={require("./css-styles/images/sec5-1.jpg")}
                />
              </div>
            </div>
            <div className="col-6 flex-row-center col-lg-12 col-sm-12 height-inherit">
              <div className="col-8 flex-center height-100">
                <div
                  id="sec5-textblock"
                  className="text-block flex-column-start col-11"
                >
                  <p className="text text-title pb-4">How to find us</p>
                  <p className="text pl-3 pb-2">Technical support:</p>
                  <p className="text p-1">
                    <FontAwesomeIcon icon={faHeadset} />{" "}
                    https://some.support.com
                  </p>
                  <p className="text pl-3 pb-2">phone:</p>
                  <p className="text p-1">
                    <FontAwesomeIcon icon={faPhoneAlt} /> +12345678910
                  </p>
                  <p className="text pl-3 pb-2">email:</p>
                  <p className="text p-1">
                    <FontAwesomeIcon icon={faEnvelope} /> restav.devs@gmail.com
                  </p>
                  <p className="text pl-3 pb-2">instagram:</p>
                  <p className="text p-1">
                    <FontAwesomeIcon icon={faInstagram} /> @restav.devs
                  </p>
                  <p className="text pl-3 pb-2">facebook:</p>
                  <p className="text p-1">
                    <FontAwesomeIcon icon={faFacebook} /> Restav Devs
                  </p>
                </div>
              </div>
              <div className="col-4 ">
                <div className="elem-fit">
                  <img
                    className="img5"
                    src={require("./css-styles/images/Crystal-Wallpaper-3.jpg")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
