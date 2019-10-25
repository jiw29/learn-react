import React, { Fragment } from 'react';
import Input from './Input';

const TextField = (props: any) => {
  const { label, ...rest } = props;
  const fieldRef = React.createRef<HTMLInputElement>();
  return (
    <Fragment>
      <label>{label}</label>
      <Input
        {...rest}
        ref={fieldRef}
      />
    </Fragment>
  );
};
export default TextField;