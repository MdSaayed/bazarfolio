import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ text = 'Add Your Description', textColor = 'text-dark-slate', styleClassName = '', maxWidth = '' }) => {
  return (
    <p className={`text-base font-normal leading-normal tracking-desc ${styleClassName} ${textColor} ${maxWidth}`}>
      {text}
    </p>
  );
};

Description.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  styleClassName: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Description;
