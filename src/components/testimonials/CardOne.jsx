import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';

const CardOne = ({ item }) => {
  const rating = item?.rating || 0;

  return (
    <div className="card relative group transition-all duration-500 hover:z-10">
      {/* Overlay (Black Background on Hover, visible) */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20 pointer-events-none" />

      {/* Image */}
      <div className="max-h-[300px] overflow-hidden rounded-[12px] relative z-10">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={item?.image}
          alt={item?.name}
        />
      </div>

      {/* Name and Role */}
      <div className="flex justify-between items-center text-white relative z-30 px-2 pt-2">
        <h2 className="text-xl font-medium leading-primary">{item?.name}</h2>
        <span className="bullet text-base font-normal leading-normal">{item?.role}</span>
      </div>

      {/* Review Section - appears on hover */}
      {item?.feedback && (
        <div className="text-white space-y-6 absolute top-1/2 left-0 w-full bg-dark-slate border border-white/50 rounded-[10px] p-4 lg:p-6 scale-[1.02] opacity-0 invisible transition-all duration-500 transform translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-40">
          <div className="flex gap-1">
            <Rating
              readonly
              initialRating={rating}
              fullSymbol={<AiFillStar className="text-xl text-primary" />}
              emptySymbol={<AiOutlineStar className="text-xl text-gray-600" />}
              fractions={2}
            />
          </div>

          <p className="text-base font-normal leading-normal">{item?.feedback}</p>

          <div className="space-y-2">
            <h2 className="text-xl font-medium leading-primary">{item?.name}</h2>
            <span className="bullet text-base font-normal leading-normal">{item?.role}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOne;
