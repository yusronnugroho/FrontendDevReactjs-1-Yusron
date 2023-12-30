import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'; // using react icons kadang error

const Rate = ({ value }) => {
  const rateMax = 5;
  const rateStar = Array.from({ length: rateMax }, (_, index) => {
    if (index < Math.floor(value)) {
      return <FaStar key={index} />;
    } else if (index === Math.floor(value) && value % 1 !== 0.0) {
      return <FaStarHalfAlt key="half" />;
    } else {
      return <FaRegStar key={index} />;
    }
  });

  return <div className="flex flex-wrap text-blue-950 rating">{rateStar}</div>;
};

export default Rate;
