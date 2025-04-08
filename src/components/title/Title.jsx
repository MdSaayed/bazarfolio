import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, styleClass = 'text-white',textColor='white'}) => {
  return (
    <h2 className={`text-[2rem] font-semibold mt-4 ${styleClass} text-${textColor}`}>
      {text}
    </h2>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
};

export default Title;
