import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputText = ({
  control,
  name,
  defaultValue = '',
  rules,
  label,
  ...props
}) => (
  <Controller
    control={control}
    name={name}
    defaultValue={defaultValue}
    rules={rules}
    render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
      <TextField
        type='text'
        label={label}
        value={value}
        inputRef={ref}
        onChange={onChange}
        margin='normal'
        error={!!error}
        helperText={error ? error.message : ''}
        {...props}
      />
    ))}
  />
);

export default InputText;
