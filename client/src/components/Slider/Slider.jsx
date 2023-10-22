import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import styles from './Slider.module.css';

const Slider = () => {
  
    
  const slides = [
    {
      url: 'https://media.cntraveler.com/photos/63cac962a20dd5b7d9e22c46/16:9/w_2560%2Cc_limit/Airplane%2520night%2520sky%2520moon%2520_%2520marvin-van-beek-z3faD7yMRwg-unsplash.jpg',
     
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Airbus_A320-214%2C_Lufthansa_JP7384058.jpg',
    
    },
    {
      url: 'https://www.savethestudent.org/uploads/flights.jpg',
    
    },
  
    {
      url: 'https://media.cntraveller.com/photos/64ca4c728fda363db57f27bf/16:9/w_2560%2Cc_limit/Singapore-Airlines-acft-a350-3.jpg',
    
    },
    {
      url: 'https://media.cntraveler.com/photos/599dd39ae74489198b4e3080/16:9/w_4511,h_2537,c_limit/Flight-Deals_GettyImages-126346910.jpg',
 
    },
  ];  


      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
      return (
        <div className={styles.slider_container}>
          <img
            src={slides[currentIndex].url} 
            className={styles.slide}
          ></img>
    
          <div className={styles.left}>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
    
          <div className={styles.right}>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
    
          <div className={styles.dot_container}>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={styles.dots}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Slider;