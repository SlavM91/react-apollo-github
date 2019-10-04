import React from 'react';

export const Button = ({
   buttonText,
   onClick = () => {},
   disabled = false
}) => <button onClick={onClick} disabled={disabled}>{buttonText}</button>;