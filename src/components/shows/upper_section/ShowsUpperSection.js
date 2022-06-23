import React from "react";
import { ReactComponent as Graphic1 } from "../../../assets/shows/bg/bg1.svg";
import { ReactComponent as Graphic2 } from "../../../assets/shows/bg/bg2.svg";
import { ReactComponent as Graphic3 } from "../../../assets/shows/bg/bg3.svg";
import { ReactComponent as Graphic4 } from "../../../assets/shows/bg/bg4.svg";
import { ReactComponent as PrimaryGraphic } from "../../../assets/shows/graphic.svg";
import { pageDescriptions } from "../../../utils/GeneralConstants";
import ListingPagesTopBreifComp from "./../../_general/listing_pages_top_bottom_comps/ListingPagesTopBreifComp";

function ShowsUpperSection() {
  return (
    <div>
      <ListingPagesTopBreifComp
        floatingBgImagesList={[
          <Graphic1 preserveAspectRatio="none" />,
          <Graphic2 preserveAspectRatio="none" />,
          <Graphic3 preserveAspectRatio="none" />,
          <Graphic4 preserveAspectRatio="none" />,
        ]}
        bgELementsRatios={[1, 0.9, 0.55, 0.45]}
        primaryHeight="50vh"
        topicTitle="SHOWS"
        topicDescription={pageDescriptions.SHOWS_PAGE}
        textDivStylingClass="lisitng-page-center-text-div-for-shows-page"
        textTitleStylingClass="listing-page-center-text-title-for-shows-page"
        textDescriptionStylingClass="listing-page-center-text-description-for-shows-page"
        primaryGraphicCompStylingClass="listing-pages-top-breif-sec-primary-graphic-component-wrapper-for-shows-page"
        PrimaryGraphicComp={<PrimaryGraphic />}
      />
    </div>
  );
}

export default ShowsUpperSection;
