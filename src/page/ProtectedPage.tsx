import React from 'react';

export default class ProtectedPage extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
  }
  public render(): JSX.Element {
    return (<div>Hello, i am ProtectedPage!</div>);
  }
}
