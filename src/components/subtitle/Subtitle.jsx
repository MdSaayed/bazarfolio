import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ text = 'Add Your Subtitle', styleClass = "", textColor = 'blue-gray' }) => {
  return (
    <p className={`subtitle ${styleClass} text-${textColor}`}>
      <span className={`bg-${textColor}`}></span> {text}
    </p>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  textColor: PropTypes.string
};

export default Subtitle;