import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ text, icon = true, to = "/" }) => {
  return (
    <Link
      to={to}
      className="btn-primary"
    >
      <span>{text}</span>
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9879 7C19.9919 7 19.996 7 20 7V9.0001H19.9582C15.1626 9.0198 12 12.4251 12 15.5H10C10 12.9999 11.3841 10.6065 13.6159 9.0001H0.5V7.0001H13.6161C11.3842 5.39368 10 3.00012 10 0.5H12C12 3.58118 15.1757 6.9943 19.9879 7Z"
            fill="white"
          />
        </svg>
      )}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  to: PropTypes.string,
};

export default Button;
