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
        src="https://www.sokolin.com/media/catalog/product/cache/93e14f0b1785d03338e9b88bd41f6315/1/9/1976-petrus-Bordeaux-Red--1976-petrus.jpg"
        alt=""
      />
      {isHovered && (
        <>

        
        </>
      )}
    </div>
  );
}