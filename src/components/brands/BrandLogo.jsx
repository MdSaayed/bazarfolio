import React from 'react';
import PropTypes from 'prop-types';

const BrandLogo = ({ logo, alt = 'Brand Logo' }) => {
  return (
    <div className="w-full flex items-center justify-center">
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
