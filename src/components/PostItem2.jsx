import React from "react";

const PostItem = (props) => {
  return (
    <div className="swiper-slide feature-box-03">
      <div className="feature-img">
        <img src={props.img} alt={`Post ${props.img}`} className="PostItem2-images" />
      </div>
      <div className="feature-content">
        <div className="icons"><i className="fas fa-quote-left"></i></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry&#x27;s standard dummy text ever since the 1500s.
        </p>
        <h6>Jennifer Lutheran</h6>
        <span>CEO at pxdraft</span>
      </div>
    </div>
  );
};

export default PostItem;
