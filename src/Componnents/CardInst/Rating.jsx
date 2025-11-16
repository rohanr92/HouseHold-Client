import React from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

const Rating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.round(rating);
  const emptyStars = 5 - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<HiStar key={`full-${i}`} className="text-yellow-400" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<HiOutlineStar key={`empty-${i}`} className="text-yellow-400" />);
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="text-sm text-gray-600 ml-1">({rating})</span>
    </div>
  );
};

export default Rating;
