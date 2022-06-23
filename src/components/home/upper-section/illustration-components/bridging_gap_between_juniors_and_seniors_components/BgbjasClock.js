import React from "react";
import clock from "../../../../../assets/home/what_is_uthaan/bridging_gap_between_juniors_and_seniors/graphic_parts/SVG/clock.svg";
import "../../../../../styles/home/upper-section/illustration-container/BridgingGapBetweenJuniorsAndSeniors/BgbjasClock.css";

function BGBJAS_Clock() {
  return (
    <div id="BGBJAS-Clock-wrapper">
      <img src={clock} alt="clock" id="BGBJAS-Clock" />
      <div className="BGBJAS-Clock-arrow-one"></div>
      <div className="BGBJAS-Clock-arrow-two"></div>
      <div className="BGBJAS-Clock-center"></div>
    </div>
  );
}

export default BGBJAS_Clock;
