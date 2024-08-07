'use client';
import CarouselSingle from './CarouselSingle';
import { useState, useRef } from 'react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = ({ members }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    if (activeSlide < members.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className='carousel__wrapper'>
      <div className='carousel'>
        {members.map((member, index) => {
          return (
            <CarouselSingle
              activeSlide={activeSlide}
              index={index}
              key={member._id}
              member={member}
            />
          );
        })}
      </div>
      <div className='carousel__nav'>
        <div className='carousel__nav__buttons'>
          <button onClick={handlePrev} disabled={activeSlide === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={activeSlide === members.length - 1}
          >
            Next
          </button>
        </div>
        <span className='carousel__nav__count'>
          {activeSlide + 1} / {members.length}
        </span>
      </div>
    </div>
  );
};

export default Carousel;
