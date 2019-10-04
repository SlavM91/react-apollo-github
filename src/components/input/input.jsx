import React from 'react';

export const Input = ({
  type = 'text',
  onChange = () => {
  },
  name,
  style,
  value = '',
  placeholder = '',
}) =>
    <input style={style} type={type} onChange={onChange} id={name} value={value} placeholder={placeholder}/>;