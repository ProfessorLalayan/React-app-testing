import React from "react";



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
          <span class="arrow right"></span>
          </a>
        </div>
      </div>
  );
};

export default PostItem;
