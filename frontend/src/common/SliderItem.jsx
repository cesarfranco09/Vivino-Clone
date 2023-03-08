import React, { useState } from "react";
import "./sliderItem.css";
// import {
//   PlayArrow,
//   ThumbUpAltOutlined,
//   ThumbDownOutlined,
//   Add,
// } from "@material-ui/icons";

export default function SliderItem({ index, img_url }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="slider-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      
      <img
        src="https://vinevino-seeds.s3.us-west-1.amazonaws.com/red_1.png"
        alt=""
      />
      {isHovered && (
        <>

        
        </>
      )}
    </div>
  );
}