import React from 'react';
import PropTypes from 'prop-types';

const CustomSelect = ({ id, name, value, onChange, children, wrapperClassName = '', selectClassName = '', required = false, placeholder }) => {
  const defaultSelectClass = 'w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm appearance-none pr-10';
  return (
    <div className={`relative ${wrapperClassName}`}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${selectClassName || defaultSelectClass}`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>

      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
};

CustomSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  children: PropTypes.node,
  // wrapperClassName applies to the outer wrapper; selectClassName applies to the <select>
  wrapperClassName: PropTypes.string,
  selectClassName: PropTypes.string,
  // backward compatibility: accept className too (maps to wrapper)
  className: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default CustomSelect;
