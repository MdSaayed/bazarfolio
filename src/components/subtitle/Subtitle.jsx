import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ text, styleClass= "" }) => {
  return (
    <span className={`subtitle ${styleClass}`}>
      {text}
    </span>
  );
};

// ✅ PropTypes define
Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  styleClass: PropTypes.string,
};

export default Subtitle;
