import React from 'react';

const Input = (props) => {
  const {
    type = 'text',
    placeholder = 'Enter Placeholder text',
    name,
    value,
    onChange,
  } = props;
  return (
    <input
      className='form-control'
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
