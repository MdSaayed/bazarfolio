import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ text='Add Your Subtitle', styleClass= "", textColor='text-White' }) => {
  return (
    <span className={`subtitle ${styleClass} ${textColor}`}>
      {text}
    </span>
  );
};

// ✅ PropTypes define
Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
  textColor: PropTypes.string
};

export default Subtitle;
