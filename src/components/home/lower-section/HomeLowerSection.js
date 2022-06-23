import React from "react";
import TextComponent from "../../_general/TextComponent";
import "../../../styles/home/lower-section/HomeLowerSection.css";
import DirectorImageComponent from "./DirectorImageComponent";
import DirectorImage from "../../../assets/home/aniket.jpg";

const HomeLowerSectionContent =
  "Historically, Satpura has been a powerhouse in Dance and Dramatics, producing some of the finest dancers and institute-level dramatists. Lately, there has also been a steep rise in Debating and PFC culture. It has also produced some of the best Institute level swimmers who represent IIT in various Inter-college competitions. Satpura is also famous for producing some of the best coders and developers in recent times, many of them reaching the finals of the best coding competitions. The hostel also boasts a large number of high CGPA students, Department Toppers, and Department changes.";
// const HomeLowerSectionMaintextStyle = {
//   fontWeight: "normal",
//   color: "#222222",
//   textAlign: "center",
// };

const HomeLowerSectionDirectorContent =
  "Satpura is known for one of the best Wall paintings among all Hostels. It also owns one of the finest gardens on Campus. Lush green and very well maintained, we were the second runners-up in Garden Trophy 2019. We also have one of the best messes on Campus, both in terms of food quality and cleanliness. Every year we do our best to make all kinds of amenities available to the residents";
const HomeLowerSectionDirectorContentStyle = {
  fontWeight: "500",
  color: "#222222",
};

function HomeLowerSection() {
  return (
    <div>
      <div className="home-lower-section-main-text">
        {HomeLowerSectionContent}
      </div>

      <div className="home-lower-section-director-section">
        <div>
          <DirectorImageComponent ImgSource={DirectorImage} />
        </div>
        <div className="home-lower-section-director-section-content">
          <h2> Aniket Bhandare </h2>
          <h2> House Secretary, Satpura House </h2>
          <div>
            <TextComponent
              innerContent={HomeLowerSectionDirectorContent}
              textComponentStyle={HomeLowerSectionDirectorContentStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLowerSection;
