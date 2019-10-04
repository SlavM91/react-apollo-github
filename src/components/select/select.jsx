import React from 'react';

export const Select = ({
   options = [],
   name,
   style,
   placeholder = '',
   value = '',
   onChange = () => {}
}) => <select
    name={name}
    id={name}
    onChange={onChange}
    value={value || placeholder}
    style={style}
    placeholder={placeholder}
>
   {
      !value && placeholder && <option value=''>{placeholder}</option>
   }
   {
      options.map((option, index) => <option key={index}>{option}</option>)
   }
</select>;