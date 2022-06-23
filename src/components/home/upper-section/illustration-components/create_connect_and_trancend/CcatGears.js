import React from "react";

import "../../../../../styles/home/upper-section/illustration-container/CreateConnectAndTrancend/CcatGears.css";
import gear3 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/gear_3.svg";
import gear2 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/gear_2.svg";
import gear1 from "../../../../../assets/home/what_is_uthaan/create_connect_and_trancend/graphic_parts/SVG/gear_1.svg";

function CcatGears() {
  return (
    <div id="CCAT-Gear">
      <img src={gear3} alt="graphic" id="CCAT-Gear3" />
      <img src={gear2} alt="graphic" id="CCAT-Gear2" />
      <img src={gear1} alt="graphic" id="CCAT-Gear1" />
    </div>
  );
}

export default CcatGears;
