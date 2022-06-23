import React, { useRef } from "react";
import { Link } from "react-router-dom";
import reactDom from "react-dom";

import Instituelogo from "../../../assets/footer/insitute_logo.svg";

import "../../../styles/_general/PrimaryFooter.css";

import arrorwImg from "../../../assets/_general/arrow.svg";

import ImageStackComponent from "./footer_helper/ImageStackComponent";
import { contactLinks } from "../../../utils/GeneralConstants";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../../assets/_general/social_media_icons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const General = ["Home"];
const GeneralRoutes = [""];
const Browse = [
  "Events",
  "Gallery",
  "Team",
  "Contact Us",
];
const BrowseRoutes = [
  "events",
  "gallery",
  "team",
  "contactus",
];
const Support = ["hostelsatpura@gmail.com", "(+91) 9604036906", "(+91) 9650093751"];
const SupportHrefs = [
  "mailto:hostelsatpura@gmail.com",
  "tel:+919604036906",
  "tel:+919650093751",
];
const SocialMediaIcons = [
  "facebook",
  "mail",
  "instagram",
  "youtube",
  "linkedin",
  "github",
];

const GeneralList = General.map((General, index) => {
  return (
    <li key={index}>
      <Link to={`${GeneralRoutes[index]}`}>{General}</Link>
    </li>
  );
});
const BrowseList = Browse.map((Browse, index) => {
  return (
    <li key={index}>
      <Link to={`${BrowseRoutes[index]}`}>{Browse}</Link>
    </li>
  );
});
const SupportList = Support.map((Support, index) => {
  return (
    <li key={index}>
      <a href={`${SupportHrefs[index]}`}>{Support}</a>
    </li>
  );
});
const SocialMediaIconsList = SocialMediaIcons.map(
  (SocialMediaIconName, index) => {
    return (
      <ImageStackComponent
        key={index}
        link={contactLinks[SocialMediaIconName]}
        normalDisplay={images[`ic_${SocialMediaIconName}.svg`].default}
        hoverDisplay={images[`h_ic_${SocialMediaIconName}.svg`].default}
        iconsClass={`primary-footer-social-media-icons`}
        iconsWrapperClass={`primary-footer-social-media-icon-wrapper`}
      />
    );
  }
);
function getYear() {
  return new Date().getFullYear();
}

function PrimaryFooter() {
  const footerGeneralLinksRef = useRef(12);
  const footerBrowseLinksRef = useRef(123);
  const footerSupportLinksRef = useRef(1234);

  function handleFooterLinkTitleClick(ref) {
    if (ref?.current) {
      if (window.getComputedStyle(ref.current).height === "50px") {
        ref.current.style.height = ref.current.scrollHeight + "px";
        ref.current.childNodes[0].childNodes[1].style.transform =
          "rotate(180deg)";
      } else {
        ref.current.style.height = "50px";
        ref.current.childNodes[0].childNodes[1].style.transform =
          "rotate(0deg)";
      }
    }
  }

  return (
    
    <footer className="primary-footer-wrapper">
      <div className="primary-footer-upper-container">
        <div className="primary-footer-footer-links">
          <div ref={footerGeneralLinksRef}>
            <span
              onClick={(e) => {
                handleFooterLinkTitleClick(footerGeneralLinksRef);
              }}
            >
              General <img src={arrorwImg} className="primary-footer-arrow" />
            </span>
            <ul>{GeneralList}</ul>
          </div>
          <div ref={footerBrowseLinksRef}>
            <span
              onClick={(e) => {
                handleFooterLinkTitleClick(footerBrowseLinksRef);
              }}
            >
              Browse <img src={arrorwImg} className="primary-footer-arrow" />
            </span>
            <ul>{BrowseList}</ul>
          </div>
          <div ref={footerSupportLinksRef}>
            <span
              onClick={(e) => {
                handleFooterLinkTitleClick(footerSupportLinksRef);
              }}
            >
              Support <img src={arrorwImg} className="primary-footer-arrow" />
            </span>
            <ul>{SupportList}</ul>
          </div>
        </div>
      </div>

      <div className="primary-footer-lower-container">
        <div className="primary-footer-instiute-information-wrapper">
          <div className="primary-footer-instiute-information-outer-container">
            <div className="primary-footer-instiute-information-inner-container">
              <img src={Instituelogo}  alt="Institutelogo" />
            </div>
          </div>
          <p>
          Indian Institute of Technology, Delhi

          </p>
        </div>
        <div className="primary-footer-right-icons">
          <div
            style={{
              display: "flex",
            }}
          >
            {SocialMediaIconsList}
          </div>
          <p>
            <a  href="https://www.linkedin.com/in/aditya-kumar-inductor/" target="_blank" rel="noopener noreferrer">Developed by</a>
            <span style={{ color: "#929292", padding: "0 10px" }}>|</span>
            <a href="https://www.linkedin.com/in/aditya-kumar-inductor/" target="_blank" rel="noopener noreferrer">Aditya K.</a>
          </p>
          <div className="primary-footer-copyright">Copyright (c) {getYear()}</div>
        </div>
      </div>
    </footer>
  );
}

export default PrimaryFooter;
