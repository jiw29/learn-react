import React, { useState } from 'react';

const Input = React.forwardRef((props: any, ref: any) => {
  const { id, name, type, defaultValue } = props;
  const [state, setState] = useState({ value: '' });
  const handleFocus = (e: React.SyntheticEvent) => {
    console.log(e);
  };
  const handleBlur = (e: React.SyntheticEvent) => {
    console.log(e);
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState({ ...state, value: e.currentTarget.value });
    console.log(e.currentTarget.value);
  };
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={state.value}
      defaultValue={defaultValue}
      ref={ref}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
});
export default Input;