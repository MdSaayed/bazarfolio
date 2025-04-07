import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ text = 'Add Your Description', textColor = 'text-dark-slate', styleClass = '', maxWidth = '' }) => {
  return (
    <p className={`text-base font-normal leading-normal tracking-desc ${styleClass} ${textColor} ${maxWidth}`}>
      {text}
    </p>
  );
};

Description.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  styleClass: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Description;
