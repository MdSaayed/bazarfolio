import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const CardOne = ({ item }) => {
  const rating = item?.rating || 0;

   // Custom star SVG component
   const Star = (
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  );


  return (
    <div
      className="card relative group transition-all duration-500 hover:z-10 focus:outline-none"
      tabIndex="0" // Makes the div focusable (for mobile and tablet)
    >
      {/* Overlay (Black Background on Hover, visible on Focus and Hover) */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 group-focus:opacity-30 transition-opacity duration-500 z-20 pointer-events-none" />

      {/* Image */}
      <div className="max-h-[300px] overflow-hidden rounded-[12px] relative">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
          src={item?.image}
          alt={item?.name}
        />
      </div>

      {/* Name and Role */}
      <div className="flex justify-between items-center text-white relative z-30 px-2 mt-4">
        <h2 className="text-xl font-medium leading-primary">{item?.name}</h2>
        <span className="bullet text-base font-normal leading-normal">{item?.role}</span>
      </div>

      {/* Review Section - appears on hover and focus */}
      {item?.feedback && (
        <div className="text-white space-y-6 absolute top-1/3 left-0 w-full bg-dark-slate border border-white/50 rounded-[10px] p-4 lg:p-6 scale-[1.02] opacity-0 invisible transition-all duration-800 transform -translate-y-20 group-hover:opacity-100 group-focus:opacity-100 group-hover:visible group-focus:visible group-hover:translate-y-0 group-focus:translate-y-0 z-40">
          <div className="flex gap-1">
            <Rating
              value={rating}
              readOnly
              items={5}
              halfFillMode="svg"  // This enables decimal ratings
              style={{ maxWidth: 120 }}
              itemStyles={{
                itemShapes: Star,
                activeFillColor: '#8A7421', // Gold color for filled stars
                inactiveFillColor: '#CCCCCC', // Gray color for empty stars
                activeStrokeColor: '#FFD700',
                inactiveStrokeColor: '#CCCCCC',
              }}
            />
          </div>

          <p className="text-base font-normal leading-normal z-40">{item?.feedback}</p>

          <div className="space-y-2">
            <h2 className="text-xl font-medium leading-primary z-40">{item?.name}</h2>
            <span className="bullet text-base font-normal leading-normal z-40">{item?.role}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOne;
