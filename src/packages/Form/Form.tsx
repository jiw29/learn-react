import React from 'react';

const Form = (props: any) => {
  const getValues = (e: React.SyntheticEvent) => {
    console.log(e.currentTarget['input[name="username"]']);
    console.log();
    e.preventDefault();
    return false;
  };
  const keyDown = (e: React.SyntheticEvent) => {
    console.log(e);
  };
  const ref = React.createRef<HTMLFormElement>();
  return (
    <form
      onSubmit={getValues}
      onKeyDown={keyDown}
      ref={ref}>
      {props.children}
    </form>
  );
};
export default Form;