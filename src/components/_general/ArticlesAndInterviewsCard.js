import React from "react";
import "../../styles/_general/articles_and_interviews_card.css";
import { mediumPostImageURL } from "../../utils/GeneralConstants";

function ArticlesAndInterviewsCard({
  imageUrl = "",
  title = "",
  date = "",
  link = "",
}) {
  return (
    <a href={`${link}`} target="_blank" rel="noopener noreferrer" className="articles-and-interviews-card-primary-href-wrapper">
      <div className="articles-and-interviews-card-primary-wrapper">
        <div className="articles-and-interviews-card-secondary-wrapper">
          <img
            src={imageUrl}
            alt={`${title}`}
            className="articles-and-interviews-card-image"
            onLoad={(e) => {
              e.target.style.opacity = 1;
              e.target.style.filter = "blur(0)";
            }}
          />
          <div className="articles-and-interviews-card-scrim" />
          <div className="articles-and-interviews-card-text-wrapper">
            <h4 className="articles-and-interviews-card-title">{title}</h4>
            <h5 className="articles-and-interviews-card-date">{date}</h5>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ArticlesAndInterviewsCard;
