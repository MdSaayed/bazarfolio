import React from 'react';
import PropTypes from 'prop-types';

const BrandLogo = ({ logo, alt = 'Brand Logo' }) => {
  return (
    <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px]">
      <img
        className="w-full h-auto object-contain"
        src={logo}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

BrandLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default BrandLogo;
