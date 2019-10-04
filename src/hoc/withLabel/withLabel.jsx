import React from 'react';
import {Input} from "@components/input";
import {Select} from "@components/select";

export const withLabel = Component => ({ name, labelText, ...rest }) => <label htmlFor={name}>
    {labelText}
    <Component name={name} {...rest}/>
</label>;

export const InputWithLabel = withLabel(Input);
export const SelectWithLabel = withLabel(Select);