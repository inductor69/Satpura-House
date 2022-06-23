import React from "react";

import ImageStackComponent from "./footer_helper/ImageStackComponent";
import { Link } from "react-router-dom";

import "../../../styles/_general/secondary_footer.css";

import importAll from "../helpers/import_all";
import satpuraLogo from "../../../assets/samurai_logo/samurai.jpg";
import { contactLinks } from "../../../utils/GeneralConstants";

const images = importAll(
  require.context(
    "../../../assets/_general/social_media_icons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const SocialMediaIcons = [
  "facebook",
  "mail",
  "instagram",
  "youtube",
  "linkedin",
  "github",
];

const SocialMediaIconsList = SocialMediaIcons.map(
  (SocialMediaIconName, index) => {
    return (
      <ImageStackComponent
        key={index}
        link={contactLinks[SocialMediaIconName]}
        normalDisplay={images[`ic_${SocialMediaIconName}.svg`].default}
        hoverDisplay={images[`h_ic_${SocialMediaIconName}.svg`].default}
        iconsClass="secondary-footer-social-media-icons"
      />
    );
  }
);
function getYear() {
  return new Date().getFullYear();
}

function SecondaryFooter() {
  return (
    <div className="secondary-footer-wrapper">
      <div className="secondary-footer-left-wrapper">
        <Link to="/">
          <img src={satpuraLogo} alt="satpuraLogo" />
        </Link>
        <div className="secondary-footer-left-copyright-wrapper">
          Copyright (c) {getYear()}
        </div>
      </div>
      <div className="secondary-footer-right-wrapper">
        <div className="secondary-footer-social-media-icons-wrapper">
          {SocialMediaIconsList}
        </div>
        <p>
        <a  href="https://www.linkedin.com/in/aditya-kumar-inductor/" target="_blank" rel="noopener noreferrer">Developed by</a>
            <span style={{ color: "#929292", padding: "0 10px" }}>|</span>
            <a href="https://www.linkedin.com/in/aditya-kumar-inductor/" target="_blank" rel="noopener noreferrer">Aditya K.</a>
        </p>
      </div>
    </div>
  );
}

export default SecondaryFooter;
