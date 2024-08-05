import React from 'react'
import { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";


const Rating = ({ maxRating = 5 }) => {
    const [rating, setRating] = useState(0);
function Rating() {
  return (
    <div className="flex space-x-1">
    {[...Array(maxRating)].map((_, index) => (
      <button
        key={index}
        onClick={() => setRating(index + 1)}
        onMouseEnter={() => setRating(index + 1)}
        onMouseLeave={() => setRating(rating)}
        className="focus:outline-none"
      >
        {index < rating ? (
          <IoIosStar className="w-6 h-6 text-yellow-500" />
        ) : (
            <IoIosStarOutline className="w-6 h-6 text-black-400" />
        )}
      </button>
    ))}
  </div>
  )
}
}

export default Rating