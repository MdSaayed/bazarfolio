import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ text = 'Add Your Subtitle', styleClassName = '', variant = 'black' }) => {
  const variantStyles = {
    white: {
      text: 'text-white',
      dot: 'bg-white',
    },
    black: {
      text: 'text-blue-gray',
      dot: 'bg-blue-gray',
    },
  };

  const { text: textColor, dot: dotBg } = variantStyles[variant] || variantStyles.black;

  return (
    <p className={`subtitle mb-4 flex items-center gap-1 ${textColor} ${styleClassName}`}> 
      <span className={`inline-block h-2 w-2 rounded-full ${dotBg}`}></span>
      {text}
    </p>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  styleClassName: PropTypes.string,
  variant: PropTypes.oneOf(['white', 'black']),
};

export default Subtitle;
