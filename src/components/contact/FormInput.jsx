import React from "react";

const FormInput = ({
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    error,
    colSpan,
    isTextArea = false,
    rows = 4,
    }) => {
    const baseClasses =
        "w-full border-b border-blue-gray p-2 placeholder:text-base placeholder:text-dark-gray placeholder:leading-primary pl-0 outline-none";

    return (
        <div className={colSpan}>
        {isTextArea ? (
            <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={`${baseClasses} resize-none`}
            />
        ) : (
            <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={baseClasses}
            />
        )}
        {error && <p className="text-red-500 text-[10px] mt-1">{error}</p>}
        </div>
    );
};

export default FormInput;
