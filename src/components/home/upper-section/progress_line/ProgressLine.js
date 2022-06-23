import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "../../../../styles/home/upper-section/progress_line/progress_line.css";
import LineDot from "./../../../_general/LineDot";

import progressLibePositionController from "./helpers/position_conroller";
import useMediaQuery from "./../../../_general/helpers/useMediaQuery";

function ProgressLine({ numberOfDots, currentState }) {
  const positionSideDefiner = useRef([1, 1, 1]);
  const [currentStateForDot, setCurrentStateForDot] = useState([0, 1, 2]);
  const [dotsDimens, setDotsDimens] = useState({
    innerRadiusStates: ["7px", "4px", "2px"],
    outerRadiusStates: ["12px", "9px", "6px"],
    strokeStates: ["3px", "1px", "1px"],
  });
  const [sliderWidthIndex, setSliderWidthIndex] = useState(0.7);
  const [windowWidth] = useMediaQuery();

  useEffect(() => {
    if (parseInt(windowWidth) <= 475) {
      setDotsDimens({
        innerRadiusStates: ["5px", "4px", "2px"],
        outerRadiusStates: ["9px", "7px", "4px"],
        strokeStates: ["2px", "1px", "1px"],
      });
      setSliderWidthIndex(0.8);
    } else {
      setDotsDimens({
        innerRadiusStates: ["7px", "4px", "2px"],
        outerRadiusStates: ["12px", "9px", "6px"],
        strokeStates: ["3px", "1px", "1px"],
      });
      setSliderWidthIndex(0.7);
    }
  }, [windowWidth]);

  useEffect(() => {
    let tempStateObj = [];
    let sideDefiner = [];
    for (let index = 0; index < 3; index++) {
      let tempState = index - currentState;
      let tempSide = tempState > 0 ? 1 : -1;
      tempStateObj.push(Math.abs(tempState));
      sideDefiner.push(tempSide);
    }
    setCurrentStateForDot(tempStateObj);
    positionSideDefiner.current = sideDefiner;
  }, [currentState]);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    let elements = document.getElementsByClassName("line-dot-wrapper");
    for (let index = 0; index < currentStateForDot.length; index++) {
      let position;
      let elementState = currentStateForDot[index];
      if (!Number.isInteger(elementState)) {
        let bottomState = Math.floor(elementState);
        let topState = Math.ceil(elementState);
        let positionIndexAccordingToBottomState =
          progressLibePositionController(bottomState);
        let positionIndexAccordingToTopState =
          progressLibePositionController(topState);

        position =
          (positionIndexAccordingToBottomState * (topState - elementState) +
            positionIndexAccordingToTopState * (elementState - bottomState)) /
          2;

      } else {
        position = progressLibePositionController(elementState) / 2;
      }
      elements[index].style.transform = `translateX(${
        parseFloat(position) *
        parseFloat(positionSideDefiner.current[index]) *
        parseFloat(windowWidth) *
        sliderWidthIndex
      }px)`;
    }
  }, [currentStateForDot, windowWidth]);

  return (
    <div className="progress-line-wrapper">
      <div className="progress-bar-line"></div>
      <div className="line-dot-wrapper">
        <LineDot
          currentState={currentStateForDot[0]}
          innerRadiusStates={dotsDimens.innerRadiusStates}
          outerRadiusStates={dotsDimens.outerRadiusStates}
          strokeStates={dotsDimens.strokeStates}
        />
      </div>
      <div className="line-dot-wrapper">
        <LineDot
          currentState={currentStateForDot[1]}
          innerRadiusStates={dotsDimens.innerRadiusStates}
          outerRadiusStates={dotsDimens.outerRadiusStates}
          strokeStates={dotsDimens.strokeStates}
        />
      </div>
      <div className="line-dot-wrapper">
        <LineDot
          currentState={currentStateForDot[2]}
          innerRadiusStates={dotsDimens.innerRadiusStates}
          outerRadiusStates={dotsDimens.outerRadiusStates}
          strokeStates={dotsDimens.strokeStates}
        />
      </div>
    </div>
  );
}

ProgressLine.propTypes = {
  numberOfDots: PropTypes.number,
};

export default ProgressLine;
