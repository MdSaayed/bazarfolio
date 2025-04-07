import React from 'react';

const Description = ({text, styleClass='text-dark-slate',maxWidth=''}) => {
    return (
         <p className={`text-base font-normal leading-normal tracking-desc ${styleClass} ${maxWidth}`}>{text}</p>
    );
};

export default Description;