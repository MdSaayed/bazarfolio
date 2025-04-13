import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, variant = 'white', styleClassName = '' }) => {
  let variantClass = '';

  switch (variant) {
    case 'white':
      variantClass = 'text-white';
      break;
    case 'black':
      variantClass = 'text-blue-gray';
      break;
    case 'gradient':
      variantClass = 'gradient-text';
      break;
    default:
      variantClass = 'text-white';
  }

  return (
    <h2 className={`text-[2rem] font-semibold leading-primary ${variantClass} ${styleClassName}`}>
      {text}
    </h2>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['white', 'black', 'gradient']), 
  styleClassName: PropTypes.string,
};

export default Title;
