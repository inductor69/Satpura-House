import React from "react";
import "../../../../styles/home/upper-section/what-is-uthaan-content/WhatIsUthaanMainContent.css";
import WhatIsUthaanStyledText from "./WhatIsUthaanStyledText";

function WhatIsUthaan() {
  return (
    <div className="what-is-satpura">
      <div className="what-is-satpura-left-wrapper-wrapper">
        <div className="what-is-satpura-right-wrapper">Satpura House</div>
      </div>
    </div>
  );
}

function WhatIsUthaanMainContent({ currentState = 0 }) {
  return (
    <div className="what-is-satpura-main-wrapper">
      <WhatIsUthaan />
      <div className="what-is-satpura-title-content-wrapper">
      <WhatIsUthaanStyledText currentState={currentState} />
      </div>
    </div>
  );
}

export default WhatIsUthaanMainContent;
