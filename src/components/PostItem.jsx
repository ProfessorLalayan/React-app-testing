import React from "react";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#ffffff" width="23" height="23">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
  </svg>
);

const PostItem = (props) => {
  return (
    
      <div className="portfolio-item pf-item">
        <div className="portfolio-image">
          <a href="assets/img/project-1.jpg" className="gallery-link">
          <img src={props.img} alt="Post" />
          
          </a>
        </div>
        
        <div className="portfolio-info">
          <h6>Agency Landing page</h6>
          <span>Web/WordPress</span>
          <a href="assets/img/project-1.jpg" className="gallery-link">
          <ArrowIcon />          </a>
        </div>
      </div>
  );
};

export default PostItem;
