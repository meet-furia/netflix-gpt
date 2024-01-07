import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="relative w-80 h-48 p-2 pr-3 hover:cursor-pointer">
      <img
        alt="Movie Card"
        src={IMG_CDN + posterPath}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition-opacity duration-300 opacity-0 hover:bg-opacity-80 flex flex-col justify-center items-center">
        {/* Additional details to be displayed on hover */}
        <h3 className="text-white text-lg font-bold mb-2">Movie Title</h3>
        <p className="text-white text-sm">Release Date: June 2023</p>
        {/* Add more details here */}
      </div>
    </div>
  );
};

export default MovieCard;
