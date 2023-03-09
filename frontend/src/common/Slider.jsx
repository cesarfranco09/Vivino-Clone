import React, { useState, useRef } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import SliderItem from './SliderItem'
import './slider.css'


const Slider = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const listRef = useRef();
  const numberOfItemsToShow = 4;

  const handleClick = (direction) => {
    const slideWidth = listRef.current.offsetWidth / numberOfItemsToShow;
    let distance = (slideNumber * -slideWidth);
  
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      distance += slideWidth;
      listRef.current.style.transform = `translate(${distance}px)`;
    } else if (direction === 'right' && slideNumber < 3) {
      const nextSlideNumber = slideNumber + 1;
      const nextSlideWidth = (nextSlideNumber + 1) * slideWidth > listRef.current.offsetWidth ?
        listRef.current.offsetWidth / (nextSlideNumber + 1) :
        slideWidth;
  
      setSlideNumber(nextSlideNumber);
      distance -= nextSlideWidth;
      listRef.current.style.transform = `translate(${distance}px)`;
    }
  };
  

  return (
    <div className="list">
      <div className="slider-wrapper">
        <SlArrowLeft
          className="sliderArrow left"
          onClick={() => handleClick('left')}
          style={{ display: slideNumber === 0 && 'none' }}
        />
        <div className="slider-container" ref={listRef}>
          <SliderItem index={1} />
          <SliderItem index={2} />
          <SliderItem index={3} />
          <SliderItem index={4} />
          <SliderItem index={5} />
          <SliderItem index={6} />
          <SliderItem index={7} />
          <SliderItem index={8} />
          <SliderItem index={9} />
          <SliderItem index={10} />
          <SliderItem index={11} />
          <SliderItem index={12} />
          <SliderItem index={13} />
        </div>
        <SlArrowRight
          className="sliderArrow right"
          onClick={() => handleClick('right')}
          style={{ display: slideNumber === 3 && 'none' }}
        />
      </div>
    </div>
  )
}





export default Slider